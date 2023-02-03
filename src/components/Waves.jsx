import WaveTop from '../assets/waves/waveTop.svg'
import WaveBottom from '../assets/waves/waveBottom.svg'

export function Waves() {

  return(
    <>
      <img src={WaveTop} alt="Design wave for the top of the screen" className='absolute top-0 left-0 w-full h-[5rem] object-cover lg:h-auto -z-10'/>
      <img src={WaveBottom} alt="Design wave for the bottom of the screen" className='absolute bottom-0 left-0 w-full h-[5rem] object-cover lg:h-auto -z-10 2xl: hidden'/>
    </>
  )
}
