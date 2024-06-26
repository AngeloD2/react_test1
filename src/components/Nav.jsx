import { Link } from "react-router-dom";

export default function Nav({ links }) {
  return (
    <nav className="min-h-16 h-16 w-screen md:px-24 md:py-2 sticky top-0 bg-purple-600 shadow-md grid grid-cols-3 place-items-center z-10">
      <ul>
        {links ? (
          <>
            {links.map((link) => (
              <Link
                key={link.title}
                to={link.url}
                title={link.title}
                className="hover:-translate-x-1 hover:bg-blue-500 duration-100 transition-all px-4 py-2 md:w-24 bg-blue-400 text-slate-100 font-semibold flex items-center justify-center rounded-md"
              >
                <p> {link.title} </p>
              </Link>
            ))}
          </>
        ) : null}
      </ul>
      <p className="place-items-center place-content-center self-center text-center md:text-2xl text-slate-100 drop-shadow-md"> React Test Suite </p>
    </nav>
  );
}
