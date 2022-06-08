import React, { useContext, useState } from "react";
import { AttendanceContext } from "./Context";
import YoklamaTablosu from "../Professors/ProfTable";
import NewRow from "../Professors/NewRow";

const Event = () => {
  const { setPageState,all } = useContext(AttendanceContext);
  const [kaydet, setKaydet] = useState();
  const Gelenler=()=>{
    console.log(all);
    setKaydet(all)
    console.log(kaydet);
  }

  return (
    <div className="clm2">
      <div className="middle">
        <YoklamaTablosu />
        <NewRow />
      </div>

      <div>
        <button className="button button1" onClick={() => setPageState("Login")}>DEMO</button>
          <button className="button button1" onClick={Gelenler}>kaydet</button>
      </div>

    </div>
  );
};
export default Event;
