import React from 'react';
import Header from '../header/Header';

const AppLayout = ({ children }) => {

    return (
        <>
        <div className='appLayout'>     
            {children}
        </div>
        </>
    );
};

export default AppLayout;