import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { filterProperties } from './helpers';
import { H4 } from './typeface';
import { Button } from './buttons';
import { Label } from './forms';

export const Header = styled('div')`
  padding: 20px 30px;
  background: rgba(62, 62, 62, 1);
  backdrop-filter: blur(50px);
`;

export const GenreCard = styled('div')`
  display: inline-block;
  padding: 8px 12px;

  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 11px rgba(62, 62, 62, 0.4);
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
`;

interface TrendingMovieProperties {
  bgcSrc?: string
}

const TrendingMovieForwardProperties = new Set([
  'bgcSrc'
]);

export const TrendingMovie = styled('div', {
  shouldForwardProp: filterProperties(TrendingMovieForwardProperties)
})<TrendingMovieProperties>`
  padding: 0;
  color: white;
  border-radius: 20px;
  font-weight: 200;
  font-size: 20px;
  transition: background 0s;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${({ bgcSrc }) => bgcSrc}), right top, no-repeat;
  
  img {
    border-radius: 20px;
  }
  
  p {
    transition: all .2s linear;
    margin-bottom: 20px;
    overflow-y: hidden;
    
    :hover {
      overflow-y: auto;
    }
    
    ::-webkit-scrollbar {
      width: 6px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: rgba(231, 231, 231, 0.3);
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #E7E7E7;
      border-radius: 10px;
    }
  }
  
  ${H4} {
    margin-bottom: 10px;
  }
  
  ${Button} {
    margin-top: 20px;
  }
  
  ${Label} {
    color: white;
    padding: 0;
  }
  
  ${({ theme }) => css`
    font-family: ${theme.fontFamily};
  `}
`;
