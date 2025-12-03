import { useState } from "react";
import Logo from "./assets/logo.png";
function App() {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const fetchImages = () => {
    fetch(
      `https://api.unsplash.com/search/photos?query=${value}&client_id=GPF-MAgYtuHxhx8mBZzLbE0vUhvym2soozQ7ubrU0p0`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.results);
      });
  };
  return (
    <div className="min-h-screen">
      <header className="bg-gray-800 flex justify-between items-center p-6 fixed w-full z-50 rounded-full mt-5">
        <div className="flex gap-2">
          <input
            type="text"
            className="bg-white rounded-full h-10 w-60 px-3"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            onClick={fetchImages}
            className="bg-cyan-400 p-2 rounded-full text-white transition-all duration-300 hover:bg-cyan-500 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
        <img src={Logo} alt="react" className="w-20 h-20 logo" />
      </header>
      <div
        className="p-6 grid gap-4 pt-30"
        style={{
          columnCount: 1,
          columnGap: "1rem",
        }}
      >
        <div
          className="hidden sm:block"
          style={{ columnCount: 2, columnGap: "1rem" }}
        ></div>
        <div
          className="hidden md:block"
          style={{ columnCount: 3, columnGap: "1rem" }}
        ></div>
        <div
          className="hidden lg:block"
          style={{ columnCount: 4, columnGap: "1rem" }}
        ></div>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {images.map((img) => (
            <img
              key={img.id}
              src={img.urls.small}
              className="w-full mb-4 rounded-xl shadow-md transition-all duration-500 hover:scale-105 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
