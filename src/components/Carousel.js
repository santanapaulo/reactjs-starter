import React, { PropTypes } from 'react';

import autoPlay from 'react-swipeable-views/lib/autoPlay';
import SwipeableViews from 'react-swipeable-views';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const getStyles = () => {
  const styles = {
    root: {
      width: 1000,
      height: 400,
      margin: 'auto',
      textAlign: 'center',
    },
    slideStyle: {
    },
  };

  return styles;
};

const Carousel = (props) => {
  const {
    rootStyle,
    children,
    interval,
    slideStyle,
    ...others,
  } = props;

  const styles = getStyles(props);

  return (
    <div style={Object.assign(styles.root, rootStyle)}>
      <AutoPlaySwipeableViews
        {...others}
        interval={interval}
        slideStyle={Object.assign(styles.slideStyle, slideStyle)}
      >
        {children}
      </AutoPlaySwipeableViews>
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.any,
  interval: PropTypes.number,
  slideStyle: PropTypes.object,
  rootStyle: PropTypes.object,
};

Carousel.defaultProps = {
  interval: 3000,
};

export default Carousel;
