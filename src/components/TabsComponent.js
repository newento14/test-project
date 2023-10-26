import React from 'react';
import { Link } from "react-router-dom";
import { Tab, Tabs } from "@mui/material";

const TabsComponent = ({ value, tabs }) => {

    return (
        <Tabs value={value} centered>
            {tabs.map((x) => (
                <Link key={x.id} to={x.id}>
                    <Tab label={x.title}/>
                </Link>
            ))}
        </Tabs>
    );
};

export default TabsComponent;
