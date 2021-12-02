import React from 'react'
import '../styles/About.css'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'

function About() {
    return (
        <Container style={{
            backgroundColor: '#fcfcfc',
            width: '70%',
        }}>
            <div
                className="head"
                style={{
                    paddingTop: '5%',
                display: 'flex',
                textAlign: 'center'
            }}>
                <Avatar
                    src="https://pps.whatsapp.net/v/t61.24694-24/255360998_593909918427817_1174898732820300854_n.jpg?ccb=11-4&oh=dce530f2d9bee0dbc6fa7202b17a6f27&oe=61AB5BE0"
                    sx={{
                    width: 180,
                    height: 180
                }}/>

            </div>
            <h1
                style={{
                paddingLeft: '330px',
                marginBottom: '-20px',
                marginTop: '-55px'
            }}>Doğukan GÖKER</h1>
            <h3 style={{
                paddingLeft: '400px'
            }}>21, ANKARA</h3>
            <div style={{                
                paddingBottom: '5%'
            }} className="main">
                <h3>About Me</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet
                    tortor nulla. Nulla gravida dui a quam rhoncus luctus. Phasellus augue dolor,
                    lacinia ut consequat a, aliquam at mauris. Proin non dolor nec tortor euismod
                    sagittis at vitae sapien. Integer placerat orci in metus mattis congue.
                    Curabitur cursus, lectus sed egestas ullamcorper, urna purus aliquet ex, vel
                    faucibus enim orci a ipsum. Duis pharetra dictum felis, a iaculis augue sagittis
                    id. Nam ut felis mattis, rhoncus mauris sed, ornare orci. Phasellus non diam
                    nunc. Pellentesque quis risus in augue gravida ornare id eget est. Praesent
                    ultricies fermentum ante, quis vulputate purus tristique at. Suspendisse iaculis
                    euismod magna nec venenatis. Suspendisse tristique enim id tristique dapibus..</p>
            </div>

        </Container>
    );
}

export default About;
