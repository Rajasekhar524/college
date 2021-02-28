import React,{useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import Student from './student/Student'
import MaterialTable from 'material-table'
import './styles.css'
import '../colleges/styles.css'
import { match } from 'assert'
import {useParams} from 'react-router'



function Students() {
   
    const [onestudent, setOnestudent] = useState([])
    
 
    const colleges = useSelector((state)=> state.colleges)
    const {id} = useParams();
    
    const getStudent = async () => {
        const response = await fetch (`http://localhost:5000/college/${id}`   
        );
        const student = await response.json();
        
        setOnestudent(student.data.Students)
        console.log(onestudent)
    } 

   

    useEffect(()=>{
       getStudent()
      },[])


      const columns =[
        {title:"ID", field: "ID"},
        {title:"StudentName", field: "StudentName"},
        {title:"Skills", field:"Skills"},
        {title:"YearOfBatch",field:"YearOfBatch"}   
      ] 

      

    return (
        <div>
            <div>
                <MaterialTable 
                    title="Student Data"
                    data={onestudent}
                    columns={columns}
                    />
            
            </div>


            {/* <Doughnut data={dataa} /> */}
            <div>
            
            </div>

        </div>
    )
}

export default Students
