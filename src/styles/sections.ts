import styled from '@emotion/styled';
import { GenreCard } from './cards';
import { width } from './dimensions';
import { display } from './helpers';
import { p } from './paddings';
import { toLeftAnimation } from './animations';

export const TrendingSection = styled('section')`
  position: relative;

  .slick-slide {
    ${[
    width(['244px', '700px']),
    p(['30px 8px', '64px 30px'])
  ]};
    height: auto;
    transition: all .2s;

    p {
      ${display(['none', 'block'])};
      max-height: 130px;
    }
  }
  

  .slick-center {
    transform: scale(1.00);
    ${p(['30px 8px', '40px 0px'])};

    @media (min-width: 600px) {
      ${GenreCard} {
        padding: 8px 15px;
        font-size: 14px;
      }
    }

    p {
      max-height: 170px;
    }
    
  }
  
  .slick-dots {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: 0;
    color: rgba(255, 255, 255, 0.4);
    z-index: 1231;
    
    li {
      width: 13px;
      margin: 0;
    }
    
    .slick-active {
      margin: 0 3px;
      button {
        position: relative;

        ::before {
          position: absolute;
          top: 7px;
          left: 3.5px;
          content: '';
          width: 13px;
          height: 5px;
          border-radius: 5px;
          animation: .3s linear ${toLeftAnimation};
          background-color: rgba(255, 255, 255, 0.4);
        }
      }
    }
    
    li button::before {
      color: rgba(255, 255, 255, 0.4);
    }
  }
`;
