import './style.css';
import ullrLogo from '../../assets/ullrlogohorizontalyellow.png';
import CurrentConditions from '../CurrentConditions';

export default function Header() {

  return (
    <div className="header">
      <div className="logo">
        <img src={ullrLogo} alt="Ullr Logo" />
        <p className="year">
          <span>2</span>  
          <span>0</span>  
          <span>2</span>  
          <span>5</span>  
        </p>
      </div>
      <CurrentConditions />
    </div>
  )
}