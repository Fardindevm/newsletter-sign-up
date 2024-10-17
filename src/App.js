import './App.css';
import desktop_image from './images/illustration-sign-up-desktop.svg'
import icon_list from './images/icon-list.svg'
import { useState } from 'react';
import validator from 'validator';
import SuccessPage from './components/success';

function App() {
  
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)

  const handleEmail = (e) => {
    setEmail(e.target.value);
  } 

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !validator.isEmail(email)) {
      setError("Valid email required")
    } else {
      setShowSuccess(true);
      setError("");
    }
  }

  const handleDismiss = () => {
    setEmail("")
    setError("")
    setShowSuccess(false)

  }

  if (showSuccess) {
    return <SuccessPage email={email} handleDismiss={handleDismiss}/>;
  }

  return (
    <div className="App">
      <main className='main'>
        <div className='main-div'>
          <h1 className='main-div-h1'>Stay updated!</h1>
          <p>Join 60.000+ product managers receiving monthly updates on:</p>
          <ul className='updates'>
            <li><img src={icon_list} className='icon_list' alt='icon_list'/>Product discovery and building what matters</li>
            <li><img src={icon_list} className='icon_list' alt='icon_list'/>Measuring to ensure updates are a success</li>
            <li><img src={icon_list} className='icon_list' alt='icon_list'/>And much more!</li>
          </ul>
          <div className='email'>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <label className='email-label' htmlFor='email-input'>Email address</label>
              {error && <p className='error-p'>{error}</p>}
            </div>
              <input type='email' className={`email-input ${error ? 'error': ''}`} placeholder='email@company.com' id='email-input' value={email} onChange={(e) => handleEmail(e)}/>
          </div>
          <button type='submit' className='submit-btn' onClick={(e) => handleSubmit(e)}>Subscribe to monthly newsletter</button>
        </div>
      </main>
      <aside>
        <img src={desktop_image} alt="desktop-image" className='desktop-image'/>
      </aside>
    </div>
  );
}

export default App;
