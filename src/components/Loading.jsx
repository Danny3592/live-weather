import { MoonLoader } from 'react-spinners';
const Loading = () => {
  return (
    <div className="absolute top-0 left-0 bg-[#d6d1edd8] w-full h-[120%] flex items-center justify-center z-10">
      <MoonLoader color="#36d7b7" loading={true} size={80} margin={2} />
    </div>
  );
};

export default Loading;
