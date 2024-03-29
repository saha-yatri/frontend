import Head from "next/head";
import React from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import { Chart as ChartJS } from "chart.js/auto";
import Link from "next/link";

const Page = () => {
  const bardata = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [
      {
        label: "Weekly review",
        data: [1, 2, -5, -3, 7, 8, -6],
        backgroundColor: ["skyblue", "lightgreen"],
        fill: true,
      },
    ],
  };
  const data = {
    labels: ["Positive", "Negative", "Neutral"],
    datasets: [
      {
        label: "My First Dataset",
        data: [9, 6, 1],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 6,
      },
    ],
  };
  return (
    <div>
      <Head>
        <title>BATS | Dashboard</title>
      </Head>
      <main>
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
                <ul className="px-2 py-2 w-full text-center">
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
          {/* data */}
          <div className="flex items-start justify-between mt-[12px]">
            <div className="flex flex-col gap-y-4">
              <h3 className="font-[500] text-[17px]">Student Id</h3>
              <ul className=" flex flex-col gap-y-4 text-[#595959]">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>11</li>
                <li>12</li>
                <li>13</li>
                <li>14</li>
                <li>15</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-4">
              <h3 className="font-[500] text-[17px]">Student Name</h3>
              <ul className=" text-blue-500 flex flex-col gap-y-4">
                <Link href="/subikshakunwar">
                  <li>Subiksha kunwar</li>
                </Link>

                <li>Shiv Shankar Mahato</li>
                <li>Kriti Poudel</li>
                <li>Babar khan</li>
                <li>Prabhat Kiran Paudel</li>
                <li>Prabhat Kiran Paudel</li>
                <li>Shristi Pun Magar</li>
                <li>Niraj Sharma </li>
                <li>Rijan Ghimire</li>
                <li>Sanjog sharma</li>
                <li>Susmita Sharma</li>
                <li>Lalita Rimal</li>
                <li>Gyan bist </li>
                <li>Bishal ranjan</li>
                <li>Sunil kumar Mandal </li>
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
                <li>A</li>
                <li>A</li>
                <li>A</li>
                <li>A</li>
                <li>A</li>
                <li>A</li>
                <li>A</li>
                <li>A</li>
                <li>A</li>
                <li>A</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-4">
              <h3 className="font-[500] text-[17px]">Roll No.</h3>
              <ul className=" flex flex-col gap-y-4 text-[#595959]">
                <li>27</li>
                <li>45</li>
                <li>22</li>
                <li>33</li>
                <li>34</li>
                <li>20</li>
                <li>10</li>
                <li>5</li>
                <li>8</li>
                <li>7</li>
                <li>12</li>
                <li>19</li>
                <li>26</li>
                <li>32</li>
                <li>11</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-4">
              <h3 className="font-[500] text-[17px]">Behavioural Score</h3>
              <ul className=" flex flex-col gap-y-4 text-[#595959]">
                <li>+1</li>
                <li>+2</li>
                <li>0</li>
                <li>+4</li>
                <li>-5</li>
                <li>+2</li>
                <li>-3</li>
                <li>+8</li>
                <li>-7</li>
                <li>+6</li>
                <li>-3</li>
                <li>+4</li>
                <li>+7</li>
                <li>-5</li>
                <li>+3</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex mt-8 items-start w-[798px] justify-between  space-x-2">
          <div className="bg-white  w-full h-[250px] flex items-center justify-center rounded-xl  ">
            <Line data={bardata} />
          </div>
          <div className="bg-white w-full h-[250px]  rounded-xl flex items-center justify-center  ">
            <Doughnut data={data} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
