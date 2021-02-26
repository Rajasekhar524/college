import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'
import MaterialTable from 'material-table'


function Student({student}) {
    const {Name,YearOfBatch, collegeId, Skills} = student;
    
    
    return (
        <div className="Name">
            <table class="content-table-college">
                <tbody>
                    <tr>
                        <td>{collegeId}</td>
                        <td>{YearOfBatch}</td>
                        <td>{Name}</td>
                        <td>{Skills}</td>
                        
                    </tr>
                </tbody>
        </table>
        
        </div>
    )
}

export default Student
