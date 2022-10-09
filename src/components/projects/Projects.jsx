import { useState } from 'react';
import { menuItems } from '../../helper/menuItems'
import { projectItems, projectList } from '../../helper/projectListsAndItems'
import ProjectList from '../support/projectList/ProjectList';
import './projects.scss'

function Projects() {

  const [selected, setSelected] = useState("webSites")

  return (
    <div className='projects' id={menuItems.projects.id}>
      <h1>Projects</h1>
      <ul>
        {
          Object.keys(projectList).map(key => {
            return <ProjectList title={projectList[key].title} id={projectList[key].id} key={projectList[key].id} active={selected === projectList[key].id} setSelected={setSelected} />
          })
        }
      </ul>
      <div className="container">
        {projectItems[selected]?.map(projectItems => {
          return <div className="item" key={projectItems.id}>
            <img src={projectItems.img} alt={projectItems.title} />
            <h3>{projectItems.title}</h3>
          </div>
        })}
      </div>
    </div>
  )
}

export default Projects
