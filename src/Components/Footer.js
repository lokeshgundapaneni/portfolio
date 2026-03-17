import React from 'react';
import  './Footer.css';
function Footer() {
  return (
    <div className='footer'>
        <div className='up'>
            <div className='logo'>
                <h1>LG<span>.</span></h1>
            </div>
            <div className='links'>
            <a href='https://github.com/lokeshgundapaneni'>Github</a>
            <a href='https://leetcode.com/u/i__lokesh__/'>Leetcode</a>
            <a href='https://www.linkedin.com/in/lokeshgundapaneni/'>LinkedIn</a>
        </div>
        </div>
        <div className='down'>
            <p>© 2026 Lokesh Gundapaneni. All rights reserved.</p>
         </div> 
    </div>
  )
}

export default Footer