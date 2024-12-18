import React from 'react'
import Hero from './sections/Hero'
import Navbar from './components/Navbar'
import WhatIfYouHadItAll from './sections/WhatIfYouHadItAll'
import CandleChain from './sections/CandleChain'
import CandleWallet from './sections/CandleWallet'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhatIfYouHadItAll />
      <CandleChain />
      <CandleWallet/>
    </div>
  )
}

export default App