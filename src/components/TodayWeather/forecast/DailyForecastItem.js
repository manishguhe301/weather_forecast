import { Box, Typography } from '@mui/material';
import React from 'react';
import { weatherIcon } from '../../../utilities/IconsUtils';

const styles = {
  box: {
    background:
      'linear-gradient(0deg, rgba(255, 255, 255, .05) 0%, rgba(171, 203, 222, .05) 100%) 0% 0%',
    borderRadius: '8px',
    boxShadow:
      'rgba(0, 0, 0, 0.05) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    textAlign: 'center',
    padding: '4px 0',
    width: '100%',
  },
  time: {
    fontWeight: '400',
    fontSize: { xs: '10px', sm: '12px' },
    color: 'rgba(255, 255, 255, .7)',
    lineHeight: 1,
    padding: '4px',
    fontFamily: 'Poppins',
  },
  imgBox: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    padding: '4px',
  },
  img: {
    width: { xs: '36px', sm: '42px' },
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: '0 auto',
  },
  temperature: {
    fontWeight: '600',
    fontSize: { xs: '12px', sm: '14px' },
    color: 'white',
    textTransform: 'uppercase',
    lineHeight: 1,
    marginBottom: { xs: '8px', md: '0' },
    fontFamily: 'Poppins',
  },
};

const DailyForecastItem = ({ item, data }) => (
  <Box sx={styles.box}>
    <Typography variant='h3' component='h3' sx={styles.time}>
      {item.time}
    </Typography>
    <Box sx={styles.imgBox}>
      <Box
        component='img'
        sx={styles.img}
        alt='weather'
        src={weatherIcon(`${data.weather[0].icon}.png`)}
      />
    </Box>
    <Typography variant='h3' component='h3' sx={styles.temperature}>
      {item.temperature}
    </Typography>
  </Box>
);

export default DailyForecastItem;
