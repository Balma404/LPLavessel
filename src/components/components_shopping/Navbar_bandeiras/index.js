import React from 'react';
import { IconContext } from 'react-icons/lib';
import { 
   Nav, 
   NavbarContainer,
   NavLogo, 
} from './NavbarElements';

const Navbar = () => {
   return (
      <React.Fragment>
         <IconContext.Provider value={{ color: '#fff'}}>
         <Nav>
            <NavbarContainer>
               <NavLogo to='/bandeiras'>Bandeiras</NavLogo>
            </NavbarContainer>
         </Nav>
         </IconContext.Provider>
      </React.Fragment>
   );
};

export default Navbar

