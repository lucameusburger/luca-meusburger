function CookieBanner() {
  return (
    <div className="fixed left-0 right-0 top-0 bottom-0 bg-purple-500 backdrop-blur bg-opacity-10">
      <div className="flex justify-center items-center h-full w-full">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-4xl font-medium">luca meusburger</h3>
          <div className="flex gap-4 justify-center items-center border-purple-500 border max-w-md bg-white rounded-full py-4 px-8">
            <p className=" text-base">this website does not uses any cookies nor collect any personal information</p>
            <button className="border cursor-pointer active:bg-purple-600 transition-all border-purple-500 hover:bg-purple-500 hover:text-white  px-5 py-2 whitespace-nowrap text-base rounded-full ">
              okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
