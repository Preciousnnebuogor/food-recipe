"use client";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FoodList, IFood } from "./data";
import { Modal } from "./modal";
export default function Home() {
  const [search, setSearch] = useState("");
  const [list, setList] = useState(FoodList);
  const [selectedFood, setSelectedFood] = useState<IFood>({
    foodname: "",
    image: "",
    ingredient: [],
    desc: [],
  });
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <div className={` flex flex-col items-center justify-center `}>
        <div
          className={`flex flex-col items-center justify-center w-[500px]  `}
        >
          <p className={`font-bold text-lg mb-4 mt-20`}>
            Food meals for your Ingredients
          </p>
          <h6 className={`text-xs mb-4`}>
            Nigeria home made foods with all ingredient can <br /> - James Mark
          </h6>
          <div
            className={`border-2 border-green-400 rounded-full pl-4 flex items-center p-0`}
          >
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className=" border-none outline-none"
            />
            <div className={`bg-green-400 h-full rounded-e-full`}>
              <IoIosSearch
                className={`m-2 text-white`}
                onClick={() => {
                  const filteredList = FoodList.filter((value) =>
                    value.foodname.toLowerCase().includes(search.toLowerCase())
                  );
                  setList(filteredList);
                }}
              />
            </div>
          </div>
        </div>

        <div></div>
      </div>

      <div
        className={`px-10 grid md:grid-cols-3 grid-cols-1 md:space-x-4 mt-10 `}
      >
        {list.map((value) => (
          <div className={`flex flex-col items-center mb-4 `}>
            <div className={`border-2 border-green-400 rounded `}>
              <img src={value.image} className={`w-[250px] h-[250px]`} />{" "}
              <div> </div>
              <div className={`flex flex-col items-center`}>
                <p className={`font-bold`}>{value.foodname}</p>
                <button
                  onClick={() => {
                    setSelectedFood(value);
                    setOpen(true);
                  }}
                  className={`bg-green-400 rounded px-2 mb-2 text-white`}
                >
                  Get recipe
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className={`flex flex-col overflow-y-scroll max-h-[100vh] w-full pb-3`}>
          <p className={`text-xl`}>{selectedFood!.ingredient}</p>
          <p>{selectedFood!.desc}</p>
          <hr className={`border-t-solid border-1 border-gray`} />
        </div>
      </Modal>
      <div className={`flex items-center justify-center`}>
        <button className={`bg-green-400 rounded p-2 mb-2 text-white`}>
          Load More
        </button>
      </div>
    </div>
  );
}
