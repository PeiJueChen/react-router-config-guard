!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(this,(function(){return function(){"use strict";var t={297:function(t){t.exports=require("react")},374:function(t){t.exports=require("react-router")}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var u=e[n]={exports:{}};return t[n](u,u.exports,r),u.exports}r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};return function(){r.r(n),r.d(n,{matchRoutes:function(){return q},renderRoutes:function(){return M},setRouterEach:function(){return D}});var t=require("react-router-dom"),e=r(374),o=(0,r(297).createContext)(null);function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,u=void 0;try{for(var c,i=t[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!e||r.length!==e);n=!0);}catch(t){o=!0,u=t}finally{try{n||null==i.return||i.return()}finally{if(o)throw u}}return r}}(t,e)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s=r(297),y=r(297),b=y.useState,m=y.useContext,h=r(297),v=h.memo,d=h.useCallback,O=h.useEffect,g=v((function(r){var n=r.routerBeforeEach,a=r.routerAfterEach,f=r.route,p=r.history,y=m(o),h=m(e.__RouterContext),v=d((function(){return l(l({},h),{},{meta:f.meta||{},route:f})}),[h,f]),g=i(b(!1),2),j=g[0],x=g[1],P=i(b(""),2),S=P[0],E=P[1],w=i(b(!1),2),R=w[0],A=w[1],C=i(b(!1),2),_=C[0],k=C[1],D=d((function(t,e,r){n&&n(t,e,r)}),[n]);return O((function(){n?D(v(),y,(function(t){t?"string"==typeof t?(E(t),k(!1),A(!0),x(!0)):"object"!==c(t)||"string"!=typeof t.path&&"string"!=typeof t.name?(console.log("Your next format is incorrect, should be : next('/') or next({ path: '/' }) or next({ path: '/', replace: true})"),A(!1),x(!0)):(E(t.path||t.name),k(t.replace||!1),A(!0),x(!0)):(A(!1),x(!0))})):(x(!0),A(!1))}),[D]),j?R&&S?(a&&a(v()),_?s.createElement(t.Redirect,u({to:S},r)):p?(p.push(S),null):s.createElement(t.Route,u({to:S},r))):(a&&a(v()),s.createElement(f.component,r)):null})),j=r(297),x=r(297),P=x.memo,S=x.useContext,E=P((function(t){var r,n,u=t.childrens,c=S(e.__RouterContext),i=(r=c,n=(0,j.useRef)(r),(0,j.useEffect)((function(){n.current=r})),n.current);return React.createElement(o.Provider,{value:i},u)}));function w(){return(w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var R,A,C=r(297),_=r(374),k=function(){return(k=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)},D=function(t,e){R=t,A=e},M=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return void 0===r&&(r={}),void 0===n&&(n={}),e?C.createElement(E,{childrens:C.createElement(t.Switch,{switchProps:n,extraProps:r},e.map((function(t,e){return C.createElement(_.Route,{key:t.key||e,path:t.path,exact:t.exact,strict:t.strict,render:function(e){var n=function(e){return k({},e,{},r,{route:t})}(e);return t.render?t.render(n):C.createElement(g,w({routerBeforeEach:R,routerAfterEach:A},n))}})})))}):null},q=function t(e,r,n){return void 0===n&&(n=[]),e.some((function(e){var o=e.path?_.matchPath(r,e):n.length?n[n.length-1].match:_.Router.computeRootMatch(r);return o&&(n.push({route:e,match:o}),e.routes&&t(e.routes,r,n)),o})),n}}(),n}()}));