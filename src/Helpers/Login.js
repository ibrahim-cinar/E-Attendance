import React, { useContext } from "react";
import { AttendanceContext } from "./Context.js";
import PROFESSORS from "../Professors/Professor.js";
import STUDENTS from "../Students/Student.js";
import "./Container.css";
const Login = () => {
  const { setPageState, password, setPassword, number, setNumber,} =
    useContext(AttendanceContext);
  const control = () => {
    
    PROFESSORS.forEach((professor) => {
      if (
        password === professor.profpassword &&
        number === professor.profNumber
      ) {
        setPageState("ProfessorLesson");
      }
    });

    STUDENTS.forEach((student) => {
      if (
        password === student.studentPassword &&
        number === student.studentNumber
      ) {
        setPageState("Join");
      }
    });
  };
  return (
      <div className="box">
        <img
          src={require("../images/trakya-universitesi-logo.png")}
          width="200"
          height="200"
        />
        <h1>TRAKYA ÜNİVERSİTESİ E-YOKLAMA UYGULAMASI</h1>
        <input
          autoFocus="true"
          className="input2"
          type="text"
          placeholder="Numara"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <input
          autoFocus="true"
          className="input2"
          type="password"
          placeholder="Şifre"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div>     
        <button className="button button1" onClick={control}>
          Giriş
        </button></div>
      </div>
  );
};
export default Login;
