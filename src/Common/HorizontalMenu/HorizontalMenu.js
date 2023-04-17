import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


const HorizontalMenu = () => {
    const labels = useSelector(state => state.common_state.labels);

    return(
<div>Horizontal Menu</div>
    );
}

export default HorizontalMenu;