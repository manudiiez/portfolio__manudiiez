import React from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ------------------------------- FONTAWESOME ------------------------------ */
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faDownload } from '@fortawesome/free-solid-svg-icons'
/* ------------------------------- COMPONENTS ------------------------------- */
import BarsWidget from './BarsWidget'


const Navbar = ({ state, handleChangeStateFalse, handleChangeState }) => {
    return (
        <Container>
            <nav>
                <div className="container_lg container">
                    <div className="logo">
                        <p>manudiiez</p>
                    </div>
                    <BarsWidget state={state} handleChangeState={handleChangeState} />
                    <div className={`navbar__links ${state}`}>
                        <ul>
                            <li>
                                <a href="#home" onClick={() => handleChangeStateFalse()}>Home</a>
                            </li>
                            <li>
                                <a href="#home" onClick={() => handleChangeStateFalse()}>About me</a>
                            </li>
                            <li>
                                <a href="#home" onClick={() => handleChangeStateFalse()}>Projects</a>
                            </li>
                            <li>
                                <a href="#home" onClick={() => handleChangeStateFalse()}>Skills</a>
                            </li>
                            <li>
                                <a href="#home" onClick={() => handleChangeStateFalse()}>Contact</a>
                            </li>
                        </ul>
                        <button>
                            <span>CV</span>
                            {/* <FontAwesomeIcon icon={faDownload}/> */}
                        </button>
                        <div className="bgEffect2"></div>
                        <div className="bgEffect2"></div>
                        <div className="bgEffect2"></div>
                        <div className="bgEffect2"></div>
                        <div className="bgEffect2"></div>
                        <div className="bgEffect2"></div>
                    </div>
                </div>
            </nav>
        </Container>
    )
}

export default Navbar

const Container = styled.div`
    width: 100%;
    height: 50px;


    

    nav{
        background-color: ${props => props.theme.white};
        position: fixed;
        padding: 0 1.5rem;
        width: 100%;
        height: 50px;
        z-index: 300;

        
        .container{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            
            .logo{
                p{
                    font-size: 1.5rem;
                    color: ${props => props.theme.yellow};
                    text-shadow: -1px -1px 1px ${props => props.theme.orange}, -2px -2px 1px ${props => props.theme.lightGray};
                }
            }
            
            .navbar__links{
                position: absolute;
                top: 50px;
                right: -100%;
                width: 100%;
                height: calc(100vh - 50px);
                background-color: ${props => props.theme.white};
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                transition: right .3s ease-in-out;
                overflow: hidden;


                &.true{
                    right: 0;
                    ul{
                        li{
                            a{
                                bottom:0;
                            }
                        }
                    }
                }
                
                ul{
                    list-style: none;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    width: 100%;
                    gap: 1rem;
                    position: relative;
                    z-index: 2;
                    li{
                        text-align: center;
                        overflow: hidden;
                        width: 100%;
                        a{
                            position: relative;
                            display: block;
                            bottom: -100%;
                            font-size: 2rem;
                            font-weight: 700;
                            color: ${props => props.theme.black};
                            text-decoration: none;
                            transition: bottom .3s ease-in-out;
                            transition-delay: .3s;
                            padding: 1rem 0;
                            
                            &:hover{
                                background-color: ${props => props.theme.lightGray};
                            }
                        }
                    }
                }

                button{
                    width: 100%;
                    max-width: 150px;
                    background: none;
                    border: 1px solid ${props => props.theme.yellow};
                    background-color: ${props => props.theme.yellow};
                    color: ${props => props.theme.black};
                    font-size: 1.5rem;
                    border-radius: 10px;
                    position: absolute;
                    bottom: 4rem;
                    font-weight: 700;
                    height: 50px;
                }

                .bgEffect2{
                    position: absolute;
                    z-index: 1;
                    width: 70px;
                    height: 3px;
                    left: -100px;
                    background-color: #fb9400;
                    animation: burbujas2 2s linear infinite;

                    top: 5%;
                    animation-delay: 1s;

                    @media (min-width: 768px) {
                        display: none;
                    }

                    
                    &:nth-child(2){
                        background-color: #00FF55;
                        top: 25%;
                        animation-delay: 2.5s;
                    }
                    &:nth-child(3){
                        background-color: #f9ed96;
                        top: 25%;
                        animation-delay: 2.5s;
                    }
                    &:nth-child(4){
                        background-color: #ffcc06;
                        top: 55%;
                        animation-delay: 3.5s;

                    }
                    &:nth-child(5){
                        background-color: #fea906;
                        top: 75%;
                        animation-delay: 4s;

                    }
                    &:nth-child(6){
                        background-color: #f9ed96;
                        top: 95%;
                        animation-delay: 3.2s;
                    }

                    @keyframes burbujas2 {
                        0%{
                            left: 0;
                            opacity: 0;

                        }
                        20%{
                            opacity: 1;
                        }
                        80%{
                            opacity: .6;
                        }
                        100%{
                            left: 100%;
                            opacity: 0;
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 768px) {
        nav{
            .container{
                .navbar__links{
                    position: relative;
                    right: 0;
                    position: relative;
                    right: 0;
                    top: 0;
                    height: fit-content;
                    background-color: transparent;
                    flex-direction: row;

                    ul{
                        flex-direction: row;
                        justify-content: flex-end;
                        li{
                            width: fit-content;
                            a{
                                display: inline;
                                font-size: 1rem;
                                &:hover{
                                    background-color: transparent;
                                    text-decoration: underline;
                                    color: ${props => props.theme.orange};
                                }
                            }
                        }
                    }

                    button{
                        position: relative;
                        bottom: 0;
                        width: 30px;
                        height: 30px;
                        border-radius: 5px;
                        font-size: 1rem;
                        margin-left: 1rem;
                        font-weight: 400;
                        padding: 0;

                        &:hover{
                            background-color: ${props => props.theme.orange};
                            /* border: 1px solid ${props => props.theme.black}; */
                        }
                    }
                }
            }
        }
    }


`