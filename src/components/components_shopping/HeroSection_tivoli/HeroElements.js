import styled from 'styled-components';

export const HeroContainer = styled.div`
   background: #0c0c0c;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 56rem;
   position: relative;
   z-index: 1;
   :before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100% ),  
      linear-gradient(180deg, rgba(0,0,0,0.2) 0% , transparent 100%);
      z-index: 2;
      @media (max-width: 768px) {
         height: 936px;
   }
}
`

export const ImgHero = styled.img`
   margin-bottom: 88px;
   margin-right: 1rem;  

`

export const HeroContent = styled.div`
   z-index: 3;
   max-width: 1200px;
   
   position: absolute;
   padding: 8px 24px;
   display: flex;
   flex-direction: column;
   align-items: center;

`

export const HeroH1 = styled.h1`
   color: #fff;
   font-size: 10rem;
   text-align: center;
   font-family: playfair display;
   font-style: italic;
   @media screen and (max-width: 768px) {
      font-size: 40px
   }

`

export const HeroP = styled.p`
   margin-top: 24px;
   font-family: Poppins;
   color: #fff;
   font-size: 24px;
   text-align: center;
   max-width: 600px;
   margin-bottom: 1rem;
   @media screen and (max-width: 768px) {
      font-size: 24px
   }
   @media screen and (max-width: 480px) {
      font-size: 18px
   }
`

export const HeroBtnWrapper = styled.div`
   margin-top: 32px;
   display: flex;
   flex-direction: column;
   align-items: center;

`

export const IMG = styled.img`
   width: 51rem;
   margin-top: -24rem;
   margin-bottom: -21rem;

   @media screen and (max-width: 480px) {
      width: 23rem;
      margin-bottom: -11rem;
   }
`