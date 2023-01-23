import Head from "next/head";
import React from "react";

function routines() {
  return (
    <>
      <Head>
        <title>BATS | Routines</title>
      </Head>
      <section>
        <div className="bg-white h-auto w-[796px] rounded-[24px] py-[32px] px-[24px] ">
          <div className="flex items-center justify-between">
            {/* choose class */}
            <div className="flex items-center gap-2 relative group cursor-pointer">
              <h1 className="font-[700] text-[17px] ">Choose Class</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                  clipRule="evenodd"
                />
              </svg>
              <div className=" hidden group-hover:flex absolute top-5 w-full shadow-xl bg-white ">
                <ul className="px-2 py-2 w-full text-center ">
                  <li className="border-b-2 hover:bg-gray-200 border-gray-200 py-2">
                    All
                  </li>
                  <li className="border-b-2 hover:bg-gray-200 border-gray-200 py-2">
                    Class 1
                  </li>
                  <li className="border-b-2 hover:bg-gray-200 border-gray-200 py-2">
                    Class 2
                  </li>
                  <li className="border-b-2 hover:bg-gray-200 border-gray-200 py-2">
                    Class 3
                  </li>
                  <li className="border-b-2 hover:bg-gray-200 border-gray-200 py-2">
                    Class 4
                  </li>
                  <li className="border-b-2 hover:bg-gray-200 border-gray-200 py-2">
                    Class 5
                  </li>
                  <li className="border-b-2 hover:bg-gray-200 border-gray-200 py-2">
                    Class 6
                  </li>
                  <li className="border-b-2 hover:bg-gray-200 border-gray-200 py-2">
                    Class 7
                  </li>
                  <li className="border-b-2 hover:bg-gray-200 border-gray-200 py-2">
                    Class 8
                  </li>
                  <li className="border-b-2 hover:bg-gray-200 border-gray-200 py-2">
                    Class 9
                  </li>
                  <li className="border-b-2 hover:bg-gray-200 border-gray-200 py-2">
                    Class 10
                  </li>
                </ul>
              </div>
            </div>
            {/* date */}
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                  clipRule="evenodd"
                />
              </svg>
              <h1 className="font-[500] text-[17px]">Wed 4, 2023</h1>
            </div>
          </div>
          <div className="flex items-start justify-between mt-[12px]">
            <div className="flex flex-col gap-y-4">
              <h3 className="font-[500] text-[17px]">Teacher Id</h3>
              <ul className="text-center flex flex-col gap-y-4 text-[#595959]">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-4">
              <h3 className="font-[500] text-[17px]">Teacher Name</h3>
              <ul className="text-center text-blue-500 flex flex-col gap-y-4">
                <li>Bindu Aryal</li>
                <li>Dev Chapagain</li>
                <li>Deep Sharma</li>
                <li>Mahesh Poudel</li>
                <li>GS Gupta</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-4">
              <h3 className="font-[500] text-[17px]">Class</h3>
              <ul className="text-center flex flex-col gap-y-4 text-[#595959]">
                <li>4</li>
                <li>6</li>
                <li>7</li>
                <li>3</li>
                <li>5</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-4">
              <h3 className="font-[500] text-[17px]">Section</h3>
              <ul className=" flex flex-col gap-y-4 text-[#595959]">
                <li>A</li>
                <li>A</li>
                <li>A</li>
                <li>A</li>
                <li>A</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-4">
              <h3 className="font-[500] text-[17px]">Start Time</h3>
              <ul className=" flex flex-col gap-y-4 text-[#595959]">
                <li>9:00(AM)</li>
                <li>10:00(AM)</li>
                <li>9:00(AM)</li>
                <li>11:00(AM)</li>
                <li>10:00(AM)</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-4">
              <h3 className="font-[500] text-[17px]">End Time</h3>
              <ul className=" flex flex-col gap-y-4 text-[#595959]">
                <li>9:45(AM)</li>
                <li>10:45(AM)</li>
                <li>9:45(AM)</li>
                <li>11:45(AM)</li>
                <li>10:445(AM)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default routines;
