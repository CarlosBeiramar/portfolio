import React, { useState } from 'react';
import './App.css';
import { Grid, Typography, Box, Avatar, Button, Dialog, DialogContent } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonIcon from '@mui/icons-material/Person';
import profileImage from './assets/circule_me.png';


function openLinkedProfile() {
  window.open('https://www.linkedin.com/in/carlos-beiramar/', '__blank')
}

function openGithubProfile() {
  window.open('https://github.com/CarlosBeiramar', '__blank')
}

function copyGmailToClipBoard() {
  navigator.clipboard.writeText("carlosbeiramar@gmail.com")
}

function App() {
  // State for handling button clicks
  const [aboutMeClicked, setAboutMeClicked] = useState(false);
  const [contactMeClicked, setContactMeClicked] = useState(false);
  const [gmailClicked, setGmailClicked] = useState(false);

  // Handlers to toggle button states
  const handleAboutMeClickButton = () => {
    setAboutMeClicked(true);
  };

  const handleContactMeClickButton = () => {
    setContactMeClicked(true);
  };

  const handleClose = () => {
    setGmailClicked(false)
  }

  const handleOpen = () => {
    setGmailClicked(true);
    copyGmailToClipBoard()

    setTimeout(() => {
      setGmailClicked(false);
    }, 700);
  };

  return (
    <Grid container style={{ minHeight: '100vh', backgroundColor: '#282c34' }}>

      {/* Left Side */}
      <Grid item xs={12} md={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box textAlign="center" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
          <Avatar
            alt="Carlos Beiramar"
            src={profileImage}
            className="avatar"
            sx={{ width: 250, height: 250, margin: '0 auto', marginBottom: 3 }}
          />
          <Typography variant='h3' component="h3" color="white" gutterBottom >
            <WorkIcon fontSize='large' sx={{ verticalAlign: 'middle', marginRight: 0.25 }} /> Software Engineer
          </Typography>
          <Box>
            <Typography variant='h4' component='h4' color='white' gutterBottom>
              <PersonIcon fontSize='large' sx={{ verticalAlign: 'middle', marginRight: 0.25 }}/> Carlos Beiramar
            </Typography>
          </Box>
          <Box color='white'>
            <GitHubIcon fontSize='large' sx={{ verticalAlign: 'middle', marginRight: 1, cursor: 'pointer' }} onClick={openGithubProfile}/>
            <LinkedInIcon fontSize='large' sx={{ verticalAlign: 'middle', marginRight: 1, cursor: 'pointer' }}  onClick={openLinkedProfile}/>
            <MailIcon fontSize='large' sx={{ verticalAlign: 'middle', cursor: 'pointer' }} onClick={handleOpen}/>
            <Dialog open={gmailClicked} onClose={handleClose}>
              <DialogContent>
                Copied to clipboard.
              </DialogContent>
            </Dialog>
          </Box>
        </Box>
      </Grid>

      {/* Right Side */}
      <Grid item xs={12} md={6} style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 40 }}>
        <Button
          variant="outlined"
          sx={{
            width: '200px',
            height: '60px',
            fontSize: '18px',
            transition: 'transform 0.5s ease-in-out',
            transform: contactMeClicked ? 'translateY(400px)' : 'translateY(0)',
            opacity: aboutMeClicked ?  0 : 1
          }}
          onClick={handleAboutMeClickButton}
        >
          About Me
        </Button>
        <Button
          variant="outlined"
          sx={{
            width: '200px',
            height: '60px',
            fontSize: '18px',
            transition: 'transform 0.5s ease-in-out',
            transform: aboutMeClicked ? 'translateY(300px)' : 'translateY(0)', // Slide down effect
            opacity: contactMeClicked ? 0 : 1
          }}
          onClick={handleContactMeClickButton}
        >
          Contact Me
        </Button>
      </Grid>
    </Grid>
  );
}

export default App;