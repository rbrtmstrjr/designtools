import { useState } from "react";

const blank = "_blank";
const dataArray = [
  {
    id: 1,
    title: "Dashboard",
    description: `Team dashboard to centralizes project management, task tracking, and team communication.`,
    url: "https://team.dotyeti.com/dashboard/home",
    imageUrl: "",
    category: "typography",
  },
  {
    id: 2,
    title: "File Naming",
    description: `List of instruction to make a proper file naming for your next task.`,
    url: "https://docs.google.com/presentation/d/1vIITxo1q3x0KL3-HSppd6047O-xYpi8Y4IAcmlhqkdE/edit#slide=id.g8804a1d97a_7_130",
    imageUrl: "",
    category: "typography",
  },
  {
    id: 3,
    title: "Onboarding Manual",
    description: `Familiarize to the companys mission, vision and teams profile`,
    url: "https://docs.google.com/presentation/d/10ehHOJ_0YV3EZGu2xqSNjlHHSZy8QrCCRhvDVRNzeeM/edit#slide=id.p",
    imageUrl: "",
    category: "typography",
  },
  {
    id: 4,
    title: "Company Profile",
    description: `Get to know about DotYetis profile, facts and different services they offer.`,
    url: "https://www.dotyeti.com/company-profile/",
    imageUrl: "",
    category: "typography",
  },
  {
    id: 5,
    title: "Personalities Test",
    description: `Designed to systematically assess a person's preferences, interests and interaction style.`,
    url: "https://www.16personalities.com",
    imageUrl: "",
    category: "typography",
  },
  {
    id: 6,
    title: "Client Folder",
    description: `A list of different project for DotYeti client.`,
    url: "https://drive.google.com/drive/folders/1dEqVTTwH_Oah4lxn8dZP6KnnqVFHlA5O",
    imageUrl: "",
    category: "typography",
  },
];

export default function Usefulsite() {
  const [filterValue, setFilterValue] = useState("");
  const filteredArray = dataArray.filter((item) =>
    item.title.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      <section className="xl:px-20 2xl:px-32 pt-24 bg-gray-900">
        <div className="flex justify-between">
          {filteredArray.length === 0 ? (
            <h1 className="text-2xl text-gray-500 font-light">
              No Result Found.
            </h1>
          ) : (
            <h1 className="text-2xl text-gray-500 font-light">
              Useful Yeti Links
            </h1>
          )}
          <div>
            <input
              type="text"
              className="w-64 py-3 px-5 bg-gray-800 rounded-lg border border-gray-700 text-gray-400"
              placeholder="Search here"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="xl:px-20 2xl:px-32 py-20 bg-gray-900">
        <div className="flex gap-6 flex-wrap">
          {filteredArray.map((data) => (
            <a
              href={data.url}
              target={blank}
              className="text-gray-400 py-4 bg-gray-800 w-slice rounded-lg border border-white/20 flex hover:scale-105 ease-in transition cursor-pointer hover:bg-red-700 hover:text-white"
              key={data.id}
            >
              <div className="w-1/3 flex justify-center items-center">
                <img
                  src={
                    data.imageUrl === "" ? "./images/jutsu.png" : data.imageUrl
                  }
                  alt=""
                  className="w-full h-auto"
                />
              </div>
              <div className="w-2/3 py-6 pr-6">
                <h1 className="text-2xl font-bold">{data.title}</h1>
                <p className="text-sm mt-2 leading-6">{data.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
