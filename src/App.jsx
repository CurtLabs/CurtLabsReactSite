import { useState } from 'react'
import './index.css'
import dwamLogo from './assets/dwamlogo.png'
import gardnlogo from './assets/gardnlogo.png'
import CurtLabsLogo from './assets/CurtLabsLogoSVG.svg'

function App() {
  const [count, setCount] = useState(0)
  const [buttonClicked, setButtonClicked] = useState(false)
  const [scene, setScene] = useState('home')

  if (scene === 'home') {
    return (
      <Home
        onNavigate={setScene}
        count={count}
        setCount={setCount}
        buttonClicked={buttonClicked}
        setButtonClicked={setButtonClicked}
      />
    )
  }
  if (scene === 'dwam') {
    return <DwamProject onNavigate={setScene} />
  }
  if (scene === 'gardn') {
    return <GardnProject onNavigate={setScene} />
  }

  return null
}

function Home({ onNavigate, count, setCount, buttonClicked, setButtonClicked }) {
  return (
    <>
      <img src={CurtLabsLogo} alt='Curt Labs logo' className='w-[60vw] md:w-[15vw] ml-5 mt-1' />
      <div className="ticks"></div>
      <section id="spacer"></section>

      <section id="center" className='text-center rounded-4xl shadow bg-purple-50 px-5 py-5 md:px-10 md:py-10'>
        <div>
          <h2 className='text-[6vw] md:text-[2vw] mt-6'>
            Welcome to the <span className='text-green-500'>Curt Labs</span> website!
          </h2>
          <p className='text-[3vw] md:text-[1vw]'>
            This is a display of projects developed and maintained by Curt.
          </p>
        </div>
        <a
          href="https://www.youtube.com/@CurtLabs"
          className='bg-green-500 hover:bg-green-600 text-white rounded-lg px-[8vw] py-[2vw] md:px-[6vw] md:py-[0.5vw] mt-6 inline-block text-2xl'
          target="_blank"
          rel="noreferrer noopener"
        >
          Visit my YouTube channel
        </a>
        {/*<button
          type="button"
          className="counter"
          onClick={() => {
            setCount((count) => count + 1);
            setButtonClicked(true);
          }}
        >
          {buttonClicked ? `This button is useless yet you've clicked it ${count} times.` : 'Click me'}
        </button>*/}
        <br></br>
        <br></br>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>

      <section id="center" className='text-center mt-10 mb-10 rounded-4xl shadow bg-purple-50 px-5 py-5 md:px-10 md:py-10'>
        <h2 className='text-[5vw] md:text-[2vw]'>Admire my work</h2>
        <p className='text-[3vw] md:text-[1vw]'>Below are some of my projects. Feel free to explore them by clicking on their titles!</p>
        <div>
          <div className="flex justify-center">
            <img src={dwamLogo} alt='Dwam logo' className='relative hover:bottom-1 hover:brightness-90' onClick={() => {
              onNavigate('dwam');
            }}></img>
          </div>
          <div className="flex justify-center">
            <img src={gardnlogo} alt='Gardn logo' className='relative hover:bottom-1 hover:brightness-90' onClick={() => {
              onNavigate('gardn');
            }}></img>
          </div>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>

      <section id="center" className='text-center mb-30 rounded-4xl shadow bg-purple-50 px-5 py-5 md:px-10 md:py-10'>
        <h2 className='text-[5vw] md:text-[2vw] mb-5'>Answering your questions</h2>
        <h3 className='text-[3.5vw] md:text-[1.5vw] text-black'>How do I contact you?</h3>
        <p className='text-[3vw] md:text-[1vw] text-green-600'>You can reach me at <span className='text-green-500'><strong>curt@curtlabs.net</strong></span>, I typically will see your email within 5 business days.</p>
        <h3 className='text-[3.5vw] md:text-[1.5vw] text-black'>Your projects are so amazing are you for hire?</h3>
        <p className='text-[3vw] md:text-[1vw] text-green-600'>Yes, I am available for contract work pertaining to programming.</p>
        <h3 className='text-[3.5vw] md:text-[1.5vw] text-black'>Are you working on any projects currently?</h3>
        <p className='text-[3vw] md:text-[1vw] text-green-600'>Of course, I always have a project in the works.</p>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

function DwamProject({ onNavigate }) {

  return (
    <>
      <img src={CurtLabsLogo} alt='Curt Labs logo' className='w-[80vw] md:w-[20vw] ml-5 mt-1' />
      <button type="button" className='bg-green-500 hover:bg-green-600 text-white rounded-lg px-[8vw] py-[2vw] md:px-[6vw] md:py-[1vw] mt-6 inline-block ml-5' onClick={() => onNavigate('home')}>Back to Home</button>
      <div className='text-center rounded-4xl shadow bg-purple-50 px-5 py-5 md:px-10 md:py-10 mt-6'>
        <div className="flex justify-center">
          <img src={dwamLogo} alt='Dwam logo'></img>
        </div>
        <p className='text-[3vw] md:text-[1.5vw]'>
            <strong>Don’t Whack a Mole (DWAM)</strong> was a group project for the <strong>Emory SPARC</strong> competition and won <strong>first place, 2026</strong>. DWAM is a fast, playful
            whack‑a‑mole–style game that screens for concussions by measuring a player’s reaction time and accuracy. The twist—don’t whack the mole—adds an inhibitory‑control challenge that helps reveal attention and impulse‑control changes after head injury.
            This game is not yet publicly available. For demos or inquiries, please contact <strong>Curt</strong> at <strong>curt@curtlabs.net</strong>.
        </p>
      </div>
    </>
  )
}

function GardnProject({ onNavigate }) {
  return (
    <>
      <img src={CurtLabsLogo} alt='Curt Labs logo' className='w-[80vw] md:w-[20vw] ml-5 mt-1' />
      <button type="button" className='bg-green-500 hover:bg-green-600 text-white rounded-lg px-[8vw] py-[2vw] md:px-[6vw] md:py-[1vw] mt-6 inline-block ml-5' onClick={() => onNavigate('home')}>Back to Home</button>
      <div className='text-center rounded-4xl shadow bg-purple-50 px-5 py-5 md:px-10 md:py-10 mt-6'>
        <div className="flex justify-center">
          <img src={gardnlogo} alt='Gardn logo'></img>
        </div>
        <p className='text-[3vw] md:text-[1.5vw]'>
          <strong>Gardn</strong> began taking shape in late 2025 as a streamlined approach to modern gardening sensors. The company entered the <strong>Georgia FLEX competition</strong> and advanced to the county-level round. With support from the region’s strong business community, Gardn has given Curt the opportunity to learn the fundamentals of building a business while connecting with local entrepreneurs. The first product is <strong>currently in development</strong>, and additional details will be shared as the release date approaches. Feel free to contact Curt at <strong>curt@curtlabs.net</strong> for inquiries.
        </p>
      </div>
    </>
  )
}

export default App
