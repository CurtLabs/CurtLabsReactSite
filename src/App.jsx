import { useState } from 'react'
import './index.css'
import dwamLogo from './assets/dwamlogo.png'
import gardnlogo from './assets/gardnlogo.png'
import CurtLabsLogo from './assets/CurtLabsLogoSVG.svg'
import {RoundDiv, HeaderText, SvgOutlineDefs, DescText} from './Temps'

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
      <SvgOutlineDefs />
      <section>
        <RoundDiv className='m-3 bg-linear-to-b from-[#525252] to-[#1B1B1B]'>
          <div className='flex justify-center'>
            <img src={CurtLabsLogo} alt='Curt Labs logo' className='mx-auto md:mx-0 w-[60vw] md:w-[15vw] mt-1 md:ml-5' />
          </div>

          <div className='mx-auto'>
            <HeaderText>
              Welcome to <span className='text-[#00D213]'>CurtLabs.net</span>
            </HeaderText>
            <div className="h-0.5 bg-white rounded-full my-4 mx-auto" />
            <DescText>
              This is a display of projects developed and maintained by Curt.
            </DescText>
          </div>
        </RoundDiv>
      </section>

      <section>
        <RoundDiv className='m-3 bg-linear-to-b from-[#1A1A1A] to-[#808080]'>
          <HeaderText>
            My Work
          </HeaderText>
          <DescText>
            Click on a project to see more about it.
          </DescText>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <svg className="w-[70vw] md:w-[28vw] cursor-pointer transform transition duration-200 hover:-translate-y-2 hover:brightness-90" viewBox="0 0 600 200" onClick={() => onNavigate('dwam')} xmlns="http://www.w3.org/2000/svg">
              <image href={dwamLogo} width="100%" height="100%" preserveAspectRatio="xMidYMid meet" filter="url(#logo-outline)" />
            </svg>

            <svg className="w-[70vw] md:w-[28vw] cursor-pointer transform transition duration-200 hover:-translate-y-2 hover:brightness-90" viewBox="0 0 600 200" onClick={() => onNavigate('gardn')} xmlns="http://www.w3.org/2000/svg">
              <image href={gardnlogo} width="100%" height="100%" preserveAspectRatio="xMidYMid meet" filter="url(#logo-outline)" />
            </svg>
          </div>
        </RoundDiv>
      </section>

      <section>
        <RoundDiv className='m-3 bg-linear-to-b from-[#828282] to-[#333333]'>
          <HeaderText>
              Questions
          </HeaderText>
          <h2 className='text-[10vw] md:text-[2vw] mb-5 text-white'></h2>
          <DescText>How do I contact you?</DescText>
          <DescText className='px-10'>You can reach me at <span className='text-green-600'><strong>curt@curtlabs.net</strong></span>, I will typically see your email within 5 business days.</DescText>
          <DescText>Your projects are so amazing are you for hire?</DescText>
          <DescText className='px-10'>No.</DescText>
          <DescText>Are you working on any projects currently?</DescText>
          <DescText className='px-10'>Of course, I always have a project in the works.</DescText>
        </RoundDiv>
      </section>
    </>
  )
}

function DwamProject({ onNavigate }) {
  return (
    <>
      <RoundDiv className='bg-[#000000b0] m-3'>
        <img src={CurtLabsLogo} alt='Curt Labs logo' className='mx-auto md:mx-0 w-[80vw] md:w-[20vw] mt-1 md:ml-5' />
        <button type="button" className='bg-green-500 hover:bg-green-600 text-white rounded-lg px-[8vw] py-[2vw] md:px-[6vw] md:py-[1vw] mt-6 inline-block ml-5' onClick={() => onNavigate('home')}>Back to Home</button>
        <div className="flex justify-center">
          <svg className="w-[90vw] md:w-[30vw] transform transition duration-200 hover:-translate-y-2 hover:brightness-90" viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
            <image href={dwamLogo} width="100%" height="100%" preserveAspectRatio="xMidYMid meet" filter="url(#logo-outline)" />
          </svg>
        </div>
        <DescText>
          <strong>Don’t Whack a Mole (DWAM)</strong> was a group project for the <strong>Emory SPARC</strong> competition and won <strong>first place, 2026</strong>. DWAM is a fast, playful
            whack‑a‑mole–style game that screens for concussions by measuring a player’s reaction time and accuracy. The twist—don’t whack the mole—adds an inhibitory‑control challenge that helps reveal attention and impulse‑control changes after head injury.
            This game is not yet publicly available. For demos or inquiries, please contact <strong>Curt</strong> at <strong>curt@curtlabs.net</strong>.
        </DescText>
      </RoundDiv>
    </>
  )
}

function GardnProject({ onNavigate }) {
  return (
    <>
      <RoundDiv className='bg-[#000000b0] m-3'>
        <img src={CurtLabsLogo} alt='Curt Labs logo' className='mx-auto md:mx-0 w-[80vw] md:w-[20vw] mt-1 md:ml-5' />
        <button type="button" className='bg-green-500 hover:bg-green-600 text-white rounded-lg px-[8vw] py-[2vw] md:px-[6vw] md:py-[1vw] mt-6 inline-block ml-5' onClick={() => onNavigate('home')}>Back to Home</button>
        <div className="flex justify-center">
          <svg className="w-[90vw] md:w-[30vw] transform transition duration-200 hover:-translate-y-2 hover:brightness-90" viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
            <image href={gardnlogo} width="100%" height="100%" preserveAspectRatio="xMidYMid meet" filter="url(#logo-outline)" />
          </svg>
        </div>
        <DescText>
          <strong>Gardn</strong> began taking shape in late 2025 as a streamlined approach to modern gardening sensors. The company entered the <strong>Georgia FLEX competition</strong> and advanced to the county-level round. With support from the region’s strong business community, Gardn has given Curt the opportunity to learn the fundamentals of building a business while connecting with local entrepreneurs. The first product is <strong>currently in development</strong>, and additional details will be shared as the release date approaches. Feel free to contact Curt at <strong>curt@curtlabs.net</strong> for inquiries.
        </DescText>
      </RoundDiv>
    </>
  )
}

export default App
