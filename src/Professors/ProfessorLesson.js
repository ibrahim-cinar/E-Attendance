import React, { useState, useContext } from "react";
import { AttendanceContext } from "../Helpers/Context";
import PROFESSORS from "./Professor";

const ProfessorLesson = () => {
  const { number, lessons, setLessons, setPageState, setStart, start } =
    useContext(AttendanceContext);
  const LessonCode = [];
  const professorDp = [];
  const professorNm = [];

  PROFESSORS.forEach((item) => {
    if (item.profNumber === number) {
      <div key={number}>
        <div>{LessonCode.push(item.professorLessons)}</div>
        <div>{professorDp.push(item.professorDepartmen)}</div>
        <div>{professorNm.push(item.profName)}</div>
      </div>;
    }
  });
  const ProfInfo = () => {
    LessonCode.forEach((code) => {
      code.forEach((element) => {
        if (lessons === element) {
          setPageState("Event");
        } else {
          console.log("hatalı giriş");
        }
      });
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
        TRAKYA ÜNİVERSİTESİ <br /> E-YOKLAMA UYGULAMASI
      </h3>
      <input className="input" disabled value={number} />
      <input className="input" disabled value={professorNm} />
      <input className="input" disabled value={professorDp} />
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
