import React from 'react';
import { useAccentColor } from '../Context/AccentColorContext';

const Orb = () => {
    const { accentColor } = useAccentColor();

    return (
    <div className={`fixed bottom-40 right-[300px] z-[-100] opacity-50 rounded-full ${accentColor} w-[348px] h-[348px] blur-[100px]`}>

    </div>
    );

}

export default Orb;