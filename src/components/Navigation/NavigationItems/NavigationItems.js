import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const NAV_ARR = [
    { name: 'Home', route: '/' },
    { name: 'Music', route: '/music' },
    // { name: 'Us', route: '/us' },
    // { name: 'Pics', route: '/gallery' },
    { name: 'Dev', route: '/dev' }
]

const NavigationItems = () => (

        <ul className="navi-items">
            {
                NAV_ARR.map((item, index) => {
                    return (
                        <NavigationItem link={item.route} key={item.index}>
                            {item.name}
                        </NavigationItem>
                    );
                })}
        </ul>
);

export default NavigationItems;