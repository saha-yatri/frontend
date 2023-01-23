import Head from "next/head";
import Image from "next/image";
import React from "react";

function RightSidebar() {
  return (
    <>
      <div className="flex w-full flex-col justify-between gap-y-8">
        <div className=" bg-white rounded-xl h-[215px] py-8 px-4">
          <h1 className="font-[600] text-[20px]">Notification</h1>
          <div className="flex flex-col mt-[25px] gap-y-[16px]">
            <div className="flex items-center gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
              </svg>
              <p>You have a new email from .....</p>
            </div>
            <div className="flex items-center gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
              </svg>
              <p>You have a new email from .....</p>
            </div>
            <div className="flex items-center gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
              </svg>
              <p>You have a new email from .....</p>
            </div>
          </div>
        </div>
        <div className="w-full  bg-white h-auto py-[32px] rounded-xl px-[16px]">
          <h1 className="font-[600] text-[20px] rounded-xl"> Messages</h1>
          <div className="flex flex-col gap-y-6 mt-4">
            <div className="flex items-center gap-x-2">
              <div className="h-[48px] w-[48px]  relative object-contain">
                <Image
                  src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFuZHNvbWUlMjBndXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="photo"
                  fill
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col ">
                <h2 className="font-[400] text-[18px]">Binod Ghimire</h2>
                <p className="font-[400] text-[15px] text-[#595959]">
                  I am busy right now!!!
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="h-[48px] w-[48px]  relative object-contain">
                <Image
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="photo"
                  fill
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col ">
                <h2 className="font-[400] text-[18px]">Hari Khanal</h2>
                <p className="font-[400] text-[15px] text-[#595959]">
                  Will call you in a minute.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSidebar;
