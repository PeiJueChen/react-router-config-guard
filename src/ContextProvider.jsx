const { memo, useContext } = require('react');
import { __RouterContext as RouterContext } from 'react-router';
import usePrevious from './hooks/usePrevious';
import { FromRouteContext } from './Contexts';
const ContextProvider = memo(function ({ childrens }) {
    const routerContext = useContext(RouterContext);
    const from = usePrevious(routerContext);

    return (
        <FromRouteContext.Provider value={from}>
            {childrens}
        </FromRouteContext.Provider>
    )

})

export default ContextProvider;