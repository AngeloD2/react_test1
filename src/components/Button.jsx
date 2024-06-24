export default function Button({ onclick, title }) {
  return (
    <button
      onClick={onclick}
      className="h-full w-24 bg-blue-400 text-slate-100 font-semibold flex items-center justify-center rounded-sm"
    >
      {title ? title : "button"}
    </button>
  );
}
