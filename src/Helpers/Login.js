import React, { useContext, useState } from "react";
import { AttendanceContext } from "./Context.js";
import PROFESSORS from "../Professors/Professor.js";
import STUDENTS from "../Students/Student.js";
import { Form } from "react-bootstrap";
import "./Login.css";
const Login = () => {
  const { setPageState, password, setPassword, number, setNumber, lessons } =
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
    <Form>
      <div className="box">
        <img
          src={require("../images/trakya-universitesi-logo.png")}
          width="200"
          height="200"
        />
        <h1>ÇINAR ÜNİVERSİTESİ E-YOKLAMA UYGULAMASI</h1>
        <input
          autoFocus="true"
          className="input"
          type="text"
          placeholder="Numara"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <input
          autoFocus="true"
          className="input"
          type="password"
          placeholder="Şifre"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button className="button button1" onClick={control}>
          Giriş
        </button>
      </div>
    </Form>
  );
};
export default Login;
