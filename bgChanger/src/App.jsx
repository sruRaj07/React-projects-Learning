import { useState } from "react";

function App() {
  const [color, setcolor] = useState("black");

  return (
    <div className="w-full h-screen"
      style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap
      justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3
        shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setcolor("red")} // on clicking the colour is changed: returnning the function
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}>red</button>
          <button
          onClick={() => setcolor("green")} // return function to onClick()
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}>green</button>
          <button
          onClick={() => setcolor("blue")} // return function to onClick()
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}>blue</button>
          <button
          onClick={() => setcolor("pink")} // return function to onClick()
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "pink"}}>blue</button>
          <button
          onClick={() => setcolor("orange")} // return function to onClick()
          className="outline-none px-4 py-1
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "orange"}}>blue</button>
        </div>
      </div>  

    </div>
  );
}

export default App;
