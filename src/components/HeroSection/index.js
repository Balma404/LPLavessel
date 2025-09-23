import React from 'react';
import {Button} from '../ButtonElements';
import { 
   HeroContainer,
   HeroContent,
   HeroH1,
   HeroP,
   HeroBtnWrapper,
   } from './HeroElements'

const HeroSection = () => {
   return (
      <HeroContainer id='home'>
         <HeroContent>
            <HeroH1>Bem Vindo!</HeroH1>
            <HeroP>
               Clique aqui no botão e receba as melhores promoções exclusivas
            </HeroP>
            <HeroBtnWrapper>
            <Button href="https://chat.whatsapp.com/HX4LW6Fphb117fCdrmglLa?mode=ems_copy_c" target="_blank" to='about' primary='true' dark='true' exact='true'>
            Clique Aqui
            </Button>
            </HeroBtnWrapper>
         </HeroContent>
      </HeroContainer>
   )
}

export default HeroSection
