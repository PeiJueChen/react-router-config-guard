(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-router')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-router'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ReactRouterConfigGuard = {}, global.React, global.ReactRouter));
}(this, (function (exports, React, reactRouter$1) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  function _extends() {
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

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var FromRouteContext = /*#__PURE__*/React.createContext(null);

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
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

  var RouterGuard = /*#__PURE__*/React.memo(function (props) {
    // console.log("init RouterGuard");
    var routerBeforeEach = props.routerBeforeEach,
        routerAfterEach = props.routerAfterEach,
        route = props.route,
        history = props.history;
    var from = React.useContext(FromRouteContext);
    var to = React.useContext(reactRouter$1.__RouterContext);
    var getTo = React.useCallback(function () {
      return _objectSpread(_objectSpread({}, to), {}, {
        meta: route.meta || {},
        route: route
      });
    }, [to, route]); // const hasRouteGuard = !!routerBeforeEach;

    var _useState = React.useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        routeGuardFinished = _useState2[0],
        setRouteGuardFinished = _useState2[1];

    var _useState3 = React.useState(""),
        _useState4 = _slicedToArray(_useState3, 2),
        redirectPath = _useState4[0],
        setRedirectPath = _useState4[1];

    var _useState5 = React.useState(false),
        _useState6 = _slicedToArray(_useState5, 2),
        guardToRedirect = _useState6[0],
        setGuardToRedirect = _useState6[1];

    var _useState7 = React.useState(false),
        _useState8 = _slicedToArray(_useState7, 2),
        isRedirect = _useState8[0],
        setIsRedirect = _useState8[1];

    var hook = React.useCallback(function (to, from, next) {
      routerBeforeEach && routerBeforeEach(to, from, next);
    }, [routerBeforeEach]);
    React.useEffect(function () {
      if (!routerBeforeEach) {
        setRouteGuardFinished(true);
        setGuardToRedirect(false);
      } else {
        hook(getTo(), from, function (to) {
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
            } else if (_typeof(to) === 'object' && (typeof to.path === 'string' || typeof to.name === 'string')) {
              setRedirectPath(to.path || to.name);
              setIsRedirect(to.replace || false);
              setGuardToRedirect(true);
              setRouteGuardFinished(true);
            } else {
              console.log("Your next format is incorrect, should be : next('/') or next({ path: '/' }) or next({ path: '/', replace: true})");
              setGuardToRedirect(false);
              setRouteGuardFinished(true);
            }
          }
        });
      } // eslint-disable-next-line react-hooks/exhaustive-deps

    }, [hook]);

    if (!routeGuardFinished) {
      return null;
    }

    if (guardToRedirect && redirectPath) {
      routerAfterEach && routerAfterEach(getTo());

      if (isRedirect) {
        return /*#__PURE__*/React__default['default'].createElement(reactRouter$1.Redirect, _extends({
          to: redirectPath
        }, props));
      } else {
        if (history) {
          history.push(redirectPath);
          return null;
        } else {
          return /*#__PURE__*/React__default['default'].createElement(reactRouter$1.Route, _extends({
            to: redirectPath
          }, props));
        }
      }
    }

    routerAfterEach && routerAfterEach(getTo());
    return /*#__PURE__*/React__default['default'].createElement(route.component, props);
  });

  /**
   * React hook for storing the previous value of the
   * given value.
   *
   * @param value the value to store
   * @returns the previous value
   */

  function usePrevious(value) {
    var ref = React.useRef(value);
    React.useEffect(function () {
      ref.current = value;
    }); // Can be used to display custom hook tags in React developer tools. 
    // useDebugValue(ref.current);

    return ref.current;
  }

  var ContextProvider = /*#__PURE__*/React.memo(function (_ref) {
    var childrens = _ref.childrens;
    var routerContext = React.useContext(reactRouter$1.__RouterContext);
    var from = usePrevious(routerContext);
    return /*#__PURE__*/React__default['default'].createElement(FromRouteContext.Provider, {
      value: from
    }, childrens);
  });

  var reactRouter = require('react-router');

  var _extends2 = function _extends() {
    _extends2 = Object.assign || function (target) {
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

    return _extends2.apply(this, arguments);
  };

  var routerBeforeEach;
  var routerAfterEach;
  var setRouterEach = function setRouterEach(before, after) {
    routerBeforeEach = before;
    routerAfterEach = after;
  }; // renderRoutes(routes, extraProps = {}, switchProps = {})

  function renderRoutes(routes) {
    var extraProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var switchProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (extraProps === void 0) {
      extraProps = {};
    }

    if (switchProps === void 0) {
      switchProps = {};
    }

    if (!routes) return null;
    return /*#__PURE__*/React__default['default'].createElement(ContextProvider, {
      childrens: /*#__PURE__*/React__default['default'].createElement(reactRouter$1.Switch, {
        switchProps: switchProps,
        extraProps: extraProps
      }, routes.map(function (route, i) {
        var genParams = function genParams(props) {
          return _extends2({}, props, {}, extraProps, {
            route: route
          });
        };

        var render_ = function render_(props) {
          var params = genParams(props);
          return route.render ? route.render(params) : /*#__PURE__*/React__default['default'].createElement(RouterGuard, _extends({
            routerBeforeEach: routerBeforeEach,
            routerAfterEach: routerAfterEach
          }, params));
        };

        return /*#__PURE__*/React__default['default'].createElement(reactRouter.Route, {
          key: route.key || i,
          path: route.path,
          exact: route.exact,
          strict: route.strict,
          render: render_
        });
      }))
    });
  }
  function matchRoutes(routes, pathname,
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

  exports.matchRoutes = matchRoutes;
  exports.renderRoutes = renderRoutes;
  exports.setRouterEach = setRouterEach;
  exports.usePrevious = usePrevious;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=react-router-config-guard.js.map
