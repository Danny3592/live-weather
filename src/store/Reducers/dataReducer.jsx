import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { alertError } from '../../../util/sweetAlert';

export const get_cityData = createAsyncThunk(
  'data/get_cityData',
  async function (city, { rejectWithValue, fulfillWithValue }) {
    // console.log('city = ',city);

    try {
      const { data: cityData } = await axios(
        'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-72F6D7B5-B618-428B-8BB8-CC0BF7ACFBAA',
      );
      // console.log('cityData = ', cityData);

      if (cityData?.records) {
        //取得台灣每個地點
        const locationSet = cityData.records.location.map(
          (item) => item.locationName,
        );
        if (!locationSet.includes(city)) {
          alertError('請輸入正確的城市名稱');
          setCity('');
          return;
        }
        const cities = locationSet;
        return fulfillWithValue({ cities, cityData });
        // }
      }
    } catch (error) {
      alertError(error);
      return rejectWithValue(error);
    }
  },
);

export const get_townData = createAsyncThunk(
  'data/get_townData',
  async function (_, { rejectWithValue, fulfillWithValue }) {
    try {
      const { data:townData } = await axios(
        'https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWA-72F6D7B5-B618-428B-8BB8-CC0BF7ACFBAA',
      );
      
      return fulfillWithValue(townData);
    } catch (error) {
      alertError(error);
      return rejectWithValue(error);
    }
  },
);

const dataReducer = createSlice({
  name: 'data',
  initialState: {
    successMsg: '',
    errorMsg: '',
    loading: false,
    city: '臺北市',
    town: '',
    locations: {},
    cityData: {},
    townData: {},
    weatherDataOfCity: {},
    weatherDataOfDistrict: {},
  },
  reducers: {
    setCity: (state, { payload }) => {
      state.city = payload;
    },
    setTown: (state, { payload }) => {
      state.town = payload;
    },
    setWeatherOfCity: (state, { payload }) => {
      // console.log('pass');
      state.weatherDataOfCity = payload;
    },
    setWeatherOfDistrict: (state, { payload }) => {
      state.weatherDataOfDistrict = payload;
    },
    setLocations: (state, { payload }) => {
      state.locations = { ...state.locations, [payload.name]: payload.value };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(get_cityData.fulfilled, (state, { payload }) => {
        state.cityData = payload.cityData;
        state.locations = { cities: payload.cities };
        state.successMsg = payload?.message;
        state.loading = false;
      })
      .addCase(get_cityData.pending, (state) => {
        state.loading = true;
      })
      .addCase(get_cityData.rejected, (state, { payload }) => {
        state.errorMsg = payload?.error;
        state.loading = false;
      })
      .addCase(get_townData.fulfilled, (state, { payload }) => {
        state.townData = payload;
        state.successMsg = payload?.message;
        state.loading = false;
      })
      .addCase(get_townData.pending, (state) => {
        state.loading = true;
      })
      .addCase(get_townData.rejected, (state, { payload }) => {
        state.errorMsg = payload?.error;
        state.loading = false;
      });
  },
});

export default dataReducer.reducer;

export const { setCity, setTown, setWeatherOfCity, setWeatherOfDistrict,setLocations

 } =
  dataReducer.actions;
