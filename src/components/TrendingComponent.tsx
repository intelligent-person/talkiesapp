import Slider from 'react-slick';
import MovieCardComponent from './MovieCardComponent';
import CarouselArrowComponent from './CarouselArrowComponent';
import { TrendingSection } from '../styles/sections';
import { FC } from 'react';
import { TrendingComponentProperties } from '../types';

const TrendingComponent: FC<TrendingComponentProperties> = (props) => {
  const { trendingFilms } = props;

  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    lazyLoad: true,
    speed: 500,
    autoplaySpeed: 8000,
    cssEase: 'linear',
    variableWidth: true,
    pauseOnHover: true,
    nextArrow: <CarouselArrowComponent />,
    prevArrow: <CarouselArrowComponent isLeft />
  };

  return (
    <TrendingSection>
      <Slider {...settings}>
        {trendingFilms?.results?.map((movie) => <MovieCardComponent
          key={movie.title}
          movie={movie}
        />)}
      </Slider>
    </TrendingSection>
  );
};

export default TrendingComponent;
