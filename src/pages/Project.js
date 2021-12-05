import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Container from '@mui/material/Container'
import LinearProgress from '@mui/material/LinearProgress';
import CodeIcon from '@mui/icons-material/Code';
import Avatar from '@mui/material/Avatar'
import '../styles/Project.css'

function Contact() {
    return (
        <Router>
            <Container
                className="container"
                style={{
                backgroundColor: '#fcfcfc',
                width: '70%',
                paddingBottom: '2px'
            }}>
                <div
                    className="head"
                    style={{
                    paddingTop: '2%',
                    display: 'flex',
                    textAlign: 'center'
                }}>
                    <Avatar
                        className="avatar"
                        src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                        sx={{
                        width: '40%',
                        height: '40%'
                    }}/>

                </div>
                <h1 className="responsiveh1">Doğukan GÖKER</h1>
                <h3 className="responsiveh3">21, ANKARA</h3>
                <div className="main">
                    <div
                        style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap'
                    }}>
                        <CodeIcon/>
                        <h3
                            style={{
                            marginLeft: '10px'
                        }}>Programlama</h3>
                    </div>
                    <div className="icerik">
                        HTML5/CSS3 - Front End
                        <LinearProgress
                            className="progressbar"
                            variant="progress"
                            position="static"
                            style={{
                            height: '8px',
                            borderRadius: '25px',
                            marginBottom: '10px'
                        }}
                            sx={{
                            maxWidth: "60%",
                            flexGrow: 0
                        }}></LinearProgress>
                        JAVASCRIPT
                        <LinearProgress
                            className="progressbar"
                            variant="progress"
                            position="static"
                            style={{
                            height: '8px',
                            borderRadius: '25px',
                            marginBottom: '10px'
                        }}
                            sx={{
                            maxWidth: "30%",
                            flexGrow: 0
                        }}></LinearProgress>
                        C#
                        <LinearProgress
                            className="progressbar"
                            variant="progress"
                            value={2}
                            style={{
                            height: '8px',
                            borderRadius: '25px',
                            marginBottom: '10px'
                        }}
                            sx={{
                            maxWidth: "40%",
                            flexGrow: 0
                        }}></LinearProgress>
                    </div>
                </div>
            </Container>
        </Router>
    );
}

export default Contact;
