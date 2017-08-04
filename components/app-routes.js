var DemoPage = require('components/application-components/demo/demo-page');
var IndexPage = require('components/application-components/index-page');
var React = require('react');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;

var appRoutes = (
    <Router history={browserHistory}>
        <Route path="/" component={IndexPage} />
        <Route path="/index.html" component={IndexPage} />
        <Route path="/demo.html" component={DemoPage} />
    </Router>
);

module.exports = appRoutes;
