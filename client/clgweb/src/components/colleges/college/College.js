import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'
import MaterialTable from 'material-table'

function College({college}) {
    const {Name,City,Country,Noofstudents,State, Yearfounded,ClgId,Courses} = college;
    
    
    return (
        
        <div className="Name">
            
            <table class="content-table-college">
                <tbody>
                    <tr>
                        <td>{ClgId}</td>
                        <td>{Name}</td>
                        <td>{Yearfounded}</td>
                        <td>{City}</td>
                        <td>{State}</td>
                        <td>{Country}</td>
                        <td><Link to="/students">{Noofstudents}</Link></td>
                        <td>{Courses}</td>
                    </tr>
                </tbody>
        </table>
        
        </div>
    )
}

export default College
