import { useState } from "react";
import { AttendanceContext } from "./Helpers/Context";
import Login from "./Helpers/Login";
import Join from "./Helpers/Join";
import Event from "./Helpers/Event";
import ProfessorLesson from "./Professors/ProfessorLesson";

function App() {
  const [page, setPageState] = useState("Login");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [lessons, setLessons] = useState("");
  const [info,setInfo] = useState();
  const [all,setAll] = useState([{number: "",studentNm:"",studentDp:"",InputCode:""}]);
  const [start,setStart]=useState(false);

  return (
    <div className="App">
      <AttendanceContext.Provider
        value={{ page, setPageState, password, setPassword, number, setNumber,lessons,setLessons,info,setInfo,all,setAll,start,setStart}} >
        {page === "Login" && <Login />}
        {page === "Join" && <Join />}
        {page === "Event" && <Event />}
        {page === "ProfessorLesson" && <ProfessorLesson/>}
      </AttendanceContext.Provider>
    </div>
  );
}

export default App;
