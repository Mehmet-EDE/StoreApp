import React from 'react'
import { Router } from './Router'
import AuthProvider from '../src/context/AuthProvider'

export  function Wrapper() {
    return (
        <AuthProvider>
            <Router />
        </AuthProvider>
    );
};

