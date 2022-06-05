import React, { useState, useContext } from "react";
import STUDENTS from "./Student";
import { AttendanceContext } from "../Helpers/Context";
import "./StudentItem.css";

const StudentLesson = () => {
  const { number, lessons, setLessons, setInfo, setPageState, all, start } =
    useContext(AttendanceContext);
  const [inputCode, setInputCode] = useState();
  let bool = true;

  const now = new Date();
  let date = now.toLocaleString("tr-TR");
  let datas = {};
  const x = STUDENTS.findIndex((e) => e.studentNumber === number);
  STUDENTS[x].studentLesson.find((eleman) => eleman === inputCode);
  if (all[0] !== undefined) {
    all.forEach((dataobject) => {
      if (dataobject.number === number) {
        bool = false;
      }
    });
  }
  if (bool) {
    datas = {
      number: number,
      studentNm: STUDENTS[x].studentName,
      studentDp: STUDENTS[x].studentDepartmen,
      InputCode: inputCode,
      date: date,
    };
  }

  const Information = () => {
    if (!bool) {
      alert("Kaydınız Bulunmaktadır.");
      setPageState("Login");
    } else {
      STUDENTS[x].studentLesson.forEach((element) => {
        if (lessons === element) {
          datas.InputCode = element;
          console.log(datas);
          setInfo(datas);
          if (element.number !== number) {
            if (start === true) {
              all.push(datas);
              setPageState("Login");
            }
            console.log(all);
          }
   
        }
      });
    }
  };

  return (
    <div className="clm">
      <img
        src={require("../images/trakya-universitesi-logo.png")}
        width="200"
        height="200"
      />

      <h3>
        ÇINAR ÜNİVERSİTESİ <br /> E-YOKLAMA UYGULAMASI
      </h3>

      <input className="input" disabled value={number} />
      <input className="input" disabled value={STUDENTS[x].studentName} />

      <input className="input" disabled value={STUDENTS[x].studentDepartmen} />
      <input
        className="input2"
        placeholder="Ders Kodu"
        value={lessons}
        onChange={(e) => setLessons(e.target.value)}
      ></input>
      <button className="button button1" onClick={Information}>
        Yoklamaya Katıl
      </button>
    </div>
  );
};
export default StudentLesson;
