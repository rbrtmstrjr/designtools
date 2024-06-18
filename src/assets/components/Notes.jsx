import { useState } from "react";

const dataArray = [
  {
    id: 1,
    title: "Task Process",
    description: [
      "Check the assigned task.",
      "Send a simple greetings for client.",
      "Move the task to in progress.",
      "Finished the task.",
      "Create a thread in slack for QA (fix the revision if ever).",
      "Add a comms and make sure to attached the deliveriable files.",
      "Move the task to client review (if there are revision fix and move again to QA for rechecking).",
      "Send to client and wait for approval.",
    ],
  },
  {
    id: 2,
    title: "File Naming",
    description: [
      "Look for the Client folder (If attending to new clients, kindly create a client folder).",
      "Create a request folder.",
      "Add different folder for different files.",
      "Sort out your files and upload (Kindly make sure to upload all revisions in their necessary folders).",
      "Always embed the Gdrive folders in your messages.",
    ],
  },
  {
    id: 3,
    title: "Holiday Reminders",
    description: [
      "Always add the holiday spiel to every comms.",
      "Make sure the spiel is updated before the event.",
      "Can work 2 hours earlier in shift.",
    ],
  },
];

export default function Notes() {
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
              Notes for Everyday Process
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
            <div
              className="text-gray-400 py-4 bg-gray-800 w-slice rounded-lg border border-white/20 flex hover:scale-105 ease-in transition cursor-pointer hover:bg-red-700 hover:text-white"
              key={data.id}
            >
              <div className="p-10 w-full">
                <h1 className="text-2xl font-bold">{data.title}</h1>
                <div className="w-full border-b border-gray-700 my-4"></div>
                {data.description?.map((item, index) => (
                  <div key={index} className="mb-2 flex">
                    <div className="w-8">
                      <ul className="list-disc list-inside">
                        <li className="mb-2"></li>
                      </ul>
                    </div>
                    <div className="w-full">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
