const Terminal = () => {
  return (
    <div className="prose prose-xl dark:prose-invert xl:col-span-2">
      <div className="w-full shadow subpixel-antialiased rounded min-h-64 bg-zinc-800 dark:bg-zinc-700 border-black dark:border-white mx-auto">
        <div
          className="flex items-center py-1 h-6 rounded-t border-b-0 border-gray-500 text-center text-black"
          id="headerTerminal"
        >
          <div
            className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"
            id="closebtn"
          ></div>
          <div
            className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"
            id="minbtn"
          ></div>
          <div
            className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"
            id="maxbtn"
          ></div>
          <div className="mx-auto pr-16" id="terminaltitle">
            <p className="text-center text-sm dark:text-white text-white dark:font-bold">
              Terminal
            </p>
          </div>
        </div>
        <div
          className="p-3 h-auto dark:text-zinc-300 text-sm bg-zinc-900 font-semibold text-md text-white dark:bg-zinc-800"
          id="console font-serif"
        >
          <p className="mt-1 pl-1 text-lg font-bold">
            <p> Hi, I&apos;m Travontaz Lowry 👋</p>
          </p>
          <p className="pl-1 pb-1 text-1em">
            A Software Engineer, wannbe pro hooper, and gamer of sorts. I have a
            passion for creating impactful fullstack web applications with React
            and its frameworks, especially{" "}
            <a
              href="https://remix.run/"
              className="text-white text-xs pb-0.5 px-1 mx-0.5 rounded bg-slate-800 dark:text-black dark:bg-slate-300 dark:hover:bg-purple-500"
            >
              {" "}
              Remix.Run
            </a>{" "}
            &{" "}
            <a
              href="https://nextjs.org/"
              className="text-white text-xs pb-0.5 px-1 mx-0.5 rounded bg-slate-800 dark:text-black dark:bg-slate-300 dark:hover:bg-blue-500"
            >
              NextJs.
            </a>{" "}
          </p>{" "}
          <p className="pl-1 pb-1">
            {" "}
            Decadence defines me, both in the digital realm and on the court.{" "}
          </p>
          <p className="pl-1 pb-4 mb-1"> Let&apos;s connect!</p>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
