import Head from "next/head";
import Image from "next/image";
import React from "react";

function teachers() {
  return (
    <>
      <Head>
        <title>BATS | Teachers</title>
      </Head>
      <section>
        <div className="bg-white h-auto w-[796px] rounded-[24px] py-[32px] px-[24px] ">
          <div className="flex items-center justify-between">
            {/* choose class */}
            <div className="flex items-center gap-2 relative group cursor-pointer">
              <h1 className="font-[700] text-[17px] ">Choose Level</h1>
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
              <div className=" hidden group-hover:flex absolute top-5 w-50 shadow-xl bg-white ">
                <ul className="px-2 py-2 w-full text-center">
                  <li className="border-b-2 hover:bg-gray-200 border-gray-200 py-2">
                    All
                  </li>
                  <li className="border-b-2 hover:bg-gray-200 border-gray-200 py-2">
                    Pre-Primary Level
                  </li>
                  <li className="border-b-2 hover:bg-gray-200 border-gray-200 py-2">
                    Primary Level
                  </li>
                  <li className="border-b-2 hover:bg-gray-200 border-gray-200 py-2">
                    Secondary Level
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-between mt-[12px]">
            <div className="flex flex-col gap-y-4">
              <h3 className="font-[500] text-[17px]">Teacher Id</h3>
              <ul className=" flex flex-col gap-y-4 text-[#595959]">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-4">
              <h3 className="font-[500] text-[17px]">Teacher Name</h3>
              <ul className=" text-blue-500 flex flex-col gap-y-4">
                <li>Bindu Aryal</li>
                <li>Dev Chapagain</li>
                <li>Deep Sharma</li>
                <li>Mahesh Poudel</li>
                <li>GS Gupta</li>
                <li>Binod Sharma</li>
                <li>Ramesh Neupane</li>
                <li> Shobraj Dhakal</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-4">
              <h3 className="font-[500] text-[17px]">Level</h3>
              <ul className=" flex flex-col gap-y-4 text-[#595959]">
                <li>Secondary</li>
                <li>Secondary</li>
                <li>Secondary</li>
                <li>Secondary</li>
                <li>Secondary</li>
                <li>Secondary</li>
                <li>Secondary</li>
                <li>Secondary</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-4">
              <h3 className="font-[500] text-[17px]">Address</h3>
              <ul className=" flex flex-col gap-y-4 text-[#595959]">
                <li>Bharatpur</li>
                <li>Rampur</li>
                <li>Saradpur</li>
                <li>Baglung</li>
                <li>Parsa</li>
                <li>Tandi</li>
                <li>Bharatpur</li>
                <li>Nawalpur</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-4">
              <h3 className="font-[500] text-[17px]">Email</h3>
              <ul className=" flex flex-col gap-y-4 text-[#595959]">
                <li>binduaryal@gmail.com</li>
                <li>devchapagain@gmail.com</li>
                <li>deepsharma@gmail.com</li>
                <li>maheshpoudel@gmail.com</li>
                <li>gsgupta@gmail.com</li>
                <li>binodsharma@gmail.com</li>
                <li>rameshneupane@gmail.com</li>
                <li>shobrajdhakal@gmail.com</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-4">
              <h3 className="font-[500] text-[17px]">Phone</h3>
              <ul className=" flex flex-col gap-y-4 text-[#595959]">
                <li>9845748578</li>
                <li>9845689241</li>
                <li>9845712638</li>
                <li>9845685237</li>
                <li>9841576234</li>
                <li>9845874125</li>
                <li>9812578211</li>
                <li>98457785412</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default teachers;
