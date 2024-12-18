import React from 'react'
import Hero from './sections/Hero'
import Navbar from './components/Navbar'
import WhatIfYouHadItAll from './sections/WhatIfYouHadItAll'
import CandleChain from './sections/CandleChain'
import CandleWallet from './sections/CandleWallet'
import RecentBlocks from './sections/RecentBlocks'
import ChosenSolution from './sections/ChosenSolution'
import Transaction from './sections/Transaction'
import WhatNextForCandle from './sections/WhatNextForCandle'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhatIfYouHadItAll />
      <CandleChain />
      <CandleWallet />
      <RecentBlocks />
      <ChosenSolution />
      <Transaction />
      <WhatNextForCandle />
      <Footer />
    </div>
  )
}

export default App