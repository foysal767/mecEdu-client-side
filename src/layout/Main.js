import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;