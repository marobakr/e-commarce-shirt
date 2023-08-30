import React from 'react'

const Slider = () => {
  const BackgroundImage = {
    backgroundImage: `url(https://wpthemesgrid.com/themes/free/eshop/images/slider-image2.jpg)`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '300px',
  }
  return (
    <div className='single-leadr' id='home' style={BackgroundImage}>
      <div className='container'>
        <div className='box'>
          <h3>UP TO 50% OFF</h3>
          <h1>Shirt For Man</h1>
          <p>
            Maboriosam in a nesciung eget magnae
            <br />
            dapibus disting tloctio in the
            <br />
            find it pereri odiy maboriosm.
          </p>
          <button>shop now!</button>
        </div>
      </div>
    </div>
  )
}

export default Slider
