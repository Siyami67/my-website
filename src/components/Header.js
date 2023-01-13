import * as React from 'react';
import { Home, Person , Email } from '@mui/icons-material';
import {Stack , Button , Avatar ,Badge} from '@mui/material';

const homeIcon = <Home />,
      personIcon = <Person />,
      emailIcon = <Email />
      ;

function Header(){
    return(
      <nav className='nav-container'>
         <Stack className='navbar' direction="row" spacing={1.2}>
            <Button className='nav_btn' variant="contained" href="index.html">{homeIcon}Home</Button>
            <Button className='nav_btn' variant="contained" href="#about">{personIcon}About</Button>
            {/* <Button className='nav_btn' variant="contained" href="#pricing">{homeIcon}Pricing</Button> */}
            <Button className='nav_btn' variant="contained" href="#contact">{emailIcon}Contact</Button>
         </Stack>

         <Avatar alt="Siyami" src="./src/Assets/img/profile.jpg" sx={{ width: 56, height: 56 }} />
         <Badge badgeContent={4} color="secondary">
         <Email color="action" />
         </Badge>
      </nav>
    );
}

export default Header;
