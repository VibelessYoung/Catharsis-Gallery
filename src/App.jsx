import { useState } from "react";
import Logo from "./assets/logo.png";
function App() {
  const [value, setValue] = useState("");

  const images = [
    { id: 1, src: "https://picsum.photos/300/400" },
    { id: 2, src: "https://picsum.photos/300/500" },
    { id: 3, src: "https://picsum.photos/300/350" },
    { id: 4, src: "https://picsum.photos/300/450" },
    { id: 5, src: "https://picsum.photos/300/380" },
    { id: 6, src: "https://picsum.photos/300/520" },
    { id: 7, src: "https://picsum.photos/300/360" },
    { id: 8, src: "https://picsum.photos/300/470" },
  ];

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
          <button className="bg-cyan-400 p-2 rounded-full text-white transition-all duration-300 hover:bg-cyan-500 cursor-pointer">
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
              src={img.src}
              className="w-full mb-4 rounded-xl shadow-md transition-all duration-500 hover:scale-105 cursor-pointer"
              alt="gallery"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
