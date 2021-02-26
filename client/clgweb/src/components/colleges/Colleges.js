import React,{useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import College from './college/College'
import './styles.css'

function Colleges() {
    const colleges = useSelector((state)=> state.colleges)
    console.log(colleges);

    const [data, setData] = useState(colleges)

    useEffect(()=>{
        
    },[colleges])

    const [qq,setQQ] = useState("")

    function search(rows) {
        return rows.filter((row) => row.Name.toLowerCase().indexOf(qq) > -1);
    }

    return (
        <div>
            <li className="input-field">
                <input type="text" value={qq} placeholder="   Search..." onChange={(e)=>setQQ(e.target.value)} />            
            </li>

            
            
        <table class="content-table">
            <thead>
                    <tr>
                        <th>CollegeID</th>
                        <th>Name</th>
                        <th>Year Founded</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Country</th>
                        <th>students</th>
                        <th>Courses</th>
                    </tr>
                </thead>
        </table>

            { 
                colleges.map((college)=>(
                    <College data={search(data)} college={college}/>
                ))
            }

            
        </div>
    )
}

export default Colleges
