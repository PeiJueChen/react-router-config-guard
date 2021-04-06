
const React = require('react');
const { useState, useContext } = require('react');
const { memo, useCallback, useEffect } = require('react');
import { Redirect, Route } from 'react-router-dom'
import { __RouterContext as RouterContext } from 'react-router';
import { FromRouteContext } from './Contexts';


// const from = createContext(FromRouteContext);
// const to = createContext(RouterContext);
// class RouterGuard2 extends React.PureComponent {

//     hasRouteGuard
//     guardToRedirect = false;
//     isRedirect = false;
//     redirectPath = "";
//     constructor(props) {
//         super(props);
//         this.hasRouteGuard = !!this.props.routerBeforeEach;
//         this.state = {
//             routeGuardFinished: false,
//         }
//     }

//     getTo() {
//         return { ...to, meta: this.props.route.meta || {}, route: this.props.route }
//     }

//     componentDidMount() {
//         if (!this.hasRouteGuard) {
//             return;
//         }

//         this.props.routerBeforeEach(this.getTo(), from, (to) => {
//             if (!to) {
//                 this.guardToRedirect = false;
//                 this.setState({
//                     routeGuardFinished: true
//                 })
//             } else {
//                 if (typeof to === 'string') {
//                     this.redirectPath = to;
//                     this.isRedirect = false;
//                     this.guardToRedirect = true;
//                     this.setState({
//                         routeGuardFinished: true
//                     })
//                 } else if (typeof to === 'object' && (typeof to.path === 'string' || typeof to.name === 'string')) {
//                     this.redirectPath = to.path || to.name;
//                     this.isRedirect = to.replace || false;
//                     this.guardToRedirect = false;
//                     this.setState({
//                         routeGuardFinished: true
//                     })
//                 } else {
//                     console.log(`Your next format is incorrect, should be : next('/') or next({ path: '/' }) or next({ path: '/', replace: true})`);
//                     this.guardToRedirect = false;
//                     this.setState({
//                         routeGuardFinished: true
//                     })
//                 }
//             }
//         })

//     }

//     render() {

//         var { routerAfterEach, route, history } = this.props

//         if (!this.state.routeGuardFinished) {
//             return null;
//         }

//         if (this.guardToRedirect && this.redirectPath) {
//             routerAfterEach && routerAfterEach(this.getTo());
//             if (this.isRedirect) {
//                 return <Redirect to={this.redirectPath} {...this.props} />
//             } else {
//                 if (history) {
//                     history.push(this.redirectPath);
//                     return null;
//                 } else {
//                     return <Route to={this.redirectPath} {...this.props} />
//                 }
//             }
//         }

//         routerAfterEach && routerAfterEach(this.getTo());
//         return React.createElement(route.component, this.props);
//     }
// }


const RouterGuard = memo(function (props) {
    // console.log("init RouterGuard");

    var { routerBeforeEach, routerAfterEach, route, history } = props
    const from = useContext(FromRouteContext);
    const to = useContext(RouterContext);

    const getTo = useCallback(() => {
        return { ...to, meta: route.meta || {}, route }
    }, [to, route])
    // const hasRouteGuard = !!routerBeforeEach;
    const [routeGuardFinished, setRouteGuardFinished] = useState(false);
    const [redirectPath, setRedirectPath] = useState("");
    const [guardToRedirect, setGuardToRedirect] = useState(false);
    const [isRedirect, setIsRedirect] = useState(false);

    const hook = useCallback((to, from, next) => {
        routerBeforeEach && routerBeforeEach(to, from, next);
    }, [routerBeforeEach])

    useEffect(() => {

        if (!routerBeforeEach) {
            setRouteGuardFinished(true);
            setGuardToRedirect(false);
        } else {
            hook(getTo(), from, (to) => {
                if (!to) {
                    setGuardToRedirect(false);
                    setRouteGuardFinished(true);
                } else {
                    // next('/') or next({ path: '/' }) -> redirect
                    if (typeof to === 'string') {
                        setRedirectPath(to);
                        setIsRedirect(false);
                        setGuardToRedirect(true);
                        setRouteGuardFinished(true);
                    } else if (typeof to === 'object' && (typeof to.path === 'string' || typeof to.name === 'string')) {
                        setRedirectPath(to.path || to.name);
                        setIsRedirect(to.replace || false);
                        setGuardToRedirect(true);
                        setRouteGuardFinished(true);
                    } else {
                        console.log(`Your next format is incorrect, should be : next('/') or next({ path: '/' }) or next({ path: '/', replace: true})`);
                        setGuardToRedirect(false);
                        setRouteGuardFinished(true);
                    }
                }

            })
        }

// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hook])

    if (!routeGuardFinished) {
        return null;
    }

    if (guardToRedirect && redirectPath) {
        routerAfterEach && routerAfterEach(getTo());
        if (isRedirect) {
            return <Redirect to={redirectPath} {...props} />
        } else {
            if (history) {
                history.push(redirectPath);
                return null;
            } else {
                return <Route to={redirectPath} {...props} />
            }
        }
    }

    routerAfterEach && routerAfterEach(getTo());

    return React.createElement(route.component, props);
})

export default RouterGuard;