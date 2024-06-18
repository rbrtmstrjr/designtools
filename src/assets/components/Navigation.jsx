import { useState } from "react";
import { Link } from "react-router-dom";

const nav = [
  {
    id: 1,
    name: "Design Tools",
    url: "/designtools/",
    icon: "",
  },
  {
    id: 2,
    name: "Yeti Links",
    url: "/links/",
    icon: "",
  },
  {
    id: 3,
    name: "My Notes",
    url: "/notes/",
    icon: "",
  },
];

export default function Navigation() {
  const [navs, setNavs] = useState(1);
  const selectNav = (id) => {
    setNavs(id);
  };

  return (
    <>
      <section className="xl:px-20 2xl:px-32 pt-12 bg-red-700">
        <div className="flex">
          <div className="w-auto flex flex-col justify-end">
            <img src="./images/kunai.svg" className="w-12" alt="" />
            <h1 className="text-7xl font-bold text-white">Forbidden Jutsu🔥</h1>
            <p className="text-white/90 mt-4 leading-7">
              This compilation offers essential tools for graphic, web, and
              UI/UX design, enhancing creativity, streamlining workflows, and
              boosting productivity ideal for any design project.
            </p>
            <nav className="pt-12">
              <ul className="text-white text-sm font-bold flex cursor-pointer gap-px">
                {nav.map((data) => (
                  <Link to={data.url} key={data.id}>
                    <li
                      className={`py-3 px-7 flex items-center transition ease-in ${
                        data.id === navs ? "text-gray-300 bg-gray-900" : ""
                      } rounded-t-md hover:bg-gray-200 hover:text-red-700`}
                      onClick={() => selectNav(data.id)}
                    >
                      <span>{data.icon}</span>
                      {data.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </nav>
          </div>

          <div className="w-1/2 flex justify-end items-end">
            <img src="./images/boss_lex.png" className="w-4/5 h-auto" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
