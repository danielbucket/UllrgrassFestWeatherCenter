import './style.css';

export default function Loading() {
  return (
    <div className="loading">
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    </div>
  )
}