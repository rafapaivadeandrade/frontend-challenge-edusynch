export default function Newsletter() {
  return (
    <div className="w-screen h-full flex flex-row pt-[120px] pl-[216px] pb-32 gap-8 bg-gradient-to-b from-transparent mt-[120px] bg-Primary">
      <div className="flex flex-col gap-2 w-1/2">
        <div className="flex flex-col gap-1">
          <p className="text-NewsletterText text-1xl">Lorem ipsum</p>
          <p className="text-white text-[40px] font-bold tracking-[-0.4px]">
            Lorem ipsum
          </p>
        </div>
        <div className="w-96">
          <p className="text-white text-base leading-6 w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>
        </div>
      </div>
      <div className="flex flex-col w-96 gap-2 mt-5">
        <span className="text-base font-medium text-white">Email</span>
        <div className="flex items-center bg-white rounded-md shadow-md w-full h-12">
          <input
            type="text"
            placeholder="Email"
            className="w-full h-full px-4 rounded-md placeholder-gray-400 focus:outline-none"
          />
        </div>
        <button className="flex justify-center items-center gap-2 w-96 h-12 px-6 rounded-full bg-Primary shadow-md mt-3">
          <span className="text-base text-white font-medium">Subscribe</span>
        </button>
      </div>
    </div>
  );
}
