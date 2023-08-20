// @ts-nocheck
import "./App.css";
import svgBackground from "./images/svgBackground.svg";
import displayPhoto from "./images/displayPhoto.jpg";
import { styled } from "@mui/system";
import { Typography, Button } from "@mui/material";
import React from "react";
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
} from "./fontAwesomeIcons";

function App() {
  const skills = [
    { name: "CSS", icon: faCss3Alt, isFontAwesome: true },
    { name: "Sass", icon: faSass, isFontAwesome: true },
    { name: "JavaScript", icon: faSquareJs, isFontAwesome: true },
    { name: "Git", icon: faGit, isFontAwesome: true },
    { name: "HTML", icon: faHtml5, isFontAwesome: true },
    { name: "React", icon: faReact, isFontAwesome: true },
    { name: "Angular", icon: faAngular, isFontAwesome: true },
    { name: "Java", icon: faJava, isFontAwesome: true },
    { name: "AWS", icon: faAws, isFontAwesome: true },
    { name: "Figma", icon: faFigma, isFontAwesome: true },
    { name: "Google Cloud Platform", icon: faGoogle, isFontAwesome: true },
    { name: "Node.js", icon: faNodeJs, isFontAwesome: true },
    { name: "Wordpress", icon: faWordpress, isFontAwesome: true },
    { name: "Bootstrap", icon: faBootstrap, isFontAwesome: true },
    { name: "TypeScript", icon: typescriptSvg, isFontAwesome: false },
    { name: "Express.js", icon: expressSvg, isFontAwesome: false },
    { name: "SEO", icon: seoSvg, isFontAwesome: false },
    { name: "Firebase", icon: firebaseSvg, isFontAwesome: false },
    { name: "Ruby", icon: rubySvg, isFontAwesome: false },
    { name: "Material UI", icon: materialSvg, isFontAwesome: false },
    { name: "Mongodb", icon: mongodbSvg, isFontAwesome: false },
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

  const projects = [
    { image: Chat, link: "https://chat-app-123-a8f46e64672a.herokuapp.com/" },
    {
      image: writerWebsite,
      link: "https://writer-website-9dc558f60089.herokuapp.com/",
    },
    {
      image: dogFacts,
      link: "https://materialui-firebase-react-9ebefdc4e5dc.herokuapp.com/",
    },
    {
      image: animalDictionary,
      link: "https://animal-information-efd0a1b671a2.herokuapp.com/",
    },
    {
      image: hotelLanding,
      link: "https://g93264.github.io/Proof-of-Concept-Landing-Page/",
    },
    {
      image: realtor,
      link: "https://css-sass-realtor-site-df768e8d6de9.herokuapp.com/",
    },
  ];

  const HeroContainer = styled("div")({
    gridRow: "1 / 2",
    gridColumn: "1 / -1",
    background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${svgBackground})`,
    backgroundSize: "cover",
    display: "grid",
    gridTemplateColumns: "25% repeat(8, 1fr) 25%",
  });

  const HeroContent = styled("div")({
    display: "flex",
    alignItems: "center",
    borderRadius: "10px",
    justifyContent: "space-between",
    gridColumn: "2 / 10",
  });

  const ProfileImage = styled("img")({
    width: "200px",
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
    transform: "translateY(-15%)",
  });

  const SectionOne = styled("div")({
    gridRow: "2 / 3",
    gridColumn: "1 / -1",
    padding: "10% 25%",
    backgroundColor: "rgb(2, 28, 53)",
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gap: "3rem",
  });

  const Project = styled("div")({
    backgroundColor: "#556ba7",
    borderRadius: "5px",
    height: "500px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    cursor: "pointer",
    transition: "transform 0.3s ease",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    border: "2px solid white",

    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    },
  });

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
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "25% 50% 25%",
        gridTemplateRows: "85vh 1fr 70vh",
      }}
    >
      <HeroContainer>
        <HeroContent>
          <ProfileImage src={displayPhoto} alt="Profile" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
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
                fontFamily: "Chivo",
                fontSize: "1rem",
                fontWeight: 400,
                color: "#797979",
                letterSpacing: "3px",
              }}
            >
              Committed to using technology to solve complex problems
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href="/path_to_cv.pdf"
              download
              style={{
                marginTop: "20px",
              }}
            >
              Download CV
            </Button>
          </div>
        </HeroContent>
      </HeroContainer>
      <SectionOne>
        {projects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <Project
              style={{
                backgroundImage: `url(${project.image})`,
              }}
            ></Project>
          </a>
        ))}
      </SectionOne>
      <SectionTwo>
        <h2
          style={{
            fontSize: "36px",
            marginBottom: "2rem",
            fontFamily: "Zilla Slab",
            color: "white",
          }}
        >
          SKILLS
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            alignContent: "space-evenly",
            height: "80%",
          }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{
                padding: "7px 40px",
                margin: "0 13px",
                borderRadius: "50px",
                backgroundColor: "white",
                display: "flex",
                pointerEvents: "none",
                alignItems: "center",
              }}
            >
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
            </div>
          ))}
        </div>
      </SectionTwo>
    </div>
  );
}

export default App;
