import logo from "./logo.svg";
import "./index.css";
import { useEffect } from "react";
import axios from "axios";
import Task from "./Components/task";

function App() {
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios("http://localhost:5000/tasks");
  //         console.log(response.data);
  //         return response.data;
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchData();
  //   }, []);

  return (
    <div className="task">
      <input type="checkbox"></input>
      {/*title of the task */}
      <p>Title</p>
      {/*button to delete task */}
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#494C6B"
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </button>
    </div>
  );
}

export default App;
