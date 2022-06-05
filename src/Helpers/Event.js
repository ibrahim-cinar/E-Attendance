import React, { useContext } from "react";
import { AttendanceContext } from "./Context";
import ProfessorLesson from "../Professors/ProfessorLesson";
import YoklamaTablosu from "../Professors/ProfTable";
import MevcutTablo from "../Professors/SecondTable";
import NewRow from "../Professors/NewRow";

const Event = () => {
  const { setPageState } = useContext(AttendanceContext);

  return (
    <div className="clm2">
      <div className="middle">
      <YoklamaTablosu />
      </div>
      <NewRow />
      <button className="button button1" onClick={() => setPageState("Login")}>
        DEMO
      </button>
    </div>
  );
};
export default Event;
