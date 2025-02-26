import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From Frontend Project to Full Stack Project. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Full-Stack Project' ?
            <ToggleButton active value="Full-Stack Project" onClick={() => setToggle('Full-Stack Project')}>Full Stack Project</ToggleButton>
            :
            <ToggleButton value="Full-Stack Project" onClick={() => setToggle('Full-Stack Project')}>Full Stack Project</ToggleButton>
          }
          <Divider />
          {toggle === 'Front-end Project' ?
            <ToggleButton active value="Front-end Project" onClick={() => setToggle('Front-end Project')}>Frontend Project</ToggleButton>
            :
            <ToggleButton value="Front-end Project" onClick={() => setToggle('Front-end Project')}>Frontend Project</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects