import { useDebugValue, useEffect, useRef } from 'react';

/**
 * React hook for storing the previous value of the
 * given value.
 *
 * @param value the value to store
 * @returns the previous value
 */
function usePrevious(value) {
    const ref = useRef(value);

    useEffect(() => {
        ref.current = value;
    });

    // Can be used to display custom hook tags in React developer tools. 
    // useDebugValue(ref.current);

    return ref.current;
}

export default usePrevious;
