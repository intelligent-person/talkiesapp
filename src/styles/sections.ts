import styled from '@emotion/styled';
import { GenreCard } from './cards';

export const TrendingSection = styled('section')`
  position: relative;

  .slick-slide {
    width: 740px;
    padding: 64px 30px;
    height: auto;
    transition: all .2s;

    p {
      max-height: 150px;
      overflow-y: auto;
      transition: all .2s linear;
    }
  }
  

  .slick-center {
    transform: scale(1.00);
    padding: 40px 0px;

    ${GenreCard} {
      padding: 8px 15px;
      font-size: 14px;
    }

    p {
      max-height: 190px;
    }
  }
  
  .slick-dots {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      bottom: 0;
      color: white;
      z-index: 1231;
    
      li button::before {
          color: white;
      }
  }
`;
