import './style.css';

export default function Conditions({ conditions }) {

  return (
    <div className="current-conditions-container">
      <div className="current-temp">
        <p>{conditions.tempF}°F</p>
        <img src={conditions.icon} />
      </div>
        <p className="condition-text">{conditions.description}</p>
      <div className='wind-details'>
        <p>Wind:<span>{conditions.wind.speed}</span>mph</p>
        <p>Windchill:<span>{conditions.wind.chill}</span>°F</p>
      </div>
      <p className='updated-at'>Updated at:<span>{conditions.updatedAt}</span></p>
    </div>
  )
}