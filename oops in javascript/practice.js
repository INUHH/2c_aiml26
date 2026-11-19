const EventEmitter = require('events');
class Student extends EventEmitter {}
const student = new Student();
student.on('studentRegistered', (name, roll) => {
    console.log("Student Registered Successfully");
    console.log("Name:", name);
    console.log("Roll Number:", roll);
});
student.on('studentLogout', () => {
    console.log("Student has logged out successfully.");
});
student.emit('studentRegistered', 'Unzila Ashraf', 101);

student.emit('studentLogout');

