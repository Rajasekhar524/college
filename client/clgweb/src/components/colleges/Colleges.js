import React,{useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import './styles.css'
import MaterialTable from 'material-table'
import { useHistory } from 'react-router-dom';
import GroupIcon from '@material-ui/icons/Group';

import DonutComponent from "../DonutChart/DonutComponent";
import BarChart from "../BarChart/BarChart";
import LineChart from "../LineChart/LineChart";

function Colleges() {
    const history = useHistory();
    const colleges = useSelector((state)=> state.colleges)
    const [selectedGroup, setSelectedGroup] = useState("All");
    const [groupColour, setGroupColour] = useState("lightgrey");    

    const columns =[
        {title:"CollegeName", field: "CollegeName"},
        {title:"Yearfounded", field: "Yearfounded"},
        {title:"Address", field:"Address",
        render:rowData => rowData.Address ? rowData.Address.join():'Empty'},
        {title:"Country", field: "Country"},
        {title:"Courses", field: "Courses"} 
      ] 

    const handleClick=(event,rowData)=> {
        
        console.log(event.id);
      console.log(rowData)
        // history.push(`/college/603a2bf92bf3c96a98942dda`);
        // history.push("/college")
      }

      function updateBarChart(group, colour) {
        setSelectedGroup(group);
        setGroupColour(colour);
      }

    return (
        <div>
        <MaterialTable 
          
          title="College Data"
          data={colleges}
          columns={columns}
          pagination={false}
          
          actions={[
            {
              icon: ()=> <GroupIcon />,
              tooltip:'Student List',
              onClick: (event, rowData) => {handleClick()}
            }
          ]}
          />

    <div>
      <svg viewBox="-2 0 100 100" preserveAspectRatio="xMidYMid meet">
        <DonutComponent x={15} y={20} onChangeGroup={updateBarChart} />
        <BarChart
          positionX={35}
          positionY={50}
          width={80}
          height={100}
          selectedGroup={selectedGroup}
          barColour={groupColour}
        />
        <LineChart
          positionX={35}
          positionY={4}
          selectedGroup={selectedGroup}
          lineColour={groupColour}
        />
      </svg>
    </div>

            
        </div>
    )
}

export default Colleges
