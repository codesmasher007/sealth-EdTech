import react from "react";
import { Manrope } from "next/font/google";
import Burger from "../../assets/Burger.png";
import Burger2 from "../../assets/burger2.png";
import Image from "next/image";
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["700", "500", "600", "800"],
});

const page = () => {
  return (
    <div className={`${manrope.className} `}>
      <div className="flex pt-5 pb-5 items-center bg-white">
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19"
              stroke="#403C3C"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 7L5 12"
              stroke="#403C3C"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 17L5 12"
              stroke="#403C3C"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <div className="text-[14px] font-[700]">Checkout</div>
          <div className="text-[10px]">POPEYES | JP NAGAR</div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        {" "}
        <div className="bg-white rounded-[10px] h-[100px] w-[90%] flex relative">
          <div className="flex items-center">
            <Image
              src={Burger}
              height={80}
              width={80}
              className="p-[10px] w-[80px] h-[80px]"
            ></Image>

            <div className="h-fit">
              <div className="mt-[10px] ">
            
                <div className="text-[12px] font-[700]">Caribbean Spicy Zinger Burger</div>
                <div className="text-[10px] font-[500] text-gray-400">350 KCAL</div>
              </div>

              <div className="test-[12px] font-[700] mt-[10px]">₹ 319</div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 mb-[10px] mr-[10px] flex justify-around items-center rounded-[10px] w-[88px] h-[28px] bg-[rgb(255,213,198)] text-[#F05A26]">
        <button>
            -
        </button>
        <div>1</div>
        <button>+</button>
      </div>
        </div>
      </div>
     
      <div className="flex justify-center mt-5">
        {" "}
        <div className="bg-white rounded-[10px] h-[100px] w-[90%] flex">
          <div className="flex">
            <Image
              src={Burger2}
              height={80}
              width={80}
              className="p-[10px] w-[80px] h-[80px]"
            ></Image>

            <div>
              <div className=" mt-[10px]">
            
                <div className="text-[12px] font-[700]">Cajun Veg Burger</div>
                <div className="text-[10px] font-[500] text-gray-400">250 KCAL</div>
              </div>

              <div className="test-[12px] font-[700] mt-[10px]">₹ 219</div>
            </div>
          </div>
        </div>
      </div>
      <div>frequently ordered</div>
      <div>mapping frequently ordered</div>
      <div>
        <div>deliver to </div>
        <div>total bill</div>
      </div>
      <div>proceed to checkout</div>
    </div>
  );
};

export default page;
