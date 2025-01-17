import React from 'react';
import {useNavigate} from '@reach/router';
import Box from '@mui/material/Box';
import {grey} from '@mui/material/colors';
import {useTheme} from '@mui/material';

import useMediaBreakPoint from '../../../hooks/use-media-break-point';


const Brand = () => {
    const theme = useTheme();
    const [isSm, isMd] = useMediaBreakPoint();
    const navigate = useNavigate();

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
            flexGrow: isSm ? 0 : 1,
            justifyContent: isSm ? null : 'center',
            mb: isSm ? null : '10px',
            height: isSm ? null : '52px',
            marginLeft: isSm && !isMd ? '40px' : null
        }} >
            <Box sx={{
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
            }} onClick={() => {
                navigate('/').then();
            }}>
            <Box sx={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                overflow: 'hidden',
                marginRight: '8px',
                background: '#F9A3A5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                'img': {
                    width: '32px',
                    height: '32px'
                }
            }}>
                <img src="/logo.png" alt='Logo'/>
            </Box>
            <Box sx={{
                fontSize: '1.3rem',
                fontWeight: 600,
                color: theme.palette.mode === 'light' ? grey[900] : grey[50],
            }}>ALEXTEST MultiSafe</Box>
            </Box>
        </Box>
    );
}

export default Brand;
