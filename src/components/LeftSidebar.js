import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function LeftSidebar() {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div className="w-[216px] bg-white rounded-[24px] h-[50rem] pr-5 py-16 ">
      <div className="flex flex-col gap-y-[60px]">
        <div className="flex flex-col gap-y-[32px]">
          <Link href="/">
            <div className="flex items-center h-auto group cursor-pointer">
              <div
                className={`w-[8px] group-hover:bg-[#638FFF]  ${
                  router.pathname === "/" ? "bg-[#638FFF]" : "bg-white"
                } h-[32px] rounded-r-lg`}
              ></div>
              <div className="flex item-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6 group-hover:text-[#638FFF] ${
                    router.pathname === "/" ? "text-[#638FFF]" : "text-black"
                  } ml-3`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                  />
                </svg>

                <h3
                  className={`group-hover:text-[#638FFF]  ${
                    router.pathname === "/" ? "text-[#638FFF]" : "text-black"
                  } font-[400] text-[15px] `}
                >
                  Dashboard
                </h3>
              </div>
            </div>
          </Link>
          <Link href="/teachers">
            <div className="flex items-center h-auto group cursor-pointer">
              <div
                className={`w-[8px] group-hover:bg-[#638FFF]  ${
                  router.pathname === "/teachers" ? "bg-[#638FFF]" : "bg-white"
                } h-[32px] rounded-r-lg`}
              ></div>
              <div className="flex item-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6 group-hover:text-[#638FFF] ${
                    router.pathname === "/teachers"
                      ? "text-[#638FFF]"
                      : "text-black"
                  } ml-3`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>

                <h3
                  className={`group-hover:text-[#638FFF] ${
                    router.pathname === "/teachers"
                      ? "text-[#638FFF]"
                      : "text-black"
                  } font-[400] text-[15px]`}
                >
                  Teachers
                </h3>
              </div>
            </div>
          </Link>
          <Link href="/routines">
            <div className="flex items-center h-auto group cursor-pointer">
              <div
                className={`w-[8px] group-hover:bg-[#638FFF] ${
                  router.pathname === "/routines" ? "bg-[#638FFF]" : "bg-white"
                } h-[32px] rounded-r-lg`}
              ></div>
              <div className="flex item-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6 group-hover:text-[#638FFF] ${
                    router.pathname === "/routines"
                      ? "text-[#638FFF]"
                      : "text-black"
                  } ml-3`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                  />
                </svg>

                <h3
                  className={`group-hover:text-[#638FFF] font-[400] ${
                    router.pathname === "/routines"
                      ? "text-[#638FFF]"
                      : "text-black"
                  } text-[15px]`}
                >
                  Routines
                </h3>
              </div>
            </div>
          </Link>
          <div className="flex items-center h-auto group cursor-pointer">
            <div className="w-[8px] group-hover:bg-[#638FFF]  h-[32px] rounded-r-lg"></div>
            <div className="flex item-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 group-hover:text-[#638FFF] ml-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>

              <h3 className="group-hover:text-[#638FFF] font-[400] text-[15px]">
                Mail
              </h3>
            </div>
          </div>
          <div className="flex items-center h-auto group cursor-pointer">
            <div className="w-[8px] group-hover:bg-[#638FFF]  h-[32px] rounded-r-lg"></div>
            <div className="flex item-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 group-hover:text-[#638FFF] ml-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>

              <h3 className="group-hover:text-[#638FFF] font-[400] text-[15px]">
                Message
              </h3>
            </div>
          </div>
          <div className="flex items-center h-auto group cursor-pointer">
            <div className="w-[8px] group-hover:bg-[#638FFF]  h-[32px] rounded-r-lg"></div>
            <div className="flex item-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h- group-hover:text-[#638FFF] ml-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>

              <h3 className="group-hover:text-[#638FFF] font-[400] text-[15px]">
                Community
              </h3>
            </div>
          </div>
          <div className="flex items-center h-auto group cursor-pointer">
            <div className="w-[8px] group-hover:bg-[#638FFF]  h-[32px] rounded-r-lg"></div>
            <div className="flex item-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 group-hover:text-[#638FFF] ml-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <h3 className="group-hover:text-[#638FFF] font-[400] text-[15px]">
                Settings
              </h3>
            </div>
          </div>
        </div>
        <div className="ml-4 flex flex-col gap-y-4">
          <h1 className="font-[700] text-[17px]">Live Classes</h1>

          <div className="flex items-center space-x-3">
            <div className="h-2 w-2 bg-orange-400 rounded-full"></div>
            <p>Mathematics</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex space-x-3 items-center">
              <div className="h-2 w-2 bg-green-600 rounded-full"></div>
              <p>Social Studies</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex space-x-3 items-center">
              <div className="h-2 w-2 bg-green-600 rounded-full"></div>
              <p>Nepali</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-green-600 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </div>
          <div className="flex items-center space-x-3">
            <div className="h-2 w-2 bg-orange-400 rounded-full"></div>
            <p>English</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
