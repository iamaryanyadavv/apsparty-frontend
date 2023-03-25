import React from "react";
import { Navbar, Link} from "@nextui-org/react";
import { Text } from "@nextui-org/react";
import { FaInstagram } from 'react-icons/fa';

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
      <Navbar className="navbar" variant="static">
        <Navbar.Toggle color="inherit" showIn="sm" />
        <Navbar.Brand hideIn="sm">
          <Text>
            APP
          </Text>
        </Navbar.Brand>
        <Navbar.Content activeColor={'error'} hideIn="sm" variant="highlight-rounded">
        {items.map((item, index) => (
            <Navbar.Link key={index} isActive={item.href===active.substring(0,item.href.length+1)} href={item.href}>
              {item.name}
            </Navbar.Link>
          ))}

        </Navbar.Content>
        <Navbar.Content showIn={'sm'}>
            <Text>
            APP
          </Text>
        </Navbar.Content>
        <Navbar.Content>
          <Link target="_blank" href="https://www.instagram.com/apl.ashoka/">
            <FaInstagram color="#F31260" size={'25px'} />
          </Link>
        </Navbar.Content>
        
        
        <Navbar.Collapse showIn={"sm"}>
        {items.map((item, index) => (
          <Navbar.CollapseItem key={index} activeColor='error' isActive={item.href===active.substring(0,item.href.length+1)}>
            <Link href={item.href} color="inherit" 
              css={{
                minWidth: "100%",
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