let student = {};
student.firstName = 'Petr';
student.lastName = 'Perviy';
student.firstName = 'Petya';
delete student.lastName;

console.log(student);
let group =[];
group.push(student);

console.log(group);

let student1 = {};
student1.firstName = 'Lesya';
student1.lastName = 'Petrova';
let student2 = {};
student2.firstName = 'Lera';
student2.lastName = 'Fetisova';
group.push(student1,student2);

console.log(group);

