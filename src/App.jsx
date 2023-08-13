import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, AppBar, Toolbar, Typography, Link, List, ListItem, ListItemIcon, ListItemText, Box, TextField, Button } from '@mui/material';
import { Code, Mail, DeveloperBoardRounded } from '@mui/icons-material';
import axios from 'axios';

import { lime } from '@mui/material/colors';


const textColor = lime[200];

function App() {
  const [aboutMe, setAboutMe] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const str = "About Me";
    const interval = setInterval(() => {
      setAboutMe(str.slice(0, aboutMe.length + 1))
    }, 150);

    return () => clearInterval(interval);
  }, [aboutMe])


  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    try {
      await axios.post('https://your-api-url.com/submit', { name, email });
      alert('Thank you for your submission!');
    } catch (error) {
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <><div className="bg-filter"></div>
      <Container id="top">
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: "0.35rem", fontFamily: "'Courier New', Courier, monospace ", fontWeight: "600" }}>
              <DeveloperBoardRounded /> Avraham Gol
            </Typography>
            <Link href="#top" color="inherit" sx={{ marginRight: 3 }}>
              About Me
            </Link>
            <Link href="#projects" color="inherit" sx={{ marginRight: 3 }}>
              Projects
            </Link>
            <Link href="#contact" color="inherit">
              Contact
            </Link>
          </Toolbar>
        </AppBar>
        <Box sx={{ textAlign: 'center' }}>
          <Box id="about" sx={{ padding: 4, minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h4" color={textColor} gutterBottom sx={{ fontSize: '4em', fontFamily: "'Courier New', Courier, monospace ", fontWeight: "500" }}>
              <span>{aboutMe}</span>
              <span className="blinking-cursor">|</span>
            </Typography>
            <Typography paragraph color={textColor} sx={{ paddingX: '5rem', textAlign: 'justify', fontSize: '1.2em', fontFamily: "'Courier New', Courier, monospace ", fontWeight: "500" }}>
              Full-stack web developer with experience building responsive front-end interfaces and robust back-end systems. Proficient in JavaScript, React, Redux, Node.js, Express, MongoDB, and MySQL. Recent graduate of HackerU full-stack web development bootcamp with hands-on training in modern frameworks and libraries.
              <br /><br />
              Strong problem-solver able to dissect complex issues and deliver innovative solutions. Excellent team collaborator with proven ability to lead projects and manage volunteers. Fluent in Hebrew and English. Eager to join a dynamic technology team to build the next generation of web applications.
            </Typography>
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
        </Box>
      </Container >
    </>
  );
}

export default App;
