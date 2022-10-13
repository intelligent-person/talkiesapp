import { css } from '@emotion/react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { FC } from 'react';
import { CarouselArrowComponentProperties } from '../types';

const CarouselArrowComponent: FC<CarouselArrowComponentProperties> = (props) => {
  const { onClick, isLeft } = props;
  return (
    <div
      role={'button'}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={onClick}
      css={css`
        position: absolute;
        top: 50%;
        left: calc(${isLeft ? '50% - 380px' : '50% + 380px'});
        transform: translate(${isLeft ? '-30%' : '-80%'}, -50%);
        z-index: 10010;
        background: rgba(231, 231, 231, 0.1);
        border-radius: 12px;
        padding: 16px 16px 11px;
        cursor: pointer;
        font-size: 24px;
        color: white;
        transition: all .2s linear;
        :hover {
          background: rgba(231, 231, 231, 0.3);
        }
        
        @media (max-width: 600px) {
          display: none;
        }
      `}
    >
      {isLeft
        ? <BsChevronLeft/>
        : <BsChevronRight/>
      }
    </div>
  );
};

export default CarouselArrowComponent;
