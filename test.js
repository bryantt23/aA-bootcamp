class Bootcamp {
  constructor(name, slogan, studentCapacity) {
    this.name = name;
    this.slogan = slogan;
    this.studentCapacity = studentCapacity;
    this.teachers = [];
    this.students = [];
    this.grades = {};
  }

  getGrades(student) {
    if (!this.grades[student]) {
      return [];
    }
    return this.grades[student];
  }

  addGrade(name, grade) {
    if (!this.isEnrolled(name)) return false;
    if (!this.grades[name]) {
      this.grades[name] = [];
    }
    this.grades[name].push(grade);
    return true;
  }

  hire(teacher) {
    this.teachers.push(teacher);
  }

  enroll(student) {
    if (this.students.length < this.studentCapacity) {
      this.students.push(student);
      return true;
    }
    return false;
  }

  isEnrolled(student) {
    return this.students.includes(student);
  }

  studentToTeacherRatio() {
    return Math.floor(this.students.length / this.teachers.length);
  }

  numGrades(student) {
    return this.grades[student].length;
  }

  averageGrade(student) {
    if (!this.isEnrolled(student)) return null;
    const grades = this.getGrades(student);
    return (
      grades.reduce((acc, cur) => {
        return acc + cur;
      }, 0) / grades.length
    );
  }
}

/*
const bootcamp = new Bootcamp(
  'Map Academy',
  'Anyone can be a cartographer.',
  6
);
console.log(JSON.stringify(bootcamp));
console.log(bootcamp.getGrades('Alice', '[]'));
console.log(bootcamp.getGrades('Bob', '[]'));
// bootcamp.grades['Alice'].push(42);
console.log(bootcamp.getGrades('Alice', '[42]'));
console.log(bootcamp.getGrades('Bob', '[]'));
bootcamp.hire('Jeff');
bootcamp.hire('Matthias');
console.log(bootcamp.enroll('Alice'));
console.log(bootcamp.enroll('Bob'));
console.log(bootcamp.studentToTeacherRatio(), 1);
console.log(bootcamp.enroll('Alice2'));
console.log(bootcamp.enroll('Bob2'));
console.log(bootcamp.enroll('Alice3'));
console.log(bootcamp.enroll('Bob3'));
console.log(bootcamp.enroll('Alice4'));
console.log(bootcamp.enroll('Bob4'));
console.log(bootcamp.isEnrolled('Alice'), 'true');
console.log(bootcamp.isEnrolled('Bobxyz'), 'false');
console.log(bootcamp.studentToTeacherRatio(), 3);

console.log(JSON.stringify(bootcamp));
bootcamp.addGrade('Alice', 42);
bootcamp.addGrade('Alice', 100);
*/

const bootcamp = new Bootcamp(
  'Map Academy',
  'Anyone can be a cartographer.',
  6
);
bootcamp.enroll('Alice');
bootcamp.enroll('Bob');
console.log(JSON.stringify(bootcamp));
console.log(bootcamp.addGrade('Alice', 100));
console.log(bootcamp.addGrade('Alice', 75));
console.log(bootcamp.addGrade('Bob', 80));
console.log(bootcamp.addGrade('Bry', 99));
console.log(bootcamp.numGrades('Alice'));
console.log(bootcamp.numGrades('Bob'));
console.log(bootcamp.averageGrade('Alice'));
console.log(bootcamp.averageGrade('Bob'));
console.log(bootcamp.averageGrade('Bry'));
console.log(JSON.stringify(bootcamp));
