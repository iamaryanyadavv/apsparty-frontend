import React from "react";
import { Navbar, Link, Popover, Button, Image} from "@nextui-org/react";
import { Text } from "@nextui-org/react";
import { FaInstagram } from 'react-icons/fa';
import Logo from '../assets/images/Logo.jpg'

function Header() {
    const items = [
      {name: 'Home 🏠', href:'/'},
      {name: 'FIFA ⚽️', href: '/fifa'},
      {name: 'COD 🔪', href:'/cod'},
      {name: 'NBA 🏀', href:'/nba'},
      {name: 'Rocket League 🚀', href:'/rocketleague'},
      {name: 'Rent A PS4 🎮', href:'/ps4rent'},
      {name: 'About 🧩', href:'/about'},
    ]

    var active = window.location.pathname

    return(
      <Navbar css={{width: '100%'}} className="navbar" variant="static">
        <Navbar.Toggle color="inherit" showIn="sm" />
        <Navbar.Brand hideIn="sm">
          <Image css={{
            width: '40px',
            height: '40px'
          }} src={Logo} />
        </Navbar.Brand>
        <Navbar.Content activeColor={'error'} enableCursorHighlight hideIn="sm" variant="highlight-rounded">
        {items.map((item, index) => (
          item.name!=='Rent A PS4 🎮' 
          ? 
          <Navbar.Link css={{fontFamily: 'bruce-forever'}} key={index} isActive={item.href===active.substring(0,item.href.length+1)} href={item.href}>
            {item.name}
          </Navbar.Link>
          : 
          <Popover>
              <Popover.Trigger>
                <Navbar.Link css={{fontFamily: 'bruce-forever'}} key={6} >
                  {item.name}
                </Navbar.Link>
              </Popover.Trigger>
              <Popover.Content>
                  <Text
                  css={{
                      fontFamily: 'bruce-forever',
                      color: 'White',
                      fontSize: '$sm',
                      padding: '12px'
                  }}>
                      Coming Soon!
                  </Text>
              </Popover.Content>
          </Popover>
          ))}

        </Navbar.Content>
        <Navbar.Content showIn={'sm'}>
          <Image css={{
            width: '40px',
            height: '40px'
          }} src={Logo} />
        </Navbar.Content>
        <Navbar.Content>
          <Link target="_blank" href="https://www.instagram.com/ashokaplaystationparty/">
            <FaInstagram color="#F31260" size={'25px'} />
          </Link>
        </Navbar.Content>
        
        
        <Navbar.Collapse showIn={"sm"}>
        {items.map((item, index) => (
          <Navbar.CollapseItem key={index} activeColor='error' isActive={item.href===active.substring(0,item.href.length+1)}>
            
              <Link href={item.href} color="inherit" 
                css={{
                  minWidth: "100%",
                  fontFamily: 'bruce-forever'
                }}
              >
                {item.name}
              </Link>
            
          </Navbar.CollapseItem>
          
        ))}
          
        </Navbar.Collapse>
      </Navbar>
    )
  }

export default Header;