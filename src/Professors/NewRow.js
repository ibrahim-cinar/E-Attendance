import React, { useState, useContext } from "react";
import { AttendanceContext } from "../Helpers/Context";
import STUDENTS from "../Students/Student";
const NewRow = () => {
  
  const { all, setAll, lessons } = useContext(AttendanceContext);
  const [ogrencinumara, setOgrenciNumara] = useState();
  const ekle = () => {
    const now = new Date();
    let date = now.toLocaleString("tr-TR");
    const x = STUDENTS.findIndex((e) => e.studentNumber === ogrencinumara);
    STUDENTS[x].studentLesson.find((eleman) => eleman === lessons);

    STUDENTS[x].studentLesson.forEach((element) => {
      if (lessons === element) {
        const yeniData = {
          studentNm: STUDENTS[x].studentName,
          number: ogrencinumara,
          studentDp: STUDENTS[x].studentDepartmen,
          InputCode: lessons,
          date: date,
        };
        console.log(all);
        if(all.some(element=>element.number===ogrencinumara)){
          alert("Kaydınız Bulunmaktadır.");
        }
        else{
          setAll([...all,yeniData]);
        }
      }
    });
  };

  return (
    <div className="newrow">
      <input
        className="input2"
        onChange={(e) => setOgrenciNumara(e.target.value)}
      ></input>
      <button onClick={ekle} className="button button1">
        Öğrenci ekle
      </button>
    </div>
  );
};
export default NewRow;
