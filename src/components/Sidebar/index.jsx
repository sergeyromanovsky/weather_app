import React from 'react';

import AddCity from "./AddCity";
import CityList from './CityList';
import SideDrawer from "./SideDrawer";

const Sidebar = () => {
    return (
        <SideDrawer>
            <CityList />
            <AddCity />
        </SideDrawer>
    );
};

export default Sidebar;
