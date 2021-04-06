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

    // 可用于在 React 开发者工具中显示自定义 hook 的标签。
    // useDebugValue(ref.current);

    return ref.current;
}

export default usePrevious;
