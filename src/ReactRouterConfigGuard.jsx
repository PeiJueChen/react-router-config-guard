
import React from "react";
import { Switch } from "react-router";
import RouterGuard from './RouterGuard.jsx';
import ContextProvider from './ContextProvider.jsx';

const reactRouter = require('react-router');

var _extends = function () {
    _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    return _extends.apply(this, arguments);
}



var routerBeforeEach;

var routerAfterEach;

export const setRouterEach = (before, after) => {
    routerBeforeEach = before;
    routerAfterEach = after;
}

// renderRoutes(routes, extraProps = {}, switchProps = {})
export function renderRoutes(routes, extraProps = {}, switchProps = {}) {

    if (extraProps === void 0) {
        extraProps = {};
    }

    if (switchProps === void 0) {
        switchProps = {};
    }

    if (!routes) return null;


    return (
        <ContextProvider childrens={
            <Switch switchProps={switchProps} extraProps={extraProps}>
                {

                    routes.map((route, i) => {
                        const genParams = (props) => (_extends({}, props, {}, extraProps, {
                            route: route
                        }));
                        const render_ = (props) => {
                            let params = genParams(props);
                            return route.render ?
                                route.render(params) :
                                <RouterGuard routerBeforeEach={routerBeforeEach} routerAfterEach={routerAfterEach} {...params} />
                        }
                        return React.createElement(reactRouter.Route, {
                            key: route.key || i,
                            path: route.path,
                            exact: route.exact,
                            strict: route.strict,
                            render: render_
                        })
                    })
                }

            </Switch>
        }>

        </ContextProvider>

    )
}

export function matchRoutes(routes, pathname,
    /*not public API*/
    branch) {
    if (branch === void 0) {
        branch = [];
    }

    routes.some(function (route) {
        var match = route.path ? reactRouter.matchPath(pathname, route) : branch.length ? branch[branch.length - 1].match // use parent match
            : reactRouter.Router.computeRootMatch(pathname); // use default "root" match

        if (match) {
            branch.push({
                route: route,
                match: match
            });

            if (route.routes) {
                matchRoutes(route.routes, pathname, branch);
            }
        }

        return match;
    });
    return branch;
}

