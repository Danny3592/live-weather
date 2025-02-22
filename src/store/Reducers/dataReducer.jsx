import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { alertError } from '../../../util/sweetAlert';

export const get_data = createAsyncThunk(
  'data/get_data',
  async function (info, { rejectWithValue, fulfillWithValue }) {
    try {
      const { data:oneDayData } = await axios(
        'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-72F6D7B5-B618-428B-8BB8-CC0BF7ACFBAA',
      );


//其他資料
      // const { data:newData } = await axios(
      //   'https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWA-72F6D7B5-B618-428B-8BB8-CC0BF7ACFBAA',
      // );

      // console.log(oneDayData);
      return fulfillWithValue(oneDayData);
    } catch (error) {
      alertError(error);
      return rejectWithValue(error);
    }
  },
);

const dataReducer = createSlice({
  name: 'data',
  initialState: {
    data: {},
    successMsg: '',
    errorMsg: '',
    loading: false,
  },
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(get_data.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.successMsg = payload?.message;
        state.loading = false;
      })
      .addCase(get_data.pending, (state) => {
        state.loading = true;
      })
      .addCase(get_data.rejected, (state, { payload }) => {
        state.errorMsg = payload?.error;
        state.loading = false;
      });
  },
});

export default dataReducer.reducer;
