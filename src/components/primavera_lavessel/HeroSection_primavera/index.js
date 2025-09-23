import React from 'react';
import {Button} from '../../ButtonElements';
import Logo from '../../../images/Logo Sem Fundo.png';

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
         <HeroContent>
            <HeroH1>Grupo VIP Primavera<IMG  src={Logo} alt="Lavessel Logo"/></HeroH1>
            <HeroP>
               Clique aqui no botão e receba as melhores promoções exclusivas
            </HeroP>
            <HeroBtnWrapper>
            <Button 
                  href="" 
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

export default HeroSection;
