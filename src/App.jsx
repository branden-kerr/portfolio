/* eslint-disable */
import "./App.css";
import svgBackground from "./images/svgBackground.svg";
import displayPhoto from "./images/displayPhoto.jpg";
import { lineHeight, styled } from "@mui/system";
import { Button, Typography, keyframes } from "@mui/material";
import React, { useState } from "react";

import {
  Chat,
  animalDictionary,
  dogFacts,
  hotelLanding,
  realtor,
  writerWebsite,
  firebaseSvg,
  expressSvg,
  rubySvg,
  typescriptSvg,
  seoSvg,
  materialSvg,
  mongodbSvg,
  photoshopSvg,
  illustratorSvg,
  cacheSvg,
  serverlessSvg,
} from "./images/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faSass,
  faHtml5,
  faReact,
  faAngular,
  faJava,
  faAws,
  faFigma,
  faGoogle,
  faGit,
  faNodeJs,
  faWordpress,
  faBootstrap,
  faSquareJs,
  faGithub,
  faLinkedin,
  faYoutube,
  // prettier-ignore
  faStar,
} from "./fontAwesomeIcons";

function App() {
  const skills = [
    { name: "JavaScript", icon: faSquareJs, isFontAwesome: true },
    { name: "Angular", icon: faAngular, isFontAwesome: true },
    { name: "React", icon: faReact, isFontAwesome: true },
    { name: "TypeScript", icon: typescriptSvg, isFontAwesome: false },
    { name: "Git", icon: faGit, isFontAwesome: true },
    { name: "Google Cloud Platform", icon: faGoogle, isFontAwesome: true },
    { name: "Ruby", icon: rubySvg, isFontAwesome: false },
    { name: "Mongodb", icon: mongodbSvg, isFontAwesome: false },
    { name: "Java", icon: faJava, isFontAwesome: true },
    { name: "Firebase", icon: firebaseSvg, isFontAwesome: false },
    { name: "AWS", icon: faAws, isFontAwesome: true },
    { name: "HTML", icon: faHtml5, isFontAwesome: true },
    { name: "Figma", icon: faFigma, isFontAwesome: true },
    { name: "Sass", icon: faSass, isFontAwesome: true },
    { name: "Node.js", icon: faNodeJs, isFontAwesome: true },
    { name: "Wordpress", icon: faWordpress, isFontAwesome: true },
    { name: "Bootstrap", icon: faBootstrap, isFontAwesome: true },
    { name: "Express.js", icon: expressSvg, isFontAwesome: false },
    { name: "CSS", icon: faCss3Alt, isFontAwesome: true },
    { name: "SEO", icon: seoSvg, isFontAwesome: false },
    { name: "Material UI", icon: materialSvg, isFontAwesome: false },
    { name: "Mongoose", icon: "", isFontAwesome: false },
    { name: "Photoshop", icon: photoshopSvg, isFontAwesome: false },
    { name: "Illustrator", icon: illustratorSvg, isFontAwesome: false },
    { name: "Caching strategies", icon: cacheSvg, isFontAwesome: false },
    {
      name: "Serverless Architecture",
      icon: serverlessSvg,
      isFontAwesome: false,
    },
  ];

  const VideosTwo = [
    {
      name: "JavaScript",
      link: "Learn Big O in Three Minutes: Analogies & Animations",
      icon: faYoutube,
      isFontAwesome: true,
    },
  ];

  const [videoLoaded, setVideoLoaded] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handlePlayClick = (index) => {
    const updatedLoaded = [...videoLoaded];
    updatedLoaded[index] = true;
    setVideoLoaded(updatedLoaded);
  };

  const videos = [
    { id: "AuNnLvHV3kg", title: "Video 1" },
    { id: "dQce89KbVY8", title: "Video 2" },
    { id: "TJ02GaLvwW8", title: "Video 3" },
    { id: "rebKkDZ8mlI", title: "Video 4" },
    { id: "kxDOe2Y4LE4", title: "Video 5" },
  ];

  const projects = [
    {
      name: "Chat App",
      image: Chat,
      link: "https://phpstack-1349599-5020362.cloudwaysapps.com/",
      keyTechnologies: [
        "React",
        "Typescript",
        "Express.js",
        "Material UI",
        "Firebase",
      ],
      description:
        "A user authenticated, firebase backend, chat app built with react and material UI. Users can create chat rooms and send messages to other users in real time.",
      githubLink: "https://github.com/G93264/Chat",
    },
    {
      name: "Writer Website",
      image: writerWebsite,
      link: "https://writer-website-9dc558f60089.herokuapp.com/",
      keyTechnologies: ["MongoDb", "Express", "Mongoose", "SASS", "EJS"],
      description:
        "A short story sharing site with a custom authentication system built in express, using mongoDb as the database.",
      githubLink: "https://github.com/G93264/Writers-Website",
    },
    {
      name: "Dog Facts React App",
      image: dogFacts,
      link: "https://phpstack-1349599-5026408.cloudwaysapps.com/",
      keyTechnologies: ["React", "ReactFire", "Firebase", "Material UI"],
      description:
        "This website is built with React and Material UI and utilizes Firebase as the backend. It generates unique and interesting facts about our furry friends, providing users with an engaging experience.",
      githubLink: "https://github.com/G93264/Dog-Facts-React-App",
    },
    {
      name: "Animal Dictionary",
      image: animalDictionary,
      link: "https://animal-information-efd0a1b671a2.herokuapp.com/",
      keyTechnologies: ["Javascript", "HTML", "CSS", "Node.js"],
      description:
        "Dive into the captivating world of animals with this interactive front-end website. Explore a vast collection of species and their fascinating details. Powered by JavaScript, HTML, and CSS.",
      githubLink: "https://github.com/G93264/Animal-Dictionary",
    },
    {
      name: "Hotel Landing Page",
      image: hotelLanding,
      link: "https://branden-kerr.github.io/Proof-of-Concept-Landing-Page/",
      keyTechnologies: ["HTML", "SASS"],
      description:
        "A fully responsive landing page for a hotel built with HTML and SASS, with animations and transitions.",
      githubLink:
        "https://branden-kerr.github.io/Proof-of-Concept-Landing-Page",
    },
    {
      name: "Realtor Site",
      image: realtor,
      link: "https://css-sass-realtor-site-df768e8d6de9.herokuapp.com/",
      keyTechnologies: ["jQuery", "HTML", "SASS", "Javascript", "Node.js"],
      description:
        "Example real estate landing page, with css animations, and jquery functionality.",
      githubLink: "https://github.com/G93264/Realtor",
    },
  ];

  const ContainerDiv = styled("div")({
    display: "grid",
    gridTemplateColumns: "15% 70% 15% auto",
    gridTemplateRows: "85vh 1fr 100vh auto",

    "@media (max-width: 882px)": {
      gridTemplateRows: "110vh 1fr 100vh auto",
    },
    "@media (max-width: 605px)": {
      gridTemplateRows: "110vh 1fr 130vh auto",
    },
    "@media (max-width: 450px)": {
      gridTemplateRows: "110vh 1fr auto auto",
    },
  });

  const HeroContainer = styled("div")({
    gridRow: "1 / 2",
    gridColumn: "1 / -1",
    background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${svgBackground})`,
    backgroundSize: "cover",
    display: "grid",
    gridTemplateColumns: "15% repeat(8, 1fr) 15%",
    "@media (max-width: 882px)": {
      dispaly: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });

  const HeroContent = styled("div")({
    display: "flex",
    alignItems: "center",
    borderRadius: "10px",
    justifyContent: "space-evenly",
    gridColumn: "2 / 10",
    padding: "0 5%",
    // backgroundColor: "rgba(100, 150, 80, 0.5)",
    "@media (max-width: 882px)": {
      flexDirection: "column",
      height: "85%",
    },
  });

  const HeroText = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    // red
    // backgroundColor: "rgba(175, 100, 80, 0.5)",
    "@media (max-width: 882px)": {
      alignItems: "center",
    },
  });

  const ButtonContainer = styled("div")({
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "50%",
    margin: "0 auto",
    "@media (max-width: 1129px)": {
      flexDirection: "column",
    },
  });

  const ProfileImage = styled("img")({
    minWidth: "200px",
    height: "200px",
    borderRadius: "50%",
    filter: "brightness(94%) saturate(0%)",
    objectFit: "cover",
    marginBottom: "1rem",
    borderImage: "linear-gradient(#ffa600, #73ff00) 30",
    borderWidth: "4px",
    borderStyle: "solid",
    radius: "50%",
    border: "2.5px solid white",
    // background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #590052, #015667) border-box',
    // border: '2px solid transparent',
    "@media (max-width: 882px)": {
      minWidth: "260px",
      height: "260px",
      transform: "translateY(0)",
    },
    "@media (max-width: 428px)": {
      minWidth: "230px",
      height: "230px",
    },
  });

  const SectionOne = styled("div")({
    gridRow: "2 / 3",
    gridColumn: "1 / -1",
    padding: "10% 15%",
    backgroundColor: "rgb(2, 28, 53)",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "3rem",
    "@media (max-width: 1288px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
    "@media (max-width: 1500px)": {
      padding: "10% 15%",
    },
    "@media (max-width: 660px)": {
      padding: "10% 10%",
    },
    "@media (max-width: 428px)": {
      padding: "10% 6%",
    },
  });
  // Projects
  const ProjectContainer = styled("div")({
    backgroundColor: "#112C47",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "inset 0 0 15px rgba(255, 255, 255, 0.38)",
  });

  const ProjectLinkContainer = styled("a")({
    width: "100%",
    display: "block",
  });

  const ProjectImage = styled("img")({
    width: "100%",
    height: "auto", // Keeps the aspect ratio intact
    objectFit: "cover", // Ensures the image covers the area without stretching

    backgroundColor: "#556ba7",
    borderRadius: "5px",
    backgroundSize: "cover",

    cursor: "pointer",
    transition: "transform 0.3s ease",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    border: "2px solid white",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    },
  });

  const ProjectDescriptionContainer = styled("div")({
    height: "30%",
    width: "100%",
    padding: "4% 7%",
    display: "grid",
    gridTemplateColumns: "30% 60%",
    gridTemplateRows: "100%",
    color: "white",
    fontFamily: "Chivo",

    fontSize: "18px",
    "@media (max-width: 882px)": {
      fontSize: "13px",
    },
    "@media (max-width: 430px)": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "50%",
      fontSize: "18px",
    },
  });

  const KeyTechContainer = styled("div")({
    gridColumn: "1 / 2",
    gridRow: "1 / 2",
  });

  const TechsListed = styled("div")({
    marginLeft: "5px",
    marginTop: "3px",
  });

  const Tech = styled("div")({
    whiteSpace: "nowrap",
    display: "block",
    fontWeight: 400,

    "@media (max-width: 1400px)": {
      fontSize: "14px",
      lineHeight: "20px",
    },
  });

  const DescriptionTitle = styled("div")({
    fontSize: "1.3rem",
    marginBottom: "12px",
    letterSpacing: "1.3px",
    textDecoration: "underline",
    fontWeight: 700,
    "@media (max-width: 882px)": {
      fontSize: "14px",
    },
    "@media (max-width: 430px)": {
      fontSize: "18px",
      fontWeight: 800,
    },
  });

  const DescriptionContainer = styled("div")({
    gridColumn: "2 / 3",
    gridRow: "1 / 2",
    padding: "0 5%",
    "@media (max-width: 430px)": {
      display: "none",
    },
  });

  const DescriptionContent = styled("div")({
    marginTop: "3px",
    marginLeft: "5px",
    fontWeight: 400,
    "@media (max-width: 1400px)": {
      fontSize: "14px",
      lineHeight: "20px",
    },
  });

  const GitColumn = styled("div")({
    gridColumn: "3 / 4",
    gridRow: "1 / 2",
    color: "white",
    fontFamily: "Chivo",

    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    "@media (max-width: 430px)": {
      alignSelf: "flex-end",
    },
  });
  // End Projects

  const SectionTwo = styled("div")({
    gridRow: "3 / 4",
    gridColumn: "1 / -1",
    padding: "10% 22%",
    backgroundColor: "#FF3CAC",
    backgroundImage:
      "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width: 1000px)": {
      padding: "6% 10%",
    },
    "@media (max-width: 605px)": {
      padding: "4% 7%",
    },
    "@media (max-width: 500px)": {
      padding: "7vh 4%",
    },
  });

  // Skills

  const StyledSkillContainer = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    alignContent: "space-evenly",

    gap: "1.5rem",
    "@media (max-width: 500px)": {
      // gap: "0px"
    },
  });

  const StyledSkill = styled("div")({
    padding: "7px 40px",
    margin: "0 13px",
    borderRadius: "50px",
    backgroundColor: "white",
    display: "flex",
    cursor: "default",
    alignItems: "center",
    transition: "all 0.2s ease",
    "&:hover": {
      transform: "scale(1.3)",
      backgroundColor: "#88ccff",
    },
    "@media (max-width: 450px)": {
      padding: "7px 30px",
    },
  });

  const growShrink = keyframes({
    "0%": { transform: "scale(1)" },
    "50%": { transform: "scale(1.1)" },
    "100%": { transform: "scale(1)" },
  });

  const GitHubLink = styled("a")({
    fontSize: "35px",
    color: "white",
    transition: "color 0.5s ease",
    borderRadius: "150px",
    "&:hover": {
      color: "#8ff8ff",
      animation: `${growShrink} 1.5s ease-in-out infinite`,
    },
  });

  const SectionThree = styled("div")({
    gridRow: "4 / 5",
    gridColumn: "1 / -1",
    padding: "8% 15%",
    backgroundColor: "#021C35",
    // backgroundImage:
    //   "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "3rem",
    "@media (max-width: 1000px)": {
      padding: "6% 10%",
    },
    "@media (max-width: 605px)": {
      padding: "4% 7%",
    },
    "@media (max-width: 400px)": {
      padding: "900px",
    },
  });

  const SectionHeading = styled("h2")({
    fontSize: "36px",
    marginBottom: "2rem",
    fontFamily: "Zilla Slab",
    color: "white",
    cursor: "default",
  });

  const FeaturedVideo = styled("div")({
    width: "100%",
    display: "flex",
    alignItems: "center",

    padding: "10px",
    gap: "3rem",
  });

  const VideoIframe = styled("div")({
    position: "relative",
    width: "50%",
    aspectRatio: "1901 / 1071",
    borderRadius: "15px",
    border: "2px solid white",
    overflow: "hidden",
  });

  const VideoTitleFeature = styled("a")({
    color: "#c2c2c2",
    fontSize: "1.3rem",
    fontFamily: "Chivo",
    display: "inline-block",
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
            color: "white"
    },
  });

  const VideoTitle = styled("a")({
    color: "#c2c2c2",
    fontSize: "1rem",
    fontFamily: "Chivo",
    display: "inline-block",
    transition: "all 0.3s ease",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
      color: "white"
    },
  });

  // const SectionThreeB = styled("div")({
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   width: "100%",
  //   backgroundColor: "#021C35",
  //   gap: "3rem",
  // });

  // const VideoCardContainer = styled("div")({
  //   display: "flex",
  //   flexWrap: "wrap",
  //   gap: "1rem",
  //   justifyContent: "flex-start",
  //   width: "100%",
  // });

  // const VideoCard = styled("div")({
  //   width: "30%",
  //   position: "relative",
  //   aspectRatio: "1300 / 729",
  //   border: "1px solid white",
  //   borderRadius: "2px",

  //   overflow: "hidden",
  //   backgroundColor: "#333",
  //   cursor: "pointer",
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   marginBottom: "1rem",
  // });

  // const PlayButton = styled("button")({
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   backgroundColor: "rgba(0, 0, 0, 0.7)",
  //   color: "white",
  //   fontSize: "1.5rem",
  //   padding: "10px 20px",
  //   border: "none",
  //   borderRadius: "5px",
  //   cursor: "pointer",
  //   zIndex: 10,
  // });

  // const VideoIframe2 = styled("iframe")({
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   width: "100%",
  //   height: "100%",
  //   border: "none",
  // });

  return (
    <ContainerDiv>
      <HeroContainer>
        <HeroContent>
          <ProfileImage src={displayPhoto} alt="Profile" />
          <HeroText>
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              style={{
                fontFamily: "Zilla Slab",
                fontSize: "55px",
                fontWeight: 700,
                color: "white",
                letterSpacing: "6px",
                background: "-webkit-linear-gradient(right, #9766EF, #1EA5CB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Hello, I&apos;m Branden,
            </Typography>
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              style={{
                fontFamily: "Zilla Slab",
                fontSize: "55px",
                fontWeight: 700,
                color: "#ffff",
                letterSpacing: "6px",
              }}
            >
              full stack developer.
            </Typography>
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              style={{
                fontFamily: "Chivo",
                fontSize: "1rem",
                fontWeight: 400,
                color: "#797979",
                letterSpacing: "1px",
              }}
            >
              Committed to using technology to solve complex problems
            </Typography>
            <ButtonContainer>
              <Button
                variant="contained"
                color="primary"
                href="https://github.com/branden-kerr"
                target="_blank"
                style={{
                  marginTop: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesomeIcon
                  style={{
                    marginRight: "10px",
                    fontSize: "18px",
                  }}
                  icon={faGithub}
                />
                <span>Github</span>
              </Button>
              <Button
                variant="contained"
                color="primary"
                href="https://www.linkedin.com/in/branden-kerr-b610011b9/"
                target="_blank"
                style={{
                  marginTop: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesomeIcon
                  style={{
                    marginRight: "10px",
                    fontSize: "18px",
                  }}
                  icon={faLinkedin}
                />
                <span>LinkedIn</span>
              </Button>
            </ButtonContainer>
          </HeroText>
        </HeroContent>
      </HeroContainer>
      <SectionOne>
        {projects.map((project, index) => (
          <ProjectContainer key={index}>
            <ProjectLinkContainer
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectImage src={project.image} alt={project.name} />
            </ProjectLinkContainer>
            <ProjectDescriptionContainer>
              <KeyTechContainer>
                <div>
                  <DescriptionTitle>Technologies</DescriptionTitle>
                  <TechsListed>
                    {project &&
                      project.keyTechnologies &&
                      project.keyTechnologies.map((technology, index) => (
                        <Tech>&gt; {technology}</Tech>
                      ))}
                  </TechsListed>
                </div>
              </KeyTechContainer>
              <DescriptionContainer>
                <div>
                  <DescriptionTitle>Description</DescriptionTitle>
                  <DescriptionContent>{project.description}</DescriptionContent>
                </div>
              </DescriptionContainer>
              <GitColumn>
                <GitHubLink
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </GitHubLink>
              </GitColumn>
            </ProjectDescriptionContainer>
          </ProjectContainer>
        ))}
      </SectionOne>
      <SectionTwo>
        <h2
          style={{
            fontSize: "36px",
            marginBottom: "2rem",
            fontFamily: "Zilla Slab",
            color: "white",
            cursor: "default",
          }}
        >
          SKILLS
        </h2>

        <StyledSkillContainer>
          {skills.map((skill, index) => (
            <StyledSkill key={index}>
              {skill.isFontAwesome ? (
                <FontAwesomeIcon
                  style={{
                    transform: "translateX(-10px)",
                    display: "inline-block",
                  }}
                  // @ts-ignore
                  icon={skill.icon}
                />
              ) : (
                <img
                  style={{
                    height: "18px",
                    width: "18px",
                    transform:
                      skill.name === "Express.js"
                        ? "translateX(-15px) scale(1.9)"
                        : "translateX(-10px)",
                    filter: "saturate(0%)",

                    display: skill.name === "Mongoose" ? "none" : null,
                  }}
                  // @ts-ignore
                  src={skill.icon}
                />
              )}
              <p
                style={{
                  fontSize: "19px",
                }}
              >
                {skill.name}
              </p>
            </StyledSkill>
          ))}
        </StyledSkillContainer>
      </SectionTwo>

      <SectionThree>
        <SectionHeading>Other Work/Misc</SectionHeading>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            justifyContent: "space-between",
            alignItems: "center",
            width: "60vw",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon
                style={{
                  transform: "translateX(-10px)",
                  display: "inline-block",
                  color: "white",
                  fontSize: "36px",
                }}
                // @ts-ignore
                icon={faYoutube}
              />

              <VideoTitleFeature href="https://www.youtube.com/watch?v=5SXD_Y8KeKM" target="_blank">
                Learn Big O in Three Minutes: Analogies & Animations
              </VideoTitleFeature>
            </div>
          </div>

          <div 
          style={{
            gap: "40px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around"
          }}
          >
            <VideoTitle href="https://www.youtube.com/watch?v=AuNnLvHV3kg" target="_blank">
            Memo in React in Five minutes
            </VideoTitle>
            <VideoTitle href="https://www.youtube.com/watch?v=dQce89KbVY8" target="_blank">
            Learn React's UseCallback in less than Seven minutes
            </VideoTitle>
            <VideoTitle href="https://www.youtube.com/watch?v=TJ02GaLvwW8" target="_blank">
            Boost Your Web Performance with Throttle
            </VideoTitle>
            <VideoTitle href="https://www.youtube.com/watch?v=rebKkDZ8mlI" target="_blank">
            Solving LeetCode 295: Find Median from Data Stream in TypeScript
            </VideoTitle>
            <VideoTitle href="https://www.youtube.com/watch?v=kxDOe2Y4LE4&t=10s" target="_blank">
            Mastering Debounce: Optimizing Performance in JavaScript
            </VideoTitle>
          </div>
        </div>

        {/* <FeaturedVideo>
          <VideoIframe>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/5SXD_Y8KeKM?autoplay=1&mute=1&loop=1&playlist=5SXD_Y8KeKM"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                objectFit: "cover", // Make sure the video covers the entire area
              }}
            ></iframe>
          </VideoIframe>
          <div
            style={{
              width: "50%",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            }}
          >
            <h2
              style={{
                fontFamily: "Chivo",
                fontWeight: "700",
                fontSize: "1.2rem",
                color: "white",
                marginBottom: "10px",
              }}
            >
              What Inspired Me
            </h2>
            <p
              style={{
                fontFamily: "Chivo",
                fontWeight: "400",
                fontSize: "1rem",
                color: "white",
                lineHeight: "1.6",
                marginBottom: "20px",
              }}
            >
              I created this project to both document my learning journey and
              share it with others. The goal was to deliver concise, valuable
              content that simplifies complex topics. Despite not promoting the
              video it was still able to gain slight traction, which reinforced
              the idea that quality can make a big difference. The plan in the
              future is to continue making videos, both for personal interest
              and as a mechanism to boil down complex topics into digestible
              content.
            </p>
          </div>
        </FeaturedVideo> */}
      </SectionThree>
    </ContainerDiv>
  );
}
export default App;
