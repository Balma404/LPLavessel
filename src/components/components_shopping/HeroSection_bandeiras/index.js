import React from 'react';
import {Button} from '../../ButtonElements';
import Logo from '../../../images/Logo Sem Fundo.png';
import Desktop from '../../../images/desktop_terracota.jpg';
import Mobile from '../../../images/mobile_terracota.jpg';
import styled from 'styled-components';

export const Banner = styled.div`
   width: 100%;
   height: 100vh;
   background-image: url(${Desktop});
   background-size: cover;
   background-position: center;

   @media (max-width: 768px) {
   background-image: url(${Mobile});
   height:61rem;                                          
   }
`

import { 
   HeroContainer,
   HeroContent,
   HeroH1,
   HeroP,
   HeroBtnWrapper,
   IMG
   } from './HeroElements'
   
   
const HeroSection = () => {
   return (
      <HeroContainer id='home'>
         <Banner/>
         <HeroContent>
            <HeroH1>Grupo VIP <IMG  src={Logo} alt="Lavessel Logo"/></HeroH1>
            <HeroP>
               Clique aqui no botão e receba as melhores promoções exclusivas
            </HeroP>
            <HeroBtnWrapper>
            <Button 
                  href="https://chat.whatsapp.com/JZYZQvo6xxW0A6Ndd75ZES?mode=ems_copy_c" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  primary='true' 
                  dark='true'
               >
            Clique Aqui
            </Button>
            </HeroBtnWrapper>
         </HeroContent>
      </HeroContainer>
   )
}

export default HeroSection
