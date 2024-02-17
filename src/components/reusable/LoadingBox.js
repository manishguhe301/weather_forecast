import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const styles = {
  box: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  },
};

const LoadingBox = ({ children }) => {
  return (
    <Box sx={styles.box}>
      <CircularProgress sx={{ color: 'rgba(255,255,255, .8)' }} />
      {children}
    </Box>
  );
};

export default LoadingBox;
