import React from 'react'
import Card from './components/Card'
import Attribution from './components/Attribution'

const App = () => {
  return (
    <div className = 'bg-bgColor1 flex flex-col h-screen font-manrope m-0 lg:m-auto'>
      <Card />
      <Attribution />
    </div>
  )
}

export default App
