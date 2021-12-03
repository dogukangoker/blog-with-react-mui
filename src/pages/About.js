import React, {useState} from 'react'
import '../styles/About.css'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert'

export default function About() {
    const [copy,
        setCopy] = useState(false);
    const [open,
        setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    function copytoClipboard() {
        navigator
            .clipboard
            .writeText("dogukangkr1234@gmail.com")
        setCopy(true);
        setOpen(true);
    }

    function succesFunc() {
        return (
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    variant="filled"
                    severity="success"
                    sx={{
                    width: '100%'
                }}>
                    Mail adresi panoya kopyalandı!
                </Alert>
            </Snackbar>
        )
    }
    return (
        <Router>
            <Container
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
                        src="https://pps.whatsapp.net/v/t61.24694-24/255360998_593909918427817_1174898732820300854_n.jpg?ccb=11-4&oh=dce530f2d9bee0dbc6fa7202b17a6f27&oe=61AB5BE0"
                        style={{
                        width: '30%',
                        height: '30%'
                    }}/>

                </div>
                <h1 className="responsiveh1">Doğukan GÖKER</h1>
                <h3 className="responsiveh3" style={{}}>21, ANKARA</h3>
                <div style={{}} className="main">
                    <h3>Hakkımda</h3>
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
                    <h3>İletişim Adresleri</h3>
                    <Link
                        style={{
                        textDecoration: 'none',
                        color: 'black'
                    }}
                        to="">
                        <MailIcon
                            style={{
                            paddingRight: '5px'
                        }}
                            onClick={() => copytoClipboard()}
                            fontSize="large"/>
                    </Link>

                    <Link
                        style={{
                        textDecoration: 'none',
                        color: 'black'
                    }}
                        to={{
                        pathname: "https://instagram.com/dogukan.gkr"
                    }}
                        target="_blank">
                        <InstagramIcon
                            style={{
                            paddingRight: '5px'
                        }}
                            fontSize="large"/>
                    </Link>
                    <Link
                        style={{
                        textDecoration: 'none',
                        color: 'black'
                    }}
                        to={{
                        pathname: "https://github.com/dogukangoker"
                    }}
                        target="_blank">
                        <GitHubIcon
                            style={{
                            paddingRight: '5px'
                        }}
                            fontSize="large"></GitHubIcon>
                    </Link>
                    {copy
                        ? succesFunc()
                        : ""}
                    <span></span>
                </div>

            </Container>
        </Router>
    );
}
