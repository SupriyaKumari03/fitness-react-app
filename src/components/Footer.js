import React from 'react';
import { Box, Typography } from '@mui/material';
// import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    {/* <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
       <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }}/>
    </Stack> */}
    <div className="lotties">
    <lottie-player src="https://lottie.host/735fd48a-3fd2-4da8-9389-9002a3ccdc30/tuoXxmZkG0.json" background="##FFFFFF" speed="1" loop autoplay direction="1" mode="normal">Fitness Wonder</lottie-player>
    <div className="fitness">Fitness Wonder</div>
    </div>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️ by JavaScript Mastery</Typography>
  </Box>
);

export default Footer;
