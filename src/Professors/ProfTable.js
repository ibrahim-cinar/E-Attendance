import React, { useState, useContext } from "react";
import "./ProfTable.css";
import { AttendanceContext } from "../Helpers/Context";
import STUDENTS from "../Students/Student";

const YoklamaTablosu = () => {
  const[ogrencinumara,setOgrenciNumara] = useState();
  const {number,all, lessons,setAll} = useContext(AttendanceContext);
  const izid = [];
  
  all.forEach((element) => {
    if(element.number !== number){
      if(element.InputCode === lessons){
        izid.push(<Table props={element} />);
     }
    }
  });


  let studentcount = 0;
  STUDENTS.forEach((element) => {
    element.studentLesson.forEach((sayi) => {
      if (lessons === sayi) {
        studentcount = studentcount + 1;
      }
    });
  });

  return (
    <div className="app-container">
      <div>
        <h4>DERSİ ALAN ÖĞRENCİ SAYISI:{studentcount}</h4>
        <h4>DERSE KATILAN ÖĞRENCİ SAYISI:{izid.length}</h4>
      </div>
      <table>
        <thead>
          <tr>
            <th>AD</th>
            <th>Numara</th>
            <th>Bölümü</th>
            <th>DERS KODU</th>
            <th>Giriş</th>
          </tr>
        </thead>
        <tbody>{izid}</tbody>
      </table>
      <div>
      </div>
    </div>
  );
};
const Table = ({ props }) => {
  return (
    <tr>
      <td>{props.studentNm}</td>
      <td>{props.number}</td>
      <td>{props.studentDp}</td>
      <td>{props.InputCode}</td>
      <td>{props.date}</td>
    </tr>
  );
};

export default YoklamaTablosu;
