import React from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ------------------------------- FONTAWESOME ------------------------------ */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Contact = () => {
  return (
    <Container>
        <div className="container_lg container">
            <div className="contact__media">
                <div>
                    <a href="https://github.com/"><FontAwesomeIcon icon={faGithub}/></a>
                    <a href="https://github.com/"><FontAwesomeIcon icon={faWhatsapp}/></a>
                    <a href="https://github.com/"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                    <a href="https://github.com/"><FontAwesomeIcon icon={faEnvelope}/></a>
                    <button>CV</button>
                </div>
                <p>manudiiez123@gmail.com</p>
            </div>
            <div className="contact__text">
                <h6 className='contact__title'>Contact <span>me</span></h6>
                <h6 className='contact__subtitle'>I’m looking for new opportunities.</h6>
                <h6 className='contact__subtitle'>Creating the impossible, one line of code at a time, with a passion for solving problems and a drive for excellence</h6>
            </div>
        </div>
    </Container>
  )
}

export default Contact

const Container = styled.section`
    padding: 5rem 1.5rem;
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column-reverse;
        gap: 3rem;

        .contact__text{
            text-align: center;
            .contact__title{
                font-size: 3rem;
                font-weight: 700;
                color: ${props => props.theme.black};
                span{
                    color: ${props => props.theme.yellow};
                }
            }
            
            .contact__subtitle{
                font-size: 1.3rem;
                font-weight: 300;
                color: ${props => props.theme.black};
                &:nth-of-type(2){
                    margin-top: 2rem;
                }
                &:nth-of-type(3){
                    margin-top: 1rem;
                }
            }
        }

        .contact__media{
            background-color: ${props => props.theme.yellow};
            width: 100%;
            max-width: 390px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 2rem 1rem;
            border-radius: 30px;
            gap: 1rem;
            
            div{
                flex-wrap: wrap;
                display: flex; 
                justify-content: center;
                align-items: center;
                gap: 2rem;
                a{
                    text-decoration: none;
                    color: ${props => props.theme.black};
                    font-size: 2rem;
                }

                button{
                    background-color: ${props => props.theme.black};
                    color: ${props => props.theme.yellow};
                    border: none;
                    height: 25px;
                    font-size: 1rem;
                    font-weight: 700;
                    width: 35px;
                    height: 30px;
                    border-radius: 5px;
                }
            }
            p{
                color: ${props => props.theme.black};
                font-size: 1rem;
                font-weight: 400;
            }
        }
    }

    @media (min-width: 768px) {
        .container{
            flex-direction: row;
            padding: 0 5rem;
            align-items: flex-end;
            .contact__text{
                text-align: end;
            }
        }
    }


`