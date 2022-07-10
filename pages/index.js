import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/vercel.svg" />
      </Head>
        <div className="flex items-center h-full w-full flex-col mt-64 justify-center text-center text-2xl font-extralight lg:hidden">
          <span className="text-xl text-red-500">اخطار</span>
        <h1 className="text-2xl text-yellow-500">لطفا از طریق لبتاب وارد این بخش شوید</h1>
        <span className="text-xl text-red-500">اخطار</span>


        </div>
      <div className="w-full h-screen bg-gray-400 hidden lg:flex pt-5  ">
        <div className="w-2/12 bg-white h-full rounded-tr-xl flex flex-col items-center">
          <div className="object-cover w-20 h-20 flex justify-center">
            <Image src="/vercel.svg" width={100} height={100} alt="icon"/>
          </div>

          <div className="w-full">
            <ul className="text-center text-xl flex flex-col my-5">
              <li className="p-2  border-blue-500 border-l-2 flex justify-center items-center  from-blue-500 bg-gradient-to-l bg-white">
                <span className="pr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                    />
                  </svg>
                </span>
                <a href="#">Dashboard</a>
              </li>
              <li className="p-2 mt-10 flex justify-center items-center hover:border-yellow-500 hover:border-l-2 hover:bg-gradient-to-l hover:from-yellow-500 hover:bg-white">
                <span className="pr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </span>
                <a href="#">Users</a>
              </li>
              <li className="p-2 mt-10 flex justify-center items-center hover:border-green-500 hover:border-l-2 hover:bg-gradient-to-l hover:from-green-500 hover:bg-white">
                <span className="pr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                </span>
                <a href="#">Sign Up</a>
              </li>
              <li className="p-2 mt-10 flex justify-center items-center hover:border-red-500 hover:border-l-2 hover:bg-gradient-to-l hover:from-red-500 hover:bg-white ">
                <span className="pr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                </span>
                <a href="#">Login</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-11/12 flex flex-col items-center">
          <div className="w-11/12 bg-white h-12 rounded-xl justify-around flex  items-center">
            <div className="flex justify-start ">
              <input
                className="p-2 border-black relative w-72 h-9 border-2 rounded-lg border-solid"
                type="text"
                placeholder="Quick Search..."
              />
            </div>
            <Image src="/vercel.svg" width={100} height={100} alt="icon"/>
          </div>

          <div className="w-11/12 text-center flex justify-center items-center  my-10 bg-white h-full rounded-lg">
            <div className="flex justify-center items-center flex-col text-xl">
              <h1 className="text-2xl">Welcome is Dashboard Page (:</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
