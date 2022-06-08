import React, {useContext } from "react";
import { AttendanceContext } from "../Helpers/Context";
import PROFESSORS from "./Professor";

const ProfessorLesson = () => {
  const { number, lessons, setLessons, setPageState, setStart} =
    useContext(AttendanceContext);


  const x = PROFESSORS.findIndex((e) => e.profNumber === number);
  PROFESSORS[x].professorLessons.find((eleman) => eleman === lessons);  

  const ProfInfo = () => {
    PROFESSORS[x].professorLessons.forEach((code) => { 
        if (lessons === code) {
          setPageState("Event");
        } else {
          console.log("hatalı giriş");
        }
    });
    setStart(true);
  };
  return (
    <div className="clm">
      <img
        src={require("../images/trakya-universitesi-logo.png")}
        width="200"
        height="200"
      />

      <h3>
        TRAKYA ÜNİVERSİTESİ <br /> E-YOKLAMA UYGULAMASI <br /> PROFESÖR SAYFASI <br /> <br />
      </h3>
      <input className="input" disabled value={PROFESSORS[x].profNumber} />
      <input className="input" disabled value={PROFESSORS[x].profName} />
      <input className="input" disabled value={PROFESSORS[x].professorDepartmen} />
      <input
        className="input2"
        type="text"
        placeholder="Ders Kodu"
        onChange={(e) => setLessons(e.target.value)}
      ></input>
      <button className="button button1" onClick={ProfInfo}>
        Yoklama
      </button>
    </div>
  );
};
export default ProfessorLesson;
