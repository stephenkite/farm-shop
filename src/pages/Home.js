import { useEffect, useState } from "react";
import Background from "../components/Background";
import Hero from "../components/Hero";

const Home = () => {

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) =>{ return count === 2 ? 0 : count+1 })
    }, 3000)
  }, []);

  const [heroCount, setHeroCount] = useState(0);

  return (
    <div className="kite-hero-content">
      < Background heroCount={heroCount}/>
      < Hero  heroCount={heroCount} setHeroCount={setHeroCount} />
      
    </div>
  )
}

export default Home
