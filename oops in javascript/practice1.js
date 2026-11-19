const EventEmitter=require('events');
const event=new EventEmitter();
let present=0;
let absent=0;
event.on('studentPresent',(name,rollno,subject)=>{
    present++;
    console.log("\nStudent Present");
    console.log("Name:",name);
    console.log("Roll Number:",rollno);
    console.log("Subject:",subject);
    present++;
});
event.on('studentAbsent', (name, roll) => {
    console.log("\nStudent Absent:");
    console.log(name,"with Roll Number",roll,"is absent.");
    absent++;
});
event.on('attendanceSummary', () => {
    console.log("\nAttendance Summary:");
    console.log("Total Present:",present);
    console.log("Total Absent:",absent);
});
event.emit('studentPresent','Rahul',101,'JavaScript');
event.emit('studentPresent','Aman',102,'Node.js');
event.emit('studentAbsent','Priya',103);
event.emit('attendanceSummary');
