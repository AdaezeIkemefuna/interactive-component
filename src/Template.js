import React from 'react';
import './Template.css';
import { Link } from 'react-router-dom';

import { FaStar } from "react-icons/fa";


const Template = ({ clickButton }) => {
    
    return ( 
        <div className="container">
            <button className="icon">< FaStar style={{color: "#fb7413"}} /></button>
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. 
                All feedback is appreciated to help us improveour offering!
            </p>
            <div className='nums'>
            <button className="numbers" 
            value= {1}
            onClick={clickButton}>1</button>
            <button className="numbers"
            value= {2}
            onClick={clickButton}>2</button>
            <button className="numbers"
            value= {3}
            onClick={clickButton}>3</button>
            <button className="numbers"
            value= {4}
            onClick={clickButton}>4</button>
            <button className="numbers"
            value= {5}
            onClick={clickButton}>5</button>
            </div>
            <Link to="/thankyou" type="submit" className= "submit">Submit</Link>
        </div>
     );
}
 
export default Template;