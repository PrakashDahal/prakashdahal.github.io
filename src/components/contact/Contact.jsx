import { useRef, useState } from 'react'
import { menuItems } from '../../helper/menuItems'
import './contact.scss'
import emailjs from '@emailjs/browser';
import { Alert, Snackbar } from '@mui/material';


function Contact() {

  const formRef = useRef()

  const [isAlert, setIsAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertColor, setAlertColor] = useState('success')

  const handleSubmit = (data) => {
    data.preventDefault()
    emailjs.sendForm('service_z8gs827', 'template_7b2f4ge', formRef.current, '35G4Lv0uI7YyKkUd5')
      .then(() => {
        setAlertMessage('Success! Thank you for the message.')
        setAlertColor('success')
        setIsAlert(true)
        document.getElementById("contactForm").reset();
      }, () => {
        setAlertMessage('Error! Send message again.')
        setAlertColor('error')
        setIsAlert(true)
      });

  }

  const handleAlertClose = () => {
    setIsAlert(false)
  }

  return (

    <div className='contact' id={menuItems?.contact?.id}>
      <div className="left">
        <div className="left-overlay">
        </div>
          <img src="assets/contactImages/contact.svg" alt="Chatting" />
      </div>
      <div className="right">
        <h1>Contact</h1>
        <form ref={formRef} onSubmit={handleSubmit} id="contactForm">
          <input type="text" minLength={2} maxLength={50} placeholder='Name' name="user_name" required />
          <input type="text" minLength={2} maxLength={70} placeholder='Subject' name="user_subject" required />
          <input type="email" minLength={2} placeholder='Email' name="user_email" required />
          <textarea rows="5" minLength={5} maxLength={500} placeholder='Message' name="message" required />
          <button>Submit</button>
        </form>

        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          autoHideDuration={4000}
          open={isAlert}
          onClose={handleAlertClose}
        >
          <Alert variant="filled"
            onClose={handleAlertClose}
            severity={alertColor} sx={{ width: '100%' }}>
            {alertMessage}
          </Alert>
        </Snackbar>


      </div>
    </div>
  )
}

export default Contact
