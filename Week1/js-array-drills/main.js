let teachers = ["Arrington", "Kincart", "Alberts", "Pickett"]

let rooms = [
  ["Andy", "Rodolfo", "Lynn", "Talia"],
  ["Al", "Ross", "Jorge", "Dante"],
  ["Nick", "Kim", "Jasmine", "Dorothy"],
  ["Adam", "Grayson", "Aliyah", "Alexa"]
]

//List all the teachers with an even index number (including 0)
let evenTeachers = teachers.filter((teacher, index) => {
  return index % 2 === 0
})

console.log(evenTeachers)

//List all of the teachers with the letter i in their name

let iInName = teachers.filter((teacher) => {
  return teacher.toLowerCase().includes("i")
})

console.log(iInName)

//Return the number of teachers
console.log(`Number of teachers: ${teachers.length}`)

//Return the number of rooms of students
console.log(`Number of rooms: ${rooms.length}`)

//Return the number of students in all the rooms

let studentCounts = rooms.map((room) => {
  return room.length
})
console.log(`Number of students: ${studentCounts}`)

let accSum = studentCounts.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})
console.log(`Number of students: ${accSum}`)

let sum = 0
rooms.forEach((room) => {
  sum += room.lenth
  // console.log(typeOf(room.lenth))
  console.log('room ' + room.length)
})

console.log(`Number of students: ${sum}`)


//Return the students who have an i in their names
let studentsWithI = []

rooms.forEach((room) => {
  room.forEach((student) => {
    if (student.toLowerCase().includes("i")) {
      studentsWithI.push(student)
    }
  })
})

console.log(`The students who have an 'i' in their name are  ${studentsWithI}.`)

// Another way to do this
let allStudents = rooms.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue)
})

let newStudentsWithI = allStudents.filter((student) => {
  return student.toLowerCase().includes('i')
})
console.log(allStudents)
console.log(newStudentsWithI)

//Return the teacher who has the given student in their room
let student = "Jorge"
rooms.forEach((room, index) => {
  if (room.includes(student)) {
    teacher = teachers[index]
  }
})

console.log(teacher)