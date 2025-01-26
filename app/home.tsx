"use client"
import { IoIosSearch } from "react-icons/io";
export default function Home(){
    return (
      <div className={``}>
        <div className={`mt-20 flex flex-col items-center justify-center `}>
          <div
            className={`flex flex-col items-center justify-center w-[500px]  `}
          >
            <p className={`font-bold text-lg mb-4`}>
              Food meals for your Ingredients
            </p>
            <h6 className={`text-xs mb-4`}>
              Nigeria home made foods with all ingredient can <br /> - James
              Mark
            </h6>
            <div
              className={`border-2 border-blue-500 rounded-full pl-4 flex items-center p-0`}
            >
              <input className=" border-none outline-none" />
              <div className={`bg-blue-500 h-full rounded-e-full`}>
                <IoIosSearch className={`m-2 text-white`} />
              </div>
            </div>
            <p className={`font-bold mt-4`}>Your Search Result:</p>
          </div>
        </div>
      </div>
    );
}