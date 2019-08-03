import React from 'react'
import './Footer.css'

const Footer = ({postsPerPage, totalPosts,setCurrentPage}) => {

    const pageNumbers = [];

    for (let i =1; i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i);        
    }
    
    return(

        <footer className='footer'>

            {pageNumbers.map((num)=>(
                <li key={num}
                onClick={()=>setCurrentPage(num)}
                className='footerli'>
                    {num}
                </li>
            ))}
            
          </footer>
    );
}

export default Footer;