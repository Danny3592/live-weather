import { MoonLoader } from 'react-spinners';

//  ;

const Loading = () => {
  return (
    <div className="fixed bg-[#2f2b42d8] w-full h-full flex items-center justify-center z-10">
      <MoonLoader color="#36d7b7" loading={true} size={80} margin={2} />
    </div>
  );
};

export default Loading;
