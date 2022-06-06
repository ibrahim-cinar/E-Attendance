import React, { useContext } from "react";
import { AttendanceContext } from "./Context";
import YoklamaTablosu from "../Professors/ProfTable";
import NewRow from "../Professors/NewRow";

const Event = () => {
  const { setPageState } = useContext(AttendanceContext);

  return (
    <div className="clm2">
      <div className="middle">
      <YoklamaTablosu />
      <NewRow />
      </div>

      <div>      <button className="button button1" onClick={() => setPageState("Login")}>
        DEMO
      </button>
      </div>

    </div>
  );
};
export default Event;
