import React from "react";
import { memo, useContext } from 'react';
import { __RouterContext as RouterContext } from 'react-router';
import usePrevious from './hooks/usePrevious.jsx';
import { FromRouteContext } from './Contexts.jsx';
const ContextProvider = memo(function ({ childrens }) {
    const routerContext = useContext(RouterContext);
    const from = usePrevious(routerContext);
    return <FromRouteContext.Provider value={from}>{childrens}</FromRouteContext.Provider>

})

export default ContextProvider;