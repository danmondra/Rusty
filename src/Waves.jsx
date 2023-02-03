import WaveTop from './assets/waves/waveTop.svg'
import WaveBottom from './assets/waves/waveBottom.svg'

export function Waves() {

  return(
    <>
      <img src={WaveTop} alt="" className='absolute top-0 w-full h-[10rem] object-cover lg:h-auto -z-10'/>
      <img src={WaveBottom} alt="" className='absolute bottom-0 w-full h-[10rem] object-cover lg:h-auto -z-10'/>
    </>
  )
}
