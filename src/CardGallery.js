import React, { useState, useRef } from 'react';
import { Grid, Card, CardContent, Typography, Box, Button } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import SchoolIcon from '@mui/icons-material/School';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DownloadIcon from '@mui/icons-material/Download';

const CardGallery = () => {
  const containerRef = useRef(null);
  const [showIssuuDates, setShowIssuuDates] = useState(false)
  const [showSteelEyeDates, setShowSteelEyeDates] = useState(false)
  const [showCapgeminiDates, setShowCapgeminiDates] = useState(false)

//   const toggleDatesVisibility = () => {
//     setShowDates(prevShowDates => !prevShowDates);
//   };


  const toggleDatesVisibility = (job) => {
    switch (job) {
        case 'issuu':
            setShowIssuuDates(prev => !prev);
            break;
        case 'steeleye':
            setShowSteelEyeDates(prev => !prev)
            break;
        case 'capgemini':
            setShowCapgeminiDates(prev => !prev)
            break;
    }
  }

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const cards = [
    {
      title: (
        <Typography variant='h4' component="h3" color="white" gutterBottom >
            About Me
        </Typography>
      ),
      content: (
        <>
          <Typography variant="body1" paragraph>
            As a Software Engineer, I am eager to embrace new challenges and continuously learn and grow in the field.
          </Typography>
          <Typography variant="body1" paragraph>
            I am proficient in developing, testing, and deploying software applications, with a solid understanding of object-oriented programming and software development best practices.
          </Typography>
          <Typography variant="body1" paragraph>
            I have demonstrated the ability to quickly learn and adapt to new technologies. In my previous experience, I collaborated with international teams, which has enriched my professional growth and broadened my perspective.
          </Typography>
        </>
      )
    },
    {
      title: (
        <Typography variant='h4' component="h3" color="white" gutterBottom >
            <SchoolIcon fontSize='large' sx={{ verticalAlign: 'middle', marginRight: 0.25 }} /> Education
        </Typography>
      ),
      content: (
        <>
          <Typography variant="body1" paragraph>
            <strong>Master's of Software Engineering</strong><br />
            Polythecnical Institute of Cávado e Ave
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Bachelor's Degree in Computer Science</strong><br />
            University of Minho
          </Typography>
        </>
      )
    },
    {
      title: (
        <Typography variant='h4' component="h3" color="white" gutterBottom >
            Work Experience
        </Typography>
      ),
      content: (
        <>
            <Typography variant='body1' paragraph sx={{ display: 'flex', flexDirection: 'row'}}>
                {!showIssuuDates && <ArrowRightIcon sx={{ cursor: 'pointer' }} onClick={() => toggleDatesVisibility('issuu')}/>}
                {showIssuuDates && <ArrowDropDownIcon sx={{ cursor: 'pointer' }} onClick={() => toggleDatesVisibility('issuu')}/>}
                <Box sx={{ fontWeight: 'bold' }}><strong>Junior Software Engineer</strong> @ ISSUU
                    {showIssuuDates && <Typography variant='body2' sx={{ marginLeft: 2, position: 'absolute'}}>March 2024 - Present</Typography>}
                </Box>
            </Typography>
            <Typography variant='body1' paragraph sx={{ display: 'flex', flexDirection: 'row'}}>
                {!showSteelEyeDates && <ArrowRightIcon sx={{ cursor: 'pointer' }} onClick={() => toggleDatesVisibility('steeleye')}/>}
                {showSteelEyeDates && <ArrowDropDownIcon sx={{ cursor: 'pointer' }} onClick={() => toggleDatesVisibility('steeleye')}/>}
                <Box sx={{ fontWeight: 'bold' }}><strong>Data Platform Engineer</strong> @ SteelEye
                    {showSteelEyeDates && <Typography variant='body2' sx={{ marginLeft: 2, position: 'absolute'}}>Jun. 2023 - Oct. 2023</Typography>}
                </Box>
            </Typography>
            <Typography variant='body1' paragraph sx={{ display: 'flex', flexDirection: 'row'}}>
                {!showCapgeminiDates && <ArrowRightIcon sx={{ cursor: 'pointer' }} onClick={() => toggleDatesVisibility('capgemini')}/>}
                {showCapgeminiDates && <ArrowDropDownIcon sx={{ cursor: 'pointer' }} onClick={() => toggleDatesVisibility('capgemini')}/>}
                <Box sx={{ fontWeight: 'bold' }}><strong>Embedded Software Engineer</strong> @ Capgemini
                    {showCapgeminiDates && <Typography variant='body2' sx={{ marginLeft: 2, position: 'absolute'}}>Jun. 2022 - Jun. 2023</Typography>}
                </Box>
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '15vh'}}>
                <Button variant="outlined" href="./CarlosBeiramar_CV.pdf" download>Curriculum <DownloadIcon sx={{ marginLeft: '2px'}}/></Button>
            </Box>
        </>
      )
    }
  ];

  const handleNextCard = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <Box
      sx={{
        overflowX: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Grid
        container
        ref={containerRef}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          overflowX: 'auto',
          gap: 3,
          padding: 2,
          scrollBehavior: 'smooth',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Card sx={{ position: 'relative',  width: 500, height: 550, backgroundColor: '#282c34', color: 'white', borderRadius: '16px', boxShadow: "3px 3px 3px 3px black" }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '2vh', paddingTop: '5vh' }}>
              {cards[currentCardIndex].title}
            </Box>
            <Box sx={{ marginRight: '5vh', marginLeft: '5vh', display: 'flex', flexDirection: 'column', gap: 2}}>
                {cards[currentCardIndex].content}
            </Box>
          </CardContent>
        </Card>
        <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            {currentCardIndex > 0 && (
                <>
                    <ArrowCircleLeftIcon fontSize='large' sx={{ verticalAlign: 'middle', marginRight: 0.25, color: 'white', cursor: 'pointer' }} onClick={handlePreviousCard} />
                </>
            )}
            {currentCardIndex < 2 && (
                <>
                    <ArrowCircleRightIcon fontSize='large' sx={{ verticalAlign: 'middle', color: 'white', cursor: 'pointer' }} onClick={handleNextCard} />
                </>
            )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardGallery;