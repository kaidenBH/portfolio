import React from 'react'
import { Footer, Portfolio, Haitem, Header} from './Containers';
import { Navbar, Background} from './components';
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Background />
        <div className='gradient_bg'>
            <Navbar />
            <Header />
        </div>
        <Haitem />
        <Portfolio />
        <Footer />
    </div>
  )
}

export default App