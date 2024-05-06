import React from "react"; 6.9k 
import { Container, Row, Col, Form, FormGroup, Button } from 'rectstrap' ;
import {Link} from 'react-router-dom' 
import '../styles/login.css'

import loginImg from ' ../assets/images/login.png'
import usericon from ' ../assets/images/user.png'

const Login = () => {
    return (
         <section>
        <Container>
            <Row>
                <Col lg='8' className="m-auto">
                    <div className="login__container d-flex justify-content-between">
                        <div className="login__img">
                            <imag src={loginImg} alt="" />
                        </div>
                        <div className="login__form">
                            <div className="user">
                                <img src={userIcon} alt="" />
                            </div>
                            <h2>Login</h2>
                            <Form>
                                <FormGroup>
                                    <input type="email" placeholder ="Email" required id="Email"/>
                                    onChange={handleChange}
                                </FormGroup>
                                <FormGroup>
                                    <input type="password" placeholder ="Password" required id="password"/>
                                    onChange={handleChange}
                                </FormGroup>
                                <button className= "btn secondary__btn auth__btn"
                                type="submit">Login</button>
                            </Form>
                            <p>Don't Have an account ? <linl to='/register'>Create</linl></p>
                        </div>
                    </div>

                </Col>
            </Row>
        </Container>
    </section>
    );
};