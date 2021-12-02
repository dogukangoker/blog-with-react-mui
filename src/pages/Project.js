import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Container from '@mui/material/Container'
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() {
    return (
        <Router>
            <Container>
                <div className="main">
                    <h2>Contact with me!</h2>
                    <div style={{
                        display: 'flex'
                    }}>
                        <Link
                            style={{
                            display: 'flex',
                            textDecoration: 'none',
                            color: 'black'
                        }}
                            to="mailto@dogukangkr1234@gmail.com">
                            <MailIcon
                                style={{
                                paddingTop: '5px'
                            }}
                                fontSize="large"/>
                            <p
                                style={{
                                fontSize: '16px',
                                paddingLeft: '5px'
                            }}>dogukangkr1234@gmail.com</p>
                        </Link>
                    </div>
                    <div style={{
                        display: 'flex'
                    }}>
                        <Link
                            style={{
                            display: 'flex',
                            textDecoration: 'none',
                            color: 'black'
                        }}
                            to={{
                            pathname: "https://instagram.com/dogukan.gkr"
                        }}
                            target="_blank">
                            <InstagramIcon
                                style={{
                                paddingTop: '5px'
                            }}
                                fontSize="large"/>
                            <p
                                style={{
                                fontsize: '16px',
                                paddingLeft: '5px'
                            }}>dogukangkr</p>
                        </Link>
                    </div>
                    <div style={{
                        display: 'flex'
                    }}>
                        <Link
                            style={{
                            display: 'flex',
                            textDecoration: 'none',
                            color: 'black'
                        }}
                            to={{
                            pathname: "https://github.com/dogukangoker"
                        }}
                            target="_blank">
                        <GitHubIcon
                            style={{
                            paddingTop: '5px'
                        }}
                            fontSize="large"></GitHubIcon>
                        <p
                            style={{
                            fontSize: '16px',
                            paddingLeft: '5px'
                        }}>dogukangoker</p>
                        </Link>
                    </div>
                </div>
            </Container>
        </Router>
    );
}

export default Contact;
