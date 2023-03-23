import React from 'react'
import { Footer, Blog, Possibility, Features, Haitem, Header} from './Containers';
import { Cta, Brand, Navbar} from './components';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient_bg'>
            <Navbar />
            <Header />
        </div>
        <Brand />
        <Haitem />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
    </div>
  )
}

export default App