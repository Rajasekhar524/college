import axios from 'axios'

const url = 'https://collegeslist.herokuapp.com/college'
// const students = 'http://localhost:3000/students'

export const fetchColleges = () => axios.get(url)
// export const fetchStudents = () => axios.get(students)
