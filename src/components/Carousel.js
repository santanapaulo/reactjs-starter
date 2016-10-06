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
