import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

import './HeaderStyle.css'
function Header() {
  return (
    <div>
        
        <Navbar  data-bs-theme="black" >
        <Container>
          <Nav className="">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About Me</Nav.Link>
            <Nav.Link href="#pricing">Contact As</Nav.Link>
            <Nav.Link href="#project">Projects</Nav.Link>
        
          <div className='Name'>
            <h5>Ajinkya Patil</h5>
            <h5>Frontend Developer</h5>
          </div>

        <div className="Logos flex justify-center items-center gap-6 p-1 ">
        <a href="https://github.com/ajinkya2499" target="_blank" >
          <FaGithub className=" text-black m-2" />
        </a>
        <a href="https://linkedin.com/in/ajinkya-patil-ap2499" target="_blank" >
          <FaLinkedin className=" text-black m-2" />
        </a>
        <a href="https://instagram.com/your-username" target="_blank" >
          <FaInstagram className=" text-black m-2" />
        </a>
        </div>

         </Nav>
        
        </Container>
      </Navbar>

    </div>
  )
}

export default Header