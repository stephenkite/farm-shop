import image_1 from '../assets/image_1.png'
import image_2 from '../assets/image_2.jpg'
import image_3 from '../assets/image_3.jpg'

function displayPhoto(heroCount) {
    if(heroCount === 0){
        return <img src={image_1} className='background' alt='' />
    }
    else if(heroCount === 1){
        return <img src={image_2} className='background' alt='' />
    }
      else if(heroCount === 2){
        return <img src={image_3} className='background' alt='' />
    }
}

const Background = ({ heroCount }) => {
    return(
        <div>
            {displayPhoto(heroCount)}
        </div>
    )
}

export default Background
