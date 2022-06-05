import React, { useContext, useState } from "react";
import { AttendanceContext } from "./Context";
import StudentLesson from "../Students/StudentItem";
import YoklamaTablosu from "../Professors/ProfTable";

const Join = () => {
  
  return (
    <div>
      <div>
        <StudentLesson></StudentLesson>
      </div>
    </div>
  );
};
export default Join;
