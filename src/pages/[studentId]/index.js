import Image from "next/image";
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Head from "next/head";

const index = () => {
  const data = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [
      {
        data: [700, 100, 300, 200, 500, 600, 400, 800],
        backgroundColor: ["#851267"],
        label: "Weekly review",
      },
    ],
  };
  return (
    <>
      <Head>
        <title>BATS | Students</title>
      </Head>
      <section className="flex items-start gap-x-5">
        <div className="mx-5">
          <div className="bg-white h-auto w-[223px] rounded-t-[24px] py-[32px] px-[24px] border-b border-gray-200 ">
            <div>
              <Image
                src="https://imgs.search.brave.com/Ev9g6y62-z03QWc4vfEM317GXYbpl4G7kxe2qRdCQCo/rs:fit:873:721:1/g:ce/aHR0cDovL25lcGFs/aXBvc3QuY29tL2Jl/dGEvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTkvMDEvSU1HLTQw/NTIuanBn"
                alt=""
                width={150}
                height={150}
                className="mx-auto rounded-[16px] mb-1"
              />
              <h2 className="font-[600] text-[18px] text-center mb-1">
                Subiksha kunwar
              </h2>
              <p className="font-[400] text-[13px] text-center">
                ID No : 12-123-00317{" "}
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-[21px]">
              <div>
                <h1 className="font-[600] text-[16px]">Class</h1>
                <p className="font-[400] text-[14px]">Eigth Grade(VIII)</p>
              </div>
              <div className="flex items-center gap-x-2">
                <h1 className="font-[600] text-[16px]">Section</h1>
                <p className="font-[400] text-[14px]">A</p>
              </div>
              <div>
                <h1 className="font-[600] text-[16px]">DOB</h1>
                <p className="font-[400] text-[14px]">03/07/2070</p>
              </div>
              <div>
                <h1 className="font-[600] text-[16px]">School</h1>
                <p className="font-[400] text-[14px]">
                  Buddha Jyoti English School
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white h-[280px] w-[223px] py-[32px] px-[20px]">
            <div className="flex flex-col gap-y-5 mt-5">
              <div>
                <h1 className="font-[600] text-[16px]">Permanent Address</h1>
                <p className="font-[400] text-[16px]">Bharatpur,Chitwan</p>
              </div>
              <div>
                <h1 className="font-[600] text-[16px]">Phone Number</h1>
                <p className="font-[400] text-[16px]">9845612343</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[520px] mr-5">
          <Line data={data} />
        </div>
      </section>
    </>
  );
};

export default index;
