import React from 'react'

export default function App() {
  return (
    <div style={{
      fontFamily: 'sans-serif',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1>GraveCare</h1>
      <p>Professional grave repair, cleaning, and maintenance.</p>

      <div style={{
        marginTop: '2rem',
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center'
      }}>
        <button style={{ padding: '0.7rem 1.5rem' }}>Services</button>
        <button style={{ padding: '0.7rem 1.5rem' }}>Contact</button>
      </div>
    </div>
  )
}
