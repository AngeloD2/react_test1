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
            <p> Select Difficulty </p>
            <div className="flex items-center justify-around w-full gap-x-2">
              <button
                onClick={() => navigate("beginner")}
                className="bg-blue-300 w-60 h-48 rounded-md font-semibold text-2xl text-slate-700 hover:bg-blue-500 hover:text-slate-100 hover:scale-105 transition-all"
              >
                Beginner
              </button>
              <button
                onClick={() => navigate("entry")}
                className="bg-green-300 w-60 h-48 rounded-md font-semibold text-2xl text-slate-700 hover:bg-green-500 hover:text-slate-100 hover:scale-105 transition-all"
              >
                Entry
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
