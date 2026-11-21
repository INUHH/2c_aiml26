const fs = require('fs');
const file = 'student.txt';
// Create/write file
fs.writeFileSync(file, 'Name: Student\nAge: 20');
// Read file
console.log('File content:');
console.log(fs.readFileSync(file, 'utf8'));
// Update/append file
fs.appendFileSync(file, '\nCourse: Node.js');
console.log('After update:');
console.log(fs.readFileSync(file, 'utf8'));
// Delete file
fs.unlinkSync(file);
console.log('File deleted successfully.');

