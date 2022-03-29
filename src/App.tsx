import React from 'react';
import {Router} from '@reach/router';
import {Container} from '@mui/material';

import useMediaBreakPoint from './hooks/useMediaBreakPoint';

import AppWrapper from './layout/AppWrapper'
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import Import from './pages/Import';

function App() {
    const [isMd] = useMediaBreakPoint();

    return (
        <AppWrapper>
            <Navbar/>
            <Container maxWidth='lg' sx={{flexGrow: 1, display: 'flex'}}>
                <Router style={{flexGrow: 1, display: 'flex', flexDirection: isMd ? 'row' : 'column'}}>
                    <Home path='/'/>
                    <Create path='/create'/>
                    <Import path='/import'/>
                </Router>
            </Container>
        </AppWrapper>
    );
}

export default App;
