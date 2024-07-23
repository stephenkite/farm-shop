import arrow_btn from '../assets/arrow_btn.png';

const Hero = ({ setHeroCount, heroCount }) => {
  return (
    <div className="hero">
      <div className='hero-explore'>
        <p>Expore Products</p>
        <img src={arrow_btn} alt='' />
      </div>
      <div className='hero-dot-play'>
        <ul className='hero-dots'>
            <li onClick={()=>setHeroCount(0)} className={heroCount===0 ? 'hero-dot green' : 'hero-dot'}></li>
            <li onClick={()=>setHeroCount(1)} className={heroCount===1 ? 'hero-dot green' : 'hero-dot'}></li>
            <li onClick={()=>setHeroCount(2)} className={heroCount===2 ? 'hero-dot green' : 'hero-dot'}></li>
        </ul>
      </div>
    </div>
  )
}

export default Hero
