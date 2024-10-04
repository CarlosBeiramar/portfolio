import React, { useState } from 'react';
import './App.css';
import { Grid, Typography, Box, Avatar, Dialog, DialogContent, useMediaQuery, Button } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonIcon from '@mui/icons-material/Person';
import profileImage from './assets/circule_me.jpg';
import CardGallery from './CardGallery.js';
import TypingAnimation from './components/TypingAnimation.tsx';
import { IconCloud } from './components/IconCloud.tsx';

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
  const [aboutMeClicked, setAboutMeClicked] = useState(false);


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

  const iconSlugs = [
    "python",
    "java",
    "git",
    "github",
    "docker",
    "visualstudiocode",
    "postgresql",
    "react",
    "haskell",
    "kotlin",
    "c",
    "mongodb",
    "materialui",
    "jenkins",
    "django",
    "amazonwebservices",
    "figma",
    "javascript",
    "elixir",
    "githubactions"
  ];

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
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1}}>
              <WorkIcon fontSize='medium' sx={{ verticalAlign: 'middle', marginRight: 0.25 }} /> <TypingAnimation text="Software Engineer" duration={100} variant="h5" />
            </Box>
          </Typography>
          <Box>
            <Typography variant='h5' color='white' gutterBottom>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PersonIcon fontSize='medium' sx={{ verticalAlign: 'middle', marginRight: 0.25 }}/> <TypingAnimation text="Carlos Beiramar" duration={100} variant="h5" />
              </Box>
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
        {!aboutMeClicked && (
          <>
            <Box
              sx={{
                width: isMobile? '100%' :'80%',
                height: isMobile? '100%': '80%',
                overflow: 'hidden',
              }}
            >
              <IconCloud iconSlugs={iconSlugs} />
            </Box>
            <Box>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: '#1c5690',
                  color: 'white',
                  borderRadius: '16px',
                  borderColor: '#000',
                  paddingBottom: '1vh',
                  paddingTop: '1vh',
                  boxShadow: '5px 5px 0px #000',
                  '&:hover': {
                    color: 'white',
                    border: '2px solid #000',
                  },
                }}
                onClick={() => setAboutMeClicked(true)}
              >
                About Me
              </Button>
            </Box>
          </>
        )}
        {aboutMeClicked && (
          <Box>
            <CardGallery onClose={() => setAboutMeClicked(false)} />
          </Box>
        )}
      </Grid>
    </Grid>
  );
}

export default App;
