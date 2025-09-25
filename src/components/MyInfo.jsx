import image from '../assets/증명사진.jpeg';

const MyInfo = () => {
  return (
    <div className="mx-4 pt-4 pb-4 flex items-end bg-green-50 rounded-xl shadow-lg">
      <img className="h-50 mx-10" src={image} alt="증명사진" />
      <div>
        <div className="flex items-end">
          <p className="text-2xl font-bold">성윤수</p>
          <p className="ml-2 text-lg text-gray-300">Seong Youn-soo</p>
        </div>
        <p className="text-gray-800">만 23세, 2002년생</p>
        <p className="text-gray-800">단국대학교 컴퓨터공학과</p>
      </div>
    </div>
  );
};

export default MyInfo;
