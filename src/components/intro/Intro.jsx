import { menuItems } from '../../helper/menuItems'
import './intro.scss'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

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
          <img src="assets/single-man2.svg" alt="Image" />
        </div>
      </div>
    </div>
  )
}

export default Intro
