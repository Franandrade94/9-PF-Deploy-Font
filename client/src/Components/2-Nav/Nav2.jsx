import "./nav.css";
import React, { useState } from "react";
import styled from "styled-components";
import BurgerButtonNav from "./BurgerButtonNav/BurgerButtonNav";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";


function Nav() {

  const [burger_classNav, setBurgerClassNav] = useState("burger-barNav unclicked")
  const [menu_classNav, setMenuClassNav] = useState("menuNav hidden")
  const [isMenuClickedNav, setIsMenuClickedNav] = useState(false)

  const updateMenuNav = () => {
      if (!isMenuClickedNav) {
          setBurgerClassNav("burger-barNav clicked")
          setMenuClassNav("menuNav visible")
      }
      else {
          setBurgerClassNav("burger-barNav unclicked")
          setMenuClassNav("menuNav hidden")
      }
      setIsMenuClickedNav(!isMenuClickedNav)
  }

  const [ clicked, setClicked ] = useState(false);

  const handleClick = () => {
      setClicked(!clicked)
  }

  const scrollToContacto = () => {
      scroll.scrollTo(document.getElementById("contacto").offsetTop);
    };
  
    const scrollToNosotras = () => {
      scroll.scrollTo(document.getElementById("nosotras").offsetTop);
    };

    const handleClickNosotras = () => {
        scrollToNosotras();
        
      }
  
      const handleClickNosotras2 = () => {
          scrollToNosotras();
          handleClick();
      }
  

    const handleClickContacto = () => {
      scrollToContacto();
      
    }

    const handleClickContacto2 = () => {
        scrollToContacto();
        handleClick();
    }


    return(
        <>
            <NavBar>
                <div className={`links ${ clicked ? 'active' : '' }`}>
                    
                    {window.innerWidth <= 768 ? 
                     (  
                    <div> 
                      <a href="/">Home</a>
                      
                      <Link to="" onClick={handleClickNosotras2}>
                        <a>Nosotras</a>
                      </Link>
                      <Link onClick={handleClickContacto2}  to="" >
                          <a className="contact">Contacto</a>
                        </Link>
                      <div>
                          <nav className="Menu-Nav">
                            <div className="burger-menuNav">
                              <div className={burger_classNav} onClick={updateMenuNav}>
                                <button className="Productos-btn"><p>Productos ▼</p></button>
                              </div>
                            </div>
                          </nav>
                        <div className={menu_classNav}>
                          <ul className="Products-All">
                              <li><a onClick={handleClick} href="/products/animales">Todos</a></li>
                              <li><a onClick={handleClick} href="/products/animales">Animales</a></li>
                              <li><a onClick={handleClick} href="/products/bizcocho">Bizcocho Cerámico</a></li>
                              <li><a onClick={handleClick} href="/products/cemento">Cemento</a></li>
                              <li><a onClick={handleClick} href="/products/colgantes">Colgantes</a></li>
                              <li><a onClick={handleClick} href="/products/fridas">Fridas & Babies</a></li>
                              <li><a onClick={handleClick} href="/products/otros">Otros</a></li>
                          </ul>
                        </div>
                        
                      </div> 

                    </div>      
                        ) : (
                    <div>
                        <a href="/">Home</a>
                      
                        <Link to="" onClick={handleClickNosotras}>
                          <a>Nosotras</a>
                        </Link>

                        <a href="/products" className="Products">Productos ▼
                            <ul className="Products-All">
                                <li><a href="/products/animales">Animales</a></li>
                                <li><a  href="/products/bizcocho">Bizcocho Cerámico</a></li>
                                <li><a  href="/products/cemento">Cemento</a></li>
                                <li><a  href="/products/colgantes">Colgantes</a></li>
                                <li><a  href="/products/fridas">Fridas & Babies</a></li>
                                <li><a  href="/products/otros">Otros</a></li>
                            </ul>
                        </a>
                        <Link onClick={handleClickContacto}  to="" >
                          <a className="contact">Contacto</a>
                        </Link>
                      </div>)
                    }
                    
                </div>
                <div className="Burguer">
                    <BurgerButtonNav clicked={clicked} handleClick={handleClick}/>
                </div> 
                <BgDiv className={`initial ${ clicked ? 'active' : '' }`}> </BgDiv>
            </NavBar>
        </>
    )
};

export default Nav;

const NavBar = styled.nav`
    
    padding: .8rem;
    background-color: white;
    display: flex;
    align-items: center;

    a{
        color: white;
        text-decoration: none;
        margin-right: 2rem;
    }

    .links{
        position: absolute;
        top: -7000%;
        left: -20000%;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        z-index: 2;
        a{
            color: black;
            font-size: 17px;
            display: block;
        }

        
        @media(min-width: 768px){
            position: initial;
            margin: auto;
            a{
                font-size: 18px;
                color: rgb(103, 103, 103);
                display: inline;

                &:hover{
                    color: rgb(30, 30, 30); 
                }
            }
        }
    }

    .links.active{
        width: 100%;
        display: block;
        position: absolute;
        margin-left: 5%;
        margin-right: auto;
        top: 23%;
        left: 0;
        right: 0;
        text-align: left;
        a{
            font-size: 17px;
            margin-top: 1rem;
            color: rgb(103, 103, 103);

            &:hover{
                color: rgb(30, 30, 30); 
            }
        }
    }

    .Burguer{
        @media(min-width: 768px){
            display: none;
        }
    }
`

const BgDiv = styled.div`
    position: absolute;
    background-color: rgb(230, 230, 230);
    top: -7000%;
    left: -20000%;
    width: 100%;
    height: 100%;
    z-index: 1;

    &.active{
        width: 100%;
        height: 40%;
        margin-top: 20%;
        top: 0;
        left: 0;
    }
`