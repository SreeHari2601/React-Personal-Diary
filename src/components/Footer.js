import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear();
    return (
    <p>
      &copy; SreeHari  {currentYear } 
    </p>
  )
}

export default Footer