"use client";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FoodList, IFood } from "./data";
import { Modal } from "./modal";


export default function Correct() {
  const [search, setSearch] = useState("");
  const [list, setList] = useState(FoodList); // Filtered list of foods
  const [visibleCount, setVisibleCount] = useState(4); // Number of items to display
   const [selectedFood, setSelectedFood] = useState<IFood>({
      foodname: "",
      image: "",
      ingredient: [],
      desc: [],
      category: ""
    });
    const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={``}>
      {/* Search Section */}
      <div className={`flex flex-col items-center justify-center  px-4`}>
        <div
          className={`flex flex-col items-center justify-center w-full max-w-lg`}
        >
          <p className={`font-bold text-xl mb-4 mt-20 `}>
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
              className=" border-none outline-none bg-transparent"
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

          <div
            className={`md:flex md:justify-between text-sm md:space-x-2 grid grid-cols-4 space-x-2 items-center font-bold md:text-xs m-4 `}
          >
            <button
              onClick={() => {
                setList(FoodList); // Reset list to show all items
                setSearch(""); // Clear the search input
                setVisibleCount(4); // Reset visible count to the default
                window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top smoothly
              }}
            >
              •Home
            </button>

            <button
              onClick={() => {
                const filteredList = FoodList.filter(
                  (food) => food.category === "soup"
                );
                setList(filteredList);
              }}
            >
              •Soup
            </button>
            <button
              onClick={() => {
                const filteredList = FoodList.filter(
                  (food) => food.category === "swallow"
                );
                setList(filteredList);
              }}
            >
              •Swallow
            </button>

            <button
              onClick={() => {
                const filteredList = FoodList.filter(
                  (food) => food.category === "sauce"
                );
                setList(filteredList);
              }}
            >
              •Sauce
            </button>
            <button
              onClick={() => {
                const filteredList = FoodList.filter(
                  (food) => food.category === "snack"
                );
                setList(filteredList);
              }}
            >
              •Snacks
            </button>
            <button
              onClick={() => {
                const filteredList = FoodList.filter(
                  (food) => food.category === "beans"
                );
                setList(filteredList);
              }}
            >
              •Protein
            </button>
            <button
              onClick={() => {
                const filteredList = FoodList.filter(
                  (food) => food.category === "rice"
                );
                setList(filteredList);
              }}
            >
              •Carbonhydrate
            </button>
          </div>
        </div>
      </div>

      {/* Food Items Section */}
      <div
        className={`px-10 grid md:grid-cols-4 grid-cols-1 md:space-x-4 mt-6`}
      >
        {list.slice(0, visibleCount).map((value, index) => (
          <div key={index} className={`flex flex-col items-center mb-4`}>
            <div className={`border-2 border-green-400 rounded`}>
              <img
                src={value.image}
                className={`w-[250px] h-[250px]`}
                alt={value.foodname}
              />
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
        <div
          className={`flex flex-col overflow-y-scroll max-h-[100vh] w-full pb-3`}
        >
          <p className={`font-bold text-center m-2`}>INGREDIENT</p>
          <div className={`text-lg`}>{selectedFood!.ingredient}</div>
          <p className={`font-bold text-center m-2`}>PREPARATION</p>
          <p>{selectedFood!.desc}</p>
          <hr className={`border-t-solid border-1 border-gray`} />
        </div>
      </Modal>

      {/* Buttons at the Top */}
      <div className={`flex items-center justify-center space-x-4 mt-6`}>
        {visibleCount < list.length && (
          <button
            onClick={() => setVisibleCount((prev) => prev + 4)} // Directly increment visibleCount
            className={`bg-green-400 rounded p-2 text-white mb-4`}
          >
            Load More
          </button>
        )}
        {visibleCount > 4 && (
          <button
            onClick={() => setVisibleCount((prev) => Math.max(4, prev - 4))} // Directly decrement visibleCount
            className={`bg-red-400 rounded p-2 text-white mb-4`}
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
}
