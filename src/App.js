import React from "react";
import Sidbar from "./components/Sidbar";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Subpages from "./components/Subpages";

function App() {
  return (
    <div className="h-screen w-full flex font-roboto text-gray-400">
      <Sidbar />
      <div className="flex-1 justify-between gap-8 p-4">
        <Navbar />
        <Subpages/>
        <h2 className="text-xl  text-gray-950 my-10">P.P.E Violations Table</h2>
        <Main className="mt-10" />
      </div>
    </div>
  );
}

export default App;
