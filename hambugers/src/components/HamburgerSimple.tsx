import React from 'react';
import './HamburgerSimple.css';

export const HamburgerSimple: React.FC = () => {
    return(<button className='hamburger-btn' aria-controls='primary-navigation' aria-expanded='false'>
        <svg className='hamburger' viewBox='0 0 100 100' width={'250'} >
            <rect className='line top'
                width={'80'}
                height={'10'}
                x={'10'}
                y={'25'}
                rx={'5'}
            ></rect>
            <rect className='line middle'
                width={'80'}
                height={'10'}
                x={'10'}
                y={'45'}
                rx={'5'}
            ></rect>
            <rect className='line bottom'
                width={'80'}
                height={'10'}
                x={'10'}
                y={'65'}
                rx={'5'}
            ></rect>
        </svg>
    </button>);
};
