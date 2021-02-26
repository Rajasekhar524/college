import React,{useState} from 'react'
import './styles.css'
import {Link} from 'react-router-dom'


function Header(props) {
    
    return (
        <div className="header">
            <div className="wrap">
                <div className="logo">
                   <Link to="/">
                       <h3></h3>
                   </Link>
                </div>
                
                <div className="header_right">
                  <ul>
                    
                  <li>
                      <Link to="/">
                        home
                      </Link>
                    </li>
                    <li>
                      <Link to="/college">
                        COLLEGEs
                      </Link>
                    </li>
                    <li>
                      <Link to="/student">
                    
                      </Link>
                    </li>
                  </ul>
                </div>

                </div>
        </div>
    )
}



export default Header;
