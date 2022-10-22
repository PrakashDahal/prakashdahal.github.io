import { menuItems } from '../../helper/menuItems'
import './intro.scss'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

import { Tooltip } from '@mui/material';

function Intro() {

  return (
    <div className='intro' id={menuItems.intro.id}>

      <div className="left">
        <div className="wrapper">
          <h2>Hello, I am</h2>
          <h1>Prakash Dahal</h1>

          <div className="profession-title">
            <div className="profession-title-wrapper">
              <div className="profession-title-item">
                Front-End Developer
              </div>
              <div className="profession-title-item">
                Back-End Developer
              </div> <div className="profession-title-item">
                Automation Engineer (Cypress)
              </div>
            </div>
          </div>

          <a href={`#${menuItems.projects.id}`}>
            <KeyboardDoubleArrowDownIcon className='icon' />
          </a>
        </div>
      </div>
      <div className="right">
        <div className="image-container">
          <img src="assets/profile0.JPG" alt="profile" />
        </div>
      </div>
      <div className='social-links'>
        <Tooltip title="LinkedIn">
          <a href="https://www.linkedin.com/in/dahal-prakash-1720/" target="_blank" rel="noreferrer">
            <LinkedInIcon className='icon' />
          </a>
        </Tooltip>

        <Tooltip title="GitHub">
          <a href="https://github.com/PrakashDahal" target="_blank" rel="noreferrer">
            <GitHubIcon className='icon' />
          </a>
        </Tooltip>
        <Tooltip title="Gmail: dahalprakash1720@gmail.com">
          <a href="mailto:dahalprakash1720@gmail.com" target="_blank" rel="noreferrer">
            <MailIcon className='icon' />
          </a>
        </Tooltip>
      </div>
    </div>
  )
}

export default Intro
