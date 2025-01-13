import './style.css';
import ullrLogo from '../../assets/ullrlogohorizontalyellow.png';

export default function Header() {
  const year = new Date().getFullYear().toString().split('');

  return (
    <div className="header">
      <img src={ullrLogo} alt="Ullr Logo" />
        <p className="year">
          {
            year.map((num, i) => <span key={i}>{num}</span>)
          }
      </p>
    </div>
  )
};