import React from 'react'
import { Switch } from 'react-router-dom';
import RouterGuard from './RouterGuard';
import ContextProvider from './ContextProvider';

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
//  = (to, from, next) => {
//     console.log("routerBeforeEach to:", to, from);
//     if (to && to.meta && to.meta.auth) {
//         // setTimeout(() => {
//         //     next({
//         //         path: '/',
//         //         replace: true
//         //     });
//         // }, 800);
//         next({
//             path: '/',
//             replace: true
//         });

//     } else {
//         next();
//     }
// }

var routerAfterEach;
//  = (to) => {
//     console.log("JJ ~ file: react-router-config.js ~ line 44 ~ routerAfterEach ~ to", to)

// }


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

// export function renderRoutes(routes, extraProps = {}, switchProps = {}) {
//     if (extraProps === void 0) {
//         extraProps = {};
//     }

//     if (switchProps === void 0) {
//         switchProps = {};
//     }
//     if (!routes) return null;
//     return (
//         React.createElement(reactRouter.Switch, switchProps, routes.map(function (route, i) {

//             return React.createElement(reactRouter.Route, {
//                 key: route.key || i,
//                 path: route.path,
//                 exact: route.exact,
//                 strict: route.strict,
//                 render: function render(props) {
//                     return route.render ? route.render(_extends({}, props, {}, extraProps, {
//                         route: route
//                     })) : React.createElement(route.component, _extends({}, props, extraProps, {
//                         route: route
//                     }));
//                 }
//             })

//         }))
//     )
// }

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

