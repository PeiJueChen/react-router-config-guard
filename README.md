### [Base on](https://www.npmjs.com/package/react-router-config)

### install

```js
    $ npm install --save react-router-config-guard
```

### usage

``` js
import {
    renderRoutes,
    setRouterEach,
    matchRoutes
} from "react-router-config-guard";

const routes = [{
        path: '/',
        exact: true,
        title: "Music",
        render: () => ( 
            <Redirect to="/discover" />
        )
    },
    {
        path: '/discover',
        component: JJDiscover,
        routes: [{
                path: "/discover",
                exact: true,
                title: "Discover",
                render: () => ( 
                    <Redirect to="/discover/recommend" />
                )
            },
            {
                path: "/discover/recommend",
                exact: true,
                title: "Discover-Recommend",
                component: JJRecommend
            }
        ]
    },
    {
        path: '/mine',
        meta: {
            auth: true
        },
        title: "My Music",
        component: JJMine
    },
    {
        path: '/friend',
        title: "Friend",
        component: JJFriend
    },
    {
        path: '*',
        title: "Music",
        render: () => ( 
            <Redirect to="/discover/recommend" />
        )
    }
]

// setRouterEach(beforeEach,afterEach)
setRouterEach((to, from, next) => {
    let route = to.route || {};
    let title = route.title || "";
    if (title) {
        document.title = title;
    }

    if (to && to.meta && to.meta.auth) {
        if (!userLogin) {
            next({
                path: '/login',
                // will Redirect
                replace: true
            });
        } else {
            next();
        }
    } else {
        next();
    }

}, (to) => {
    
});

const Root = ({ route }) => ( 
    <div>
    <h1 > Root </h1> 
    {
        /* child routes won't render without this */ } {
        renderRoutes(route.routes)
    } 
    </div>
);

const Home = ({ route }) => ( 
    <div >
        <h2 > Home < /h2> 
    </div>
);

const Child = ({ route }) => ( 
    <div>
    <h2 > Child </h2> 
    {
        /* child routes won't render without this */ } {
        renderRoutes(route.routes, {
            someProp: "these extra props are optional"
        })
    } 
    </div>
);

const GrandChild = ({ someProp }) => ( 
    <div>
        <h3 > Grand Child </h3> 
        <div> 
        {
           someProp
        } 
        </div> 
    </div>
);

ReactDOM.render( 
    <BrowserRouter> 
    {/* kick it all off with the root route */ } 
    {
        renderRoutes(routes)
    } 
    </BrowserRouter>,
    document.getElementById("root")
);
```

### matchRoutes info / more info
* Please [check](https://www.npmjs.com/package/react-router-config)



