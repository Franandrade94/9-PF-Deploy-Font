import "./navprueba.css";
import React, { useState } from "react";
import styled from "styled-components";
import BurgerButtonNav from "./BurgerButtonNav/BurgerButtonNav";


function NavPrueba() {

    const [ clicked, setClicked ] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    }

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


    return(
        <>
            <NavBar>
                <div className={`links ${ clicked ? 'active' : '' }`}>
                    <a onClick={handleClick} href="/" className="home-nav">Home</a>
                    <a onClick={handleClick} href="/" className="Nosotras">Nosotras</a>
                    {window.innerWidth <= 768 ? 
                     (                      
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
                                        <li><a onClick={handleClick} href="/products/animales">Animales</a></li>
                                        <li><a onClick={handleClick} href="/products/bizcocho">Bizcocho Cerámico</a></li>
                                        <li><a onClick={handleClick} href="/products/cemento">Cemento</a></li>
                                        <li><a onClick={handleClick} href="/products/colgantes">Colgantes</a></li>
                                        <li><a onClick={handleClick} href="/products/fridas">Fridas & Babies</a></li>
                                        <li><a onClick={handleClick} href="/products/otros">Otros</a></li>
                                    </ul>
                                </div>
                            </div>    
                        ) : (
                        <a onClick={handleClick} href="/products" className="Products">Productos ▼
                            <ul className="Products-All">
                                <li><a onClick={handleClick} href="/products/animales">Animales</a></li>
                                <li><a onClick={handleClick} href="/products/bizcocho">Bizcocho Cerámico</a></li>
                                <li><a onClick={handleClick} href="/products/cemento">Cemento</a></li>
                                <li><a onClick={handleClick} href="/products/colgantes">Colgantes</a></li>
                                <li><a onClick={handleClick} href="/products/fridas">Fridas & Babies</a></li>
                                <li><a onClick={handleClick} href="/products/otros">Otros</a></li>
                            </ul>
                        </a>)
                    }
                    <a onClick={handleClick} href="/" className="contact">Contacto</a>
                </div>
                <div className="Burguer">
                    <BurgerButtonNav clicked={clicked} handleClick={handleClick}/>
                </div> 
                <BgDiv className={`initial ${ clicked ? 'active' : '' }`}> </BgDiv>
            </NavBar>
        </>
    )
};

export default NavPrueba;

const NavBar = styled.nav`
    
    padding: .4rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-conctent: space-around;
    border-bottom: 1px solid rgb(230, 230, 230);

    a{
        color: white;
        text-decoration: none;
        margin-right: 1rem;
    }

    .links{
        position: absolute;
        top: -700px;
        left: -2000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: left;
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
        top:10%;
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
    top: -700px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: 20;

    &.active{
        width: 50%;
        height: 41.2vh;
        top: 0;
        left: 0;
    }
`




   
                    
                   