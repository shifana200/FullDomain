const students = [
    { id: 1, name: "Alice", age: 20, marks: 85 },
    { id: 2, name: "Bob", age: 22, marks: 90 },
    { id: 3, name: "Charlie", age: 19, marks: 70 },
    { id: 4, name: "David", age: 21, marks: 60 },
    { id: 5, name: "Eva", age: 20, marks: 95 }
  ];
  
  //Filter all students whose marks are greater than 80.
  const ageGreater80 = students.filter(std=>std.marks>80);
  console.log(ageGreater80)
  
  //Find the student with id = 3.
  const id3 = students.find(std=>std.id===3)
  console.log(id3)
  
  //Sort students by age in ascending order.
  const ageSmall = students.sort((a,b)=>a.age-b.age)
  console.log(ageSmall)
  
  // //Get only names of all students as an array.
  const names = students.map(std=>std.name)
  console.log(names)
  
  //Check if all students scored more than 50.
  const above50 = students.every(std=>std.marks>50)
  console.log(above50)
  
  // //Check if at least one student is below 60.
  const below60 = students.some(std=>std.marks<60)
  console.log(below60)
  
  //Find the average marks of all students.
  const avgMark = students.reduce((sum,student)=>sum+student.marks,0) / students.length
  console.log(avgMark)
  
  //Get the name of the topper (highest marks).
  const topper = students.reduce((top,std)=>std.marks>top.marks ? std:top);
  console.log(topper.name)
  
  //Increase marks by 5 for every student and return a new array.
  const increase = students.map(std=>({...std,marks:std.marks+5}))
  console.log(increase)
  
  //Group students by age (students with same age together).
  
  const groupByAge = students.reduce((group,std)=>{
      if(!group[std.age]) group[std.age]=[];
      group[std.age].push(std);
      return group;
  },{})
  console.log(groupByAge)
  
  //Find total marks scored by all students using reduce.
  const totalMark = students.reduce((sum,student)=>sum+student.marks,0)
  console.log(totalMark)
  
  //Return names of students sorted by marks (highest to lowest).
  const markNames = students.sort((a,b)=>b.marks-a.marks).map(std=>std.name)
  console.log(markNames)
  
  //Count how many students are older than 20.
  const older20 = students.filter(std=>std.age>20).length
  console.log(older20)
  
  //Find the youngest student.
  const youngest = students.reduce((min,std)=>std.age < min.age ? std :min);
  console.log(youngest)
  
  
  //Convert array of objects into object where key = student id and value = student object.
  const studentObject = students.reduce((obj,std)=>{
      obj[std.id]=std;
      return obj;
  },{})
  console.log(studentObject)

  //--------------------------------------------------------------------------