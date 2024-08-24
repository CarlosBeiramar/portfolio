import React, { useState } from 'react';
import './App.css';
import { Grid, Typography, Box, Avatar, Dialog, DialogContent, useMediaQuery } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonIcon from '@mui/icons-material/Person';
import profileImage from './assets/circule_me.jpg';
import CardGallery from './CardGallery.js';

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
  const [gmailClicked, setGmailClicked] = useState(false);
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));


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
    <Grid container style={{ minHeight: '100vh', backgroundColor: '#001524', overflow: 'hidden' }}>

      {/* Left Side */}
      <Grid item xs={12} md={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box textAlign="center" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
          <Avatar
            alt="Carlos Beiramar"
            src={profileImage}
            className="avatar"
            sx={{ width: 250, height: 250, margin: '0 auto', marginBottom: 3, marginTop: isMobile ? '5vh':'0vh' }}
          />
          <Typography variant= 'h5'  component="h3" color="white" gutterBottom >
            <WorkIcon fontSize='medium' sx={{ verticalAlign: 'middle', marginRight: 0.25 }} /> Software Engineer
          </Typography>
          <Box>
            <Typography variant='h5' component='h4' color='white' gutterBottom>
              <PersonIcon fontSize='medium' sx={{ verticalAlign: 'middle', marginRight: 0.25 }}/> Carlos Beiramar
            </Typography>
          </Box>
          <Box color='white'>
            <GitHubIcon fontSize='medium' sx={{ verticalAlign: 'middle', marginRight: 1, cursor: 'pointer' }} onClick={openGithubProfile}/>
            <LinkedInIcon fontSize='medium' sx={{ verticalAlign: 'middle', marginRight: 1, cursor: 'pointer' }}  onClick={openLinkedProfile}/>
            <MailIcon fontSize='medium' sx={{ verticalAlign: 'middle', cursor: 'pointer' }} onClick={handleOpen}/>
            <Dialog open={gmailClicked} onClose={handleClose}>
              <DialogContent>
                Copied to clipboard.
              </DialogContent>
            </Dialog>
          </Box>
        </Box>
      </Grid>

      {/* Right Side */}
      <Grid item xs={12} md={6} style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <CardGallery/>
      </Grid>
    </Grid>
  );
}

export default App;
