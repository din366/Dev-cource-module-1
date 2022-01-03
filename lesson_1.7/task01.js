const filter = (allStudents, failedStudent) => {
  const completedStudent = [];
  for (let item of allStudents) {
    if (!failedStudent.includes(item)) {
      completedStudent.push(item);
    }
  }

  return completedStudent;
};

const allStudents = [
  "Иванов",
  "Петров",
  "Сидоров",
  "Кузнецов",
  "Смирнов",
  "Попов",
  "Соколов",
];
const failedStudent = ["Сидоров", "Смирнов", "Попов"];

filter(allStudents, failedStudent);
