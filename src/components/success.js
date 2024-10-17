import './success.css'
import Success_icon from '../images/icon-success.svg'

export default function SuccessPage({ email, handleDismiss}) {

  

  return (
    <div className='success'>
      <img src={Success_icon} alt='Success-icon' className='success-img'/>
      <h1 className='success-h1'>Thanks for subscribing!</h1>
      <p className='success-p'>A confirmation email has been sent to <span className='bold'>{email}</span>. Please open it and click to button inside to confirm your subscribtion.</p>
      <button className='dismiss-btn' type='button' onClick={() =>handleDismiss()}>Dismiss message</button>
    </div>
  )
}