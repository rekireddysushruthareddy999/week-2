
/* ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran" */

   const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
let  a1 = students.filter((s) => s.marks >= 40)
console.log(a1)
let a2 = students.map((s)=>{
    if(s.mark >= 90){
        return 'A';
    }
    else if(s.marks >= 75){
        return "B";
    }
    else if(s.marks >= 60){
        return "C";
    }
    else return "D"
})
console.log(a2)
//average marks
const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
const avgMarks = totalMarks / students.length;
console.log("Average Marks:", avgMarks);
//student scored 92
const student = students.find(s => s.marks === 92);
console.log(student);
//index of kiran
const index = students.findIndex(student => student.name === "Kiran");
console.log("index of kiran",index);