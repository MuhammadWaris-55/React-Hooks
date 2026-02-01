import React, { useState } from 'react'

const useToggle = (defaultVal) => {
    const [value, setvalue] = useState(defaultVal);

    function toggleValue(val) {
        if (typeof val != 'boolean') {
            setvalue(!value);
        }
        else {
            setvalue(val);
        }
    };
    return [value, toggleValue];
};

export default useToggle;
