import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex flex-1 flex-col m-auto h-5/6 items-center justify-center">
      <h1 className="text-5xl pb-2">ooooops!</h1>
      <Image src="/img/404.svg" width={280} height={280} />
    </div>
  );
};

export default NotFound;
