"use client";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FoodList } from "./data";

export default function Home() {
  const [search, setSearch] = useState("");
  const [list, setList] = useState(FoodList); // Filtered list of foods
  const [visibleCount, setVisibleCount] = useState(4); // Number of items to display

  // Handle Load More functionality
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  // Handle Show Less functionality
  const handleShowLess = () => {
    setVisibleCount((prevCount) => Math.max(4, prevCount - 4)); // Ensure a minimum of 4 items
  };

  return (
    <div className={``}>
      {/* Search Section */}
      <div className={`mt-20 flex flex-col items-center justify-center`}>
        <div className={`flex flex-col items-center justify-center w-[500px]`}>
          <p className={`font-bold text-lg mb-4`}>
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
                const filteredList = FoodList.filter((value) =>
                  value.foodname
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
                );
                setList(filteredList); // Update list based on search
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
      </div>

      {/* Food Items Section */}
      <div
        className={`px-10 grid md:grid-cols-3 grid-cols-1 md:space-x-4 mt-10`}
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
                <button className={`bg-green-400 rounded px-2 mb-2 text-white`}>
                  Get recipe
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More and Show Less Buttons */}
      <div className={`flex items-center justify-center space-x-4`}>
        {visibleCount < list.length && ( // Show Load More button only if there are more items to load
          <button
            onClick={handleLoadMore}
            className={`bg-green-400 rounded p-2 mb-2 text-white`}
          >
            Load More
          </button>
        )}
        {visibleCount > 4 && ( // Show Show Less button only if more than 4 items are visible
          <button
            onClick={handleShowLess}
            className={`bg-red-400 rounded p-2 mb-2 text-white`}
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
}
