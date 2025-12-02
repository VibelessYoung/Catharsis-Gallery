import Logo from "./assets/logo.png";
function App() {
  return (
    <>
      <header className="bg-gray-800 flex justify-between items-center p-10">
        <h1 className="text-xl font-black text-white">CATHARSIS GALLERY</h1>
        <div className="flex gap-2">
          <input type="text" className="bg-white rounded-full h-10 w-60 px-3" />
          <button className="bg-cyan-400 p-2 rounded-full text-white transition-all duration-300 hover:bg-cyan-500 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
        <img src={Logo} alt="react" className="w-25 h-25 logo" />
      </header>
    </>
  );
}

export default App;
