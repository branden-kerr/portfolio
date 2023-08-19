import './App.css';
import svgBackground from './images/svgBackground.svg';
import displayPhoto from './images/displayPhoto.jpg';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import React from 'react';
import { Chat, animalDictionary, dogFacts, hotelLanding, realtor, writerWebsite } from './images/index';

function App() {

  const projects = [
    { image: Chat, link: 'https://chat-app-123-a8f46e64672a.herokuapp.com/' },
    { image: writerWebsite, link: 'https://writer-website-9dc558f60089.herokuapp.com/' },
    { image: dogFacts, link: 'https://materialui-firebase-react-9ebefdc4e5dc.herokuapp.com/' },
    { image: animalDictionary, link: 'https://animal-information-efd0a1b671a2.herokuapp.com/' },
    { image: hotelLanding, link: 'https://g93264.github.io/Proof-of-Concept-Landing-Page/' },
    { image: realtor, link: 'https://css-sass-realtor-site-df768e8d6de9.herokuapp.com/' },
  ];

  const HeroContainer = styled('div')({
    gridRow: '1 / 2',
    gridColumn: '1 / -1',
    background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${svgBackground})`,
    backgroundSize: 'cover',
    gridColumn: '1 / -1',
    display: 'grid',
    gridTemplateColumns: '25% repeat(8, 1fr) 25%',
  });

  const HeroContent = styled('div')({
    display: 'flex',
    alignItems: 'center',
    borderRadius: '10px',
    justifyContent: 'space-between',
    gridColumn: '2 / 10',

  });

  const ProfileImage = styled('img')({
    width: '200px',
    height: '200px',
    borderRadius: '5px',
    filter: 'brightness(94%) saturate(0%)',
    objectFit: 'cover',
    marginBottom: '1rem',
    borderRadius: '50%',
    borderImage: 'linear-gradient(#ffa600, #73ff00) 30',
    borderWidth: '4px',
    borderStyle: 'solid',
    radius: '50%',
    border: '2.5px solid white',
    // background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #590052, #015667) border-box',
    // border: '2px solid transparent',
    transform: 'translateY(-15%)',
  });

  const ProjectImage = styled('div')({
    backgroundColor: 'lightgray',
    borderRadius: '5px',
    height: '500px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
  });

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '25% 50% 25%',
      gridTemplateRows: '85vh 1fr 70vh',
    }}>
      {/* section-1 start */}
      <HeroContainer>
        <HeroContent>
          <ProfileImage src={displayPhoto} alt="Profile" />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              // backgroundColor: 'orange',
            }}
          >
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              style={{
                fontFamily: 'Zilla Slab',
                fontSize: '55px',
                fontWeight: 700,
                color: 'white',
                letterSpacing: '6px',
                background: '-webkit-linear-gradient(right, #9766EF, #1EA5CB)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Hello, I'm Branden,
            </Typography>
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              style={{
                fontFamily: 'Zilla Slab',
                fontSize: '55px',
                fontWeight: 700,
                color: '#ffff',
                letterSpacing: '6px',
                // background: '-webkit-linear-gradient(right, #9766EF, #1EA5CB)',
                // webkitBackgroundClip: 'text',
                // webkitTextFillColor: 'transparent',
              }}
            >
              full stack developer
            </Typography>
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              style={{
                fontFamily: 'Chivo',
                fontSize: '1rem',
                fontWeight: 400,
                color: '#797979',
                letterSpacing: '3px'
              }}
            >
              Full Stack Developer
            </Typography>

          </div>
        </HeroContent>
      </HeroContainer>
      {/* section-1 end */}
      <div
        style={{
          gridRow: '2 / 3',
          gridColumn: '1 / -1',
          padding: '10% 25%',
          backgroundColor: 'rgb(2, 28, 53)',
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: '3rem',
        }}
      >
        {projects.map((project, index) => (
          <a href={project.link} target="_blank" rel="noopener noreferrer" key={index}>
            <ProjectImage
              style={{
                backgroundImage: `url(${project.image})`,
              }}
            ></ProjectImage>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;