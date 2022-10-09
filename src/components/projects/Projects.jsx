// import { Button } from '@mui/material';
import { useState } from 'react';
import { menuItems } from '../../helper/menuItems'
import { projectItems, projectList } from '../../helper/projectListsAndItems'
import ProjectList from '../support/projectList/ProjectList';
import './projects.scss'

function Projects() {

  const [selected, setSelected] = useState(Object.keys(projectList)[0])

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
            <div className='details'>
              <div className="details-title">
                <h3>{projectItems.title}</h3>
              </div>
              <div className="details-buttons">
                {projectItems?.demoUrl &&
                  <a href={projectItems?.demoUrl} target="_blank" rel="noreferrer">
                    <button variant="text" color='success'>
                      <h4>
                        DEMO
                      </h4>
                    </button>
                  </a>
                }
                {
                  projectItems?.sourceCode &&
                  <a href={projectItems?.sourceCode} target="_blank" rel="noreferrer">
                    <button variant="text" color='success'>
                      <h4>
                        CODE
                      </h4>
                    </button>
                  </a>
                }
              </div>
            </div>
          </div>
        })}
        {
          (!projectItems[selected] || projectItems[selected]?.length <= 0) &&
          <div className='no-data'>
            <h3>
              No Projects Yet
            </h3>
          </div>
        }
      </div>
    </div>
  )
}

export default Projects
