import React from 'react'
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from 'styled-components'
/* ---------------------------------- IMAGE --------------------------------- */
import myimg from '../img/about__img1.png'

const About = () => {
    return (
        <Container>
            <div className="container_lg container">
                <div className="about__text">
                    <h2 className='about__title'>About <span>Me</span></h2>
                    <h2 className='about__desc'>Hi my name is Manuel Diez de Oñate. I'm a full stack developer with a passion for coding and a strong desire to learn. I may not have years of experience, but I have a willingness to learn and a drive to succeed. I'm excited to take on new challenges and to continue growing as a developer. Summary of soft skills.</h2>
                    <div className='about__skills'>
                        <div>
                            <h3>Problem-solving</h3>
                        </div>
                        <div>
                            <h3>Teamwork</h3>
                        </div>
                        <div>
                            <h3>Communication</h3>
                        </div>
                        <div>
                            <h3>Time management</h3>
                        </div>
                        <div>
                            <h3>Adaptability</h3>
                        </div>
                    </div>
                </div>
                <div className="about__img">
                    <img src={myimg} alt="" />
                </div>
            </div>
        </Container>
    )
}

export default About

const Container = styled.section`

    padding: 5rem 1.5rem;

    .container{

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 2rem;

        .about__text{
            width: 100%;
            max-width: 450px;
            .about__title{
                font-size: 3rem;
                font-weight: 700;
                color: ${props => props.theme.black};
                span{
                    color: ${props => props.theme.yellow};
                }
            }
            .about__desc{
                margin-top: 1rem;
                font-size: 1.3rem;
                font-weight: 300;
            }
            
            .about__skills{
                display: grid;
                grid-template-columns: repeat(2, 150px);
                justify-content: center;
                align-items: center;
                gap: 1rem;
                border-radius: 30px;
                border: 1px solid ${props => props.theme.yellow};
                padding: 2rem;
                width: 100%;
                margin: 0 auto;
                margin-top: 2rem;
                
                @media (max-width: 420px) {
                    grid-template-columns: repeat(1, 150px);
                    
                }
                div{
                    h3{
                        font-size: 1.3rem;
                        font-weight: 700;
                        color: ${props => props.theme.orange};
                    }
                }
            }
        }

        .about__img{
            width: 100%;
            max-width: 400px;
            img{
                width: 100%;
            }
        }
    }

    @media (min-width: 768px) {
        padding: 3rem 1.5rem;

        .container{
            flex-direction: row;
            gap: 3rem;
            .about__text{
                .about__skills{
                    margin-top: 4rem;
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                    border-left: none;
                    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.15);
                }
            }
        }
    }

`