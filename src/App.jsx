import "./App.css";
import svgBackground from "./images/svgBackground.svg";
import displayPhoto from "./images/displayPhoto.jpg";
import { styled } from "@mui/system";
import { Typography, keyframes } from "@mui/material";
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
  faGithub,
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

  const projects = [
    {
      image: Chat,
      link: "https://chat-app-123-a8f46e64672a.herokuapp.com/",
      keyTechnologies: ["React", "Typescript", "Express.js", "Material UI"],
      Description:
        "A user authenticated, firebase backen, chat app built with react and material UI. Users can create chat rooms and send messages to other users in real time.",
      githubLink: "https://github.com/G93264/Chat",
    },
    {
      image: writerWebsite,
      link: "https://writer-website-9dc558f60089.herokuapp.com/",
      keyTechnologies: ["MongoDb", "Express", "Mongoose", "SASS", "EJS"],
      Description:
        "A short story sharing site with a custom authentication system built in express, using mongoDb as the database.",
      githubLink: "https://github.com/G93264/Writers-Website",
    },
    {
      image: dogFacts,
      link: "https://materialui-firebase-react-9ebefdc4e5dc.herokuapp.com/",
      keyTechnologies: ["React", "ReactFire", "Firebase", "Material UI"],
      Description:
        "This website is built with React and Material UI and utilizes Firebase as the backend. It generates unique and interesting facts about our furry friends, providing users with an engaging experience.",
      githubLink: "https://github.com/G93264/Dog-Facts-React-App",
    },
    {
      image: animalDictionary,
      link: "https://animal-information-efd0a1b671a2.herokuapp.com/",
      keyTechnologies: ["Javascript", "HTML", "CSS"],
      Description:
        "Dive into the captivating world of animals with this interactive front-end website. Explore a vast collection of species and their fascinating details. Powered by JavaScript, HTML, and CSS.",
      githubLink: "https://github.com/G93264/Animal-Dictionary",
    },
    {
      image: hotelLanding,
      link: "https://g93264.github.io/Proof-of-Concept-Landing-Page/",
      keyTechnologies: ["HTML", "SASS"],
      Description:
        "A fully responsive landing page for a hotel built with HTML and SASS, with animations and transitions.",
      githubLink: "https://github.com/G93264/Hotel-Page/tree/main",
    },
    {
      image: realtor,
      link: "https://css-sass-realtor-site-df768e8d6de9.herokuapp.com/",
      keyTechnologies: ["jQuery", "HTML", "SASS", "Javascript", "Node.js"],
      Description:
        "Example real estate landing page, with css animations, and jquery functionality.",
      githubLink: "https://github.com/G93264/Realtor",
    },
  ];

  // 882px

  const ContainerDiv = styled("div")({
    display: "grid",
    gridTemplateColumns: "15% 70% 15%",
    gridTemplateRows: "85vh 1fr 100vh",
    "@media (max-width: 882px)": {
      gridTemplateRows: "110vh 1fr 100vh",
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
    // green
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
    transform: "translateY(-15%)",
    "@media (max-width: 882px)": {
      minWidth: "260px",
      height: "260px",
      transform: "translateY(0)",
    },
  });

  const SectionOne = styled("div")({
    gridRow: "2 / 3",
    gridColumn: "1 / -1",
    padding: "10% 25%",
    backgroundColor: "rgb(2, 28, 53)",
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gap: "3rem",
    "@media (max-width: 882px)": {
      padding: "10% 15%",
    },
  });
  // Projects
  const ProjectContainer = styled("div")({
    height: "750px",
    backgroundColor: "#112C47",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "inset 0 0 15px rgba(255, 255, 255, 0.38)",
    "@media (max-width: 882px)": {
      height: "500px",
    },
  });

  const ProjectLinkContainer = styled("a")({
    width: "100%",
    height: "70%",
    display: "block",
    "@media (max-width: 882px)": {
      height: "60%",
    },
  });

  const Project = styled("div")({
    backgroundColor: "#556ba7",
    borderRadius: "5px",
    opacity: ".5",
    backgroundSize: "cover",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
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
  });

  const KeyTechContainer = styled("div")({
    gridColumn: "1 / 2",
    gridRow: "1 / 2",
    color: "white",
    fontFamily: "Chivo",
    letterSpacing: "2px",
    // backgroundColor: "red",
  });

  const TechsListed = styled("div")({
    marginTop: "3px",
    marginLeft: "15px",
  });

  const DescriptionTitle = styled("div")({
    fontSize: "17px",
    fontWeight: 700,
  });

  const DescriptionContainer = styled("div")({
    gridColumn: "2 / 3",
    gridRow: "1 / 2",
    color: "white",
    fontFamily: "Chivo",
    letterSpacing: "2px",
    padding: "0 5%",
  });

  const DescriptionContent = styled("div")({
    marginTop: "3px",
    marginLeft: "15px",
  });

  const GitColumn = styled("div")({
    gridColumn: "3 / 4",
    gridRow: "1 / 2",
    color: "white",
    fontFamily: "Chivo",
    letterSpacing: "2px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
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
  });

  const growShrink = keyframes({
    "0%": { transform: "scale(1)" },
    "50%": { transform: "scale(1.1)" },
    "100%": { transform: "scale(1)" },
  });

  const GitHubLink = styled("a")({
    fontSize: "35px",
    marginTop: "20px",
    color: "white",
    transition: "color 0.5s ease",
    borderRadius: "150px",
    "&:hover": {
      color: "#8ff8ff",
      animation: `${growShrink} 1.5s ease-in-out infinite`,
    },
  });

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
                letterSpacing: "1px",
              }}
            >
              Committed to using technology to solve complex problems
            </Typography>
            {/* <Button
              variant="contained"
              color="primary"
              href="/path_to_cv.pdf"
              download
              style={{
                marginTop: "20px",
              }}
            >
              Download CV
            </Button> */}
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
              <Project
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
              ></Project>
            </ProjectLinkContainer>
            <ProjectDescriptionContainer>
              <KeyTechContainer>
                <div>
                  <DescriptionTitle>Key technologies Used:</DescriptionTitle>
                  <TechsListed>
                    {project &&
                      project.keyTechnologies &&
                      project.keyTechnologies.map((technology, index) => (
                        <div key={index}>&gt; {technology}</div>
                      ))}
                  </TechsListed>
                </div>
              </KeyTechContainer>
              <DescriptionContainer>
                <div>
                  <DescriptionTitle>Description</DescriptionTitle>
                  <DescriptionContent>
                    &gt; {project.Description}
                  </DescriptionContent>
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
        </div>
      </SectionTwo>
    </ContainerDiv>
  );
}

export default App;
