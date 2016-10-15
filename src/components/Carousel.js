import React, { PropTypes } from 'react';

import autoPlay from 'react-swipeable-views/lib/autoPlay';
import SwipeableViews from 'react-swipeable-views';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const getStyles = () => {
  const styles = {
    root: {
      height: 400,
      textAlign: 'center',
      marginBottom: 32,
      boxShadow: '0px 2px 12px #888888',
      width: '60%',
    },
  };

  return styles;
};

const Carousel = (props) => {
  const {
    children,
    interval,
    ...others,
  } = props;

  const styles = getStyles();

  return (
    <div style={styles.root}>
      <AutoPlaySwipeableViews
        {...others}
        interval={interval}
      >
        {children}
      </AutoPlaySwipeableViews>
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.any,
  interval: PropTypes.number,
};

Carousel.defaultProps = {
  interval: 3000,
};

export default Carousel;
