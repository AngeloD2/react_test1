import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex justify-center items-center p-8 md:p-0 bg-gradient-to-t from-purple-600 to-violet-600 text-white">
      <div className="container flex flex-col items-center justify-center w-full h-full md:w-1/2 md:h-2/3 border-4 border-purple-300/50 rounded-md">
        <h1 className="w-full text-center text-2xl">
          React Test Suite
        </h1>

        <div className="flex flex-col items-center justify-center h-2/3 w-full px-4">
          <div className="w-full flex flex-col items-center justify-center h-auto space-y-14">
            <div className="space-y-4 md:space-y-0 flex flex-col md:flex-row items-center justify-around w-full gap-x-2">
              <button
                onClick={() => navigate("beginner")}
                className="bg-blue-300 h-24 w-32 md:w-60 md:h-48 rounded-md font-semibold text-2xl text-slate-700 hover:bg-blue-500 hover:text-slate-100 hover:scale-105 transition-all"
              >
                Beginner
              </button>
              <button
                onClick={() => navigate("entry")}
                className="bg-blue-300 h-24 w-32 md:w-60 md:h-48 rounded-md font-semibold text-2xl text-slate-700 hover:bg-blue-500 hover:text-slate-100 hover:scale-105 transition-all"
              >
                Entry
              </button>

              <button
                onClick={() => navigate("ui")}
                className="bg-blue-300 h-24 w-32 md:w-60 md:h-48 rounded-md font-semibold text-2xl text-slate-700 hover:bg-blue-500 hover:text-slate-100 hover:scale-105 transition-all"
              >
                UI
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
