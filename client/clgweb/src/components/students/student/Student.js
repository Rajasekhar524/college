import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'
import MaterialTable from 'material-table'


function Student(stu) {
    // console.log(stu.StudentName)
    console.log(stu.stu.Skills)
    
    
    
    return (
        <div className="Name">
            {/* <table class="content-table-college">
                <tbody>
                    <tr>
                        <td>{data.Students.ID}</td>
                        <td>{YearOfBatch}</td>
                        <td>{Name}</td>
                        <td>{Skills}</td>
                        
                    </tr>
                </tbody>
        </table> */}
        
        </div>
    )
}

export default Student
