import { Grid } from '@mui/material';
import React from 'react';
import AirConditions from './airConditions/AirConditions';
import DailyForecast from './forecast/DailyForecast';
import Details from './details/Details';

const TodayWeather = ({ data, forecastList }) => (
  <Grid container sx={{ padding: '3rem 0rem 0rem' }}>
    <Details data={data} />
    <AirConditions data={data} />
    <DailyForecast data={data} forecastList={forecastList} />
  </Grid>
);

export default TodayWeather;
