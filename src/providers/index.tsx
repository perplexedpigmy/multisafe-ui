import React from 'react'
import {Provider} from 'jotai';
import {Connect} from '@stacks/connect-react';

import DevToolsProvider from './dev-tools';
import ThemeProvider from './theme';
import ToastProvider from './toast';
import SafesProvider from './safes';

import {baseAuthOptions} from '../constants';

const Providers: React.FC = ({children}) => {
    return (
        <Provider>
            <Connect authOptions={baseAuthOptions}>
                <DevToolsProvider>
                    <ThemeProvider>
                        <ToastProvider>
                            <SafesProvider>{children}</SafesProvider>
                        </ToastProvider>
                    </ThemeProvider>
                </DevToolsProvider>
            </Connect>
        </Provider>
    )
}

export default Providers;