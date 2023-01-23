import React from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
// IMAGES
import img1 from '../img/header__img1.png'

const Header = () => {
  return (
    <Container>
        <div className="container_lg container">
            <div className="header__img">
                <img src={img1} alt="" />
            </div>
            <div className="header__text">
                <h1>Full Stack Developer with a passion for coding.</h1>
                <p>Crafting digital solutions with passion, precision, and a desire to make a difference in the world</p>
                <div>
                    <button>English</button>
                    <button>Spanish</button>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Header

const Container = styled.section`
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column-reverse;
        padding: 5rem 0;
        gap: 2rem;
        .header__img{
            padding-right: 1.5rem;
            width: 100%;
            max-width: 500px;
            height: fit-content;
            img{
                width: 100%;
            }
        }
        .header__text{
            padding: 0 1.5rem;
            max-width: 450px;

            h1{
                font-size: 2rem;
                font-weight: 700;
                color: ${props => props.theme.black};
            }
            p{
                font-size: 1rem;
                font-weight: 300;
                color: ${props => props.theme.black};
                padding-top: 2rem;
            }
            
            div{
                width: 100%;
                max-width: 350px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1.5rem;
                margin: 0 auto;
                margin-top: 2rem;
                button{
                    width: 100%;
                    max-width: 150px;
                    border-radius: 30px;
                    padding: .5rem 0;
                    border: none;
                    font-size: 1rem;
                    font-weight: 700;
                    color: ${props => props.theme.black};
                    /* box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px; */
                    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);

                    &:nth-of-type(1){
                        background-color: ${props => props.theme.yellow};
                    }
                    &:nth-of-type(2){
                        background-color: ${props => props.theme.white};
                    }
                    
                    &:hover{
                        background-color: ${props => props.theme.yellow};
                    }
                }
            }
        }
        @media (min-width: 768px) {
            padding: 2rem 0;
            flex-direction: row;
            justify-content: space-between;

            .header__text{
                max-width: 350px;
                margin-right: 4rem;
                margin-top: 2.5rem;
            }

        }
    }

`