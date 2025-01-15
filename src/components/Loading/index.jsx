import './style.css';
import { TypeWriterEffect } from '../TypeWriterEffect';

export default function Loading() {
  return (
    <div className="loading">
      <TypeWriterEffect text="Loading..." speed={400} />
    </div>
  )
}