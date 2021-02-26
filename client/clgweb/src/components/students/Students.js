import React,{useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import Student from './student/Student'
import './styles.css'
import '../colleges/styles.css'

function Students() {
    const students = useSelector((state)=> state.students)
    console.log(students);

    // const [data, setData] = useState([])

    useEffect(()=>{
        
    },[students])

    return (
        <div>
            
        <table class="content-table">
            <thead>
                    <tr>
                        <th>CollegeId</th>
                        <th>Name</th>
                        <th>YearOfBatch</th>
                        <th>Skills</th>
                        
                    </tr>
                </thead>
        </table>

            { 
                students.map((student)=>(
                    <Student student={student}/>
                ))
            }

            
        </div>
    )
}

export default Students
