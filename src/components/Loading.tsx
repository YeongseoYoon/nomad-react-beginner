import { useBlockScroll } from "../hooks";

const Loading = () => {
  useBlockScroll();
  return (
    <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center font-light text-gray-700">
      <span>Loading...</span>
    </div>
  );
};
export default Loading;
