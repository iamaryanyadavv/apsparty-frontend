import { Text } from '@nextui-org/react';
import React from 'react';
import Marquee from 'react-fast-marquee';
const NewsTicker = () => {
  return (
    <Marquee
      pauseOnHover={true}
      speed={60}
      style={{
        background: 'white',
        color: 'black',
        paddingTop: '7px',
        paddingBottom: '8px',
      }}
      gradientColor={[255, 255, 255]}
      gradientWidth={'15%'}
    >
      {/* <p
        style={{
          fontSize: '15px',
          fontWeight: "600",
          paddingRight: '2px',
          paddingLeft: '2px',
        }}
      >
        Upcoming Turnament: COD Open 1.0. Check out the COD page to register and hurry, only 64 spots! WIN YOUR MONEY BACK IN 3 WINS! It's that easy. 
      </p> */}
      <Text
      css={{
        fontSize: '10px',
        paddingRight: '2px',
        paddingLeft: '2px',
        fontWeight: '500',
        color: 'Black',
        fontFamily: 'bruce-forever'
      }}>
        Upcoming Turnament: COD Open 1.0. 
        Check out the COD page to register and hurry, only limited spots! 
        WIN YOUR MONEY BACK IN 3 WINS! It's that easy. 
      </Text>
    </Marquee>
  );
};

export default NewsTicker;