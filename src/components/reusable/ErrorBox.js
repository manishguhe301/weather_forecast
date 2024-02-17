import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const ErrorBox = ({
  display = 'flex',
  justifyContent = 'center',
  alignItems = 'center',
  margin = '1rem auto',
  gap = '8px',
  flex = 'auto',
  width = 'auto',
  type,
  errorMessage = 'Internal error',
}) => {
  return (
    <Box
      display={display}
      justifyContent={justifyContent}
      alignItems={alignItems}
      margin={margin}
      gap={gap}
      flex={flex}
      width={width}
      sx={{
        padding: '1rem',
        flexDirection: { xs: 'column', sm: 'row' },
        color: type === 'info' ? '#f5a922' : '#fff',
        border: type === 'info' ? '1px solid #f5a922' : '1px solid #DC2941',
        borderRadius: '8px',
        background:
          type === 'info' ? 'rgba(245, 169, 34, .1)' : 'rgba(220, 41, 65, .25)',
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: '24px' }} />
      <Typography
        variant='h2'
        component='h2'
        sx={{
          fontSize:
            type === 'info'
              ? { xs: '12px', sm: '14px' }
              : { xs: '14px', sm: '16px' },
          fontFamily: 'Poppins',
          textAlign: 'center',
        }}
      >
        {errorMessage}
      </Typography>
    </Box>
  );
};

export default ErrorBox;
