import './topbar.scss'
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import MailIcon from '@mui/icons-material/Mail';
// import { Tooltip } from '@mui/material';

function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>

        <div className="right">
          {/* <div className="item-container">
            <Tooltip title="LinkedIn">
              <a href="https://www.linkedin.com/in/dahal-prakash-1720/" target="_blank" rel="noreferrer">
                <LinkedInIcon className='icon' />
              </a>
            </Tooltip>
          </div>
          <div className="item-container">
            <Tooltip title="GitHub">
              <a href="https://github.com/PrakashDahal" target="_blank" rel="noreferrer">
                <GitHubIcon className='icon' />
              </a>
            </Tooltip>
          </div>
          <div className="item-container">
            <Tooltip title="Gmail: dahalprakash1720@gmail.com">
            <a href="mailto:dahalprakash1720@gmail.com" target="_blank" rel="noreferrer">
              <MailIcon className='icon' />
            </a>
            </Tooltip>
          </div> */}
          <a href="#intro" className='logo'>Prakash Dahal</a>
        </div>

      </div>
    </div>
  )
}

export default Topbar
