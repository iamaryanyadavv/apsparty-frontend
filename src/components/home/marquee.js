import React from 'react';
import Marquee from 'react-fast-marquee';
const NewsTicker = () => {
  return (
    <Marquee
      pauseOnHover={true}
      speed={50}
      style={{
        background: 'white',
        color: 'black',
        paddingTop: '7px',
        paddingBottom: '8px',
      }}
      gradientColor={[255, 255, 255]}
      gradientWidth={'15%'}
    >
      <p
        style={{
          fontSize: '15px',
          fontWeight: "500",
          paddingRight: '2px',
          paddingLeft: '2px',
        }}
      >
        WIN YOUR MONEY BACK IN 3 WINS! It's that easy. Upcoming Turnament: COD Open 1.0. Check out the COD page to register and hurry, only 64 spots!
      </p>
    </Marquee>
  );
};

export default NewsTicker;