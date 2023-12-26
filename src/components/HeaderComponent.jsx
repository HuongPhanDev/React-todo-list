import React from 'react'
import { FaMoon } from 'react-icons/fa'
import '../styles/HeaderComponent.css'

function HeaderComponent() {
  return (
    <div className='titleComponent'>
      <h2>MY TASKS</h2>
      <button>
        <FaMoon />
      </button>
    </div>
  )
}

export default HeaderComponent
