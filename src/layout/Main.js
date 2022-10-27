import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Header></Header>
            <div className='container'>
                <div className='grid grid-cols-12 gap-2'>
                    <div className='md:col-span-9 col-span-12'>
                        <Outlet></Outlet>
                    </div>
                    <div className='col-span-3 hidden lg:block'>
                        <RightSideNav></RightSideNav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;