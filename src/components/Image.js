//image component


import one from "../assets/images/one.jpg"
import two from "../assets/images/two.jpg"
import three from "../assets/images/three.jpg"

function Image(){
    return(
    <div className="image">
      <div className="image_sec1">
        <img src={one} alt="one"></img>
        <p>Fogg Wood Extreme, Eau De Perfume,Long Losting Perfume  100ml</p>
      </div>
      <div className="image_sec1">
      <img src={three} alt="two"></img>
      <p>Fogg Wood Extreme, Eau De Perfume,Long Losting Perfume  100ml</p>
      </div>
      <div className="image_sec1">
      <img src={two} alt="three"></img>
      <p>Fogg Wood Extreme, Eau De Perfume,Long Losting Perfume  100ml</p>
      </div>
    </div>)
  }

  export default Image