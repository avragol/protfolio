import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, AppBar, Toolbar, Typography, Link, List, Hidden, ListItem, ListItemIcon, ListItemText, Box, TextField, Button } from '@mui/material';
import { Code, Mail, DeveloperBoardRounded } from '@mui/icons-material';


import { lime } from '@mui/material/colors';


const textColor = lime[200];

function App() {
  const [aboutMe, setAboutMe] = useState("");



  useEffect(() => {
    const str = "About Me";
    const interval = setInterval(() => {
      setAboutMe(str.slice(0, aboutMe.length + 1))
    }, 150);

    return () => clearInterval(interval);
  }, [aboutMe])


  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const msg = {
      to: "avragol@gmail.com",
      from: email,
      subject: `You have a lid from ${name}`,
      text: 'This is a test email sent using SendGrid',
    };

  };

  return (
    <><div className="bg-filter"></div>
      <Container id="top">
        <AppBar position="sticky">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" component="div" sx={{ display: "flex", alignItems: "center", gap: "0.35rem", fontFamily: "'Courier New', Courier, monospace ", fontWeight: "600" }}>
              <DeveloperBoardRounded /> Avraham Gol
            </Typography>
            <Hidden smDown>
              <box>
                <Link href="#top" color="inherit" sx={{ marginRight: 3 }}>
                  About Me
                </Link>
                <Link href="#projects" color="inherit" sx={{ marginRight: 3 }}>
                  Projects
                </Link>
                <Link href="#contact" color="inherit">
                  Contact
                </Link>
              </box>
            </Hidden>
          </Toolbar>
        </AppBar>
        <Box sx={{ textAlign: 'center' }}>
          <Box id="about" sx={{ padding: { xs: 1, md: 4 }, minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h4" color={textColor} gutterBottom sx={{ fontSize: { xs: '4em', md: '5em' }, fontFamily: "'Courier New', Courier, monospace ", fontWeight: "600" }}>
              <span>{aboutMe}</span>
              <span className="blinking-cursor">|</span>
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row' }, gap: "10px", alignItems: 'center' }}>
              <Typography paragraph color={textColor} sx={{ paddingX: { xs: '1rem', sm: '2rem', md: '5rem' }, textAlign: 'justify', fontSize: '1.2em', fontFamily: "'Courier New', Courier, monospace ", fontWeight: "600" }}>
                I'm a full-stack web developer skilled in creating both responsive front-end interfaces and powerful back-end systems. My expertise includes JavaScript, React, Redux, Node.js, Express, MongoDB, and MySQL. I completed the HackerU full-stack web development bootcamp, gaining practical experience in contemporary frameworks and libraries. I excel at breaking down intricate problems and offering creative solutions. I'm a strong team player, capable of leading projects and guiding volunteers. I'm fluent in both Hebrew and English, and I'm enthusiastic about contributing to a dynamic tech team to craft the future of web applications.
              </Typography>
              <img src="./me.jpg" alt="profile of me" className='profile-image' />
            </Box>
            <Link
              href="#projects"
              variant="contained"
              color="secondary"
              sx={{
                mt: 4,
                bgcolor: "#ccc",
                paddingY: '15px',
                width: "80%",
                borderRadius: "15px",
                color: "#333",
              }}
            >
              <span className='down-arrow'>↓</span> See My Projects <span className='down-arrow'>↓</span>


            </Link>
          </Box>
        </Box>
        <Box id="projects" sx={{ padding: 4, minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h4" color={textColor} gutterBottom>
            Projects
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon color={textColor}>
                <Code />
              </ListItemIcon>
              <ListItemText primary="Project 1" secondary="Description of Project 1." />
            </ListItem>
            <ListItem>
              <ListItemIcon color={textColor}>
                <Code />
              </ListItemIcon>
              <ListItemText primary="Project 2" secondary="Description of Project 2." />
            </ListItem>
          </List>
        </Box>
        <Container id="contact" maxWidth={"sm"} sx={{ padding: 4, bgcolor: '#ccc', borderRadius: '3%', color: '#333', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Contact Me
          </Typography>
          <  >
            <form onSubmit={handleSubmit}>
              <TextField label="Name" name="name" fullWidth sx={{ marginBottom: 2 }} />
              <TextField label="Email" name="email" fullWidth sx={{ marginBottom: 2 }} />
              <Button type="submit" variant="contained" startIcon={<Mail />} color="primary">
                Contact Me
              </Button>
            </form>
          </>
        </Container>
        {/* </Box> */}
      </Container >
    </>
  );
}

export default App;
