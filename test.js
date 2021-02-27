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

  addGrades(name, grade) {
    this.grades[name].push(grade);
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
}

const bootcamp = new Bootcamp(
  'Map Academy',
  'Anyone can be a cartographer.',
  6
);

console.log(JSON.stringify(bootcamp));
console.log(bootcamp.getGrades('Alice', '[]'));
console.log(bootcamp.getGrades('Bob', '[]'));
bootcamp.grades['Alice'] = 42;
console.log(bootcamp.getGrades('Alice', '[42]'));
console.log(bootcamp.getGrades('Bob', '[]'));
bootcamp.hire('Jeff');
bootcamp.hire('Matthias');
console.log(bootcamp.enroll('Alice'));
console.log(bootcamp.enroll('Bob'));
console.log(bootcamp.enroll('Alice2'));
console.log(bootcamp.enroll('Bob2'));
console.log(bootcamp.enroll('Alice3'));
console.log(bootcamp.enroll('Bob3'));
console.log(bootcamp.enroll('Alice4'));
console.log(bootcamp.enroll('Bob4'));
console.log(bootcamp.isEnrolled('Alice'), 'true');
console.log(bootcamp.isEnrolled('Bobxyz'), 'false');
console.log(JSON.stringify(bootcamp));
