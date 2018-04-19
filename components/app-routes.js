var DemoPage = require('components/application-components/demo-page/demo-page');
var IndexPage = require('components/application-components/index-page/index-page');
var CategoryPage = require('components/application-components/category-page/category-page');
var ShowNews = require('components/application-components/show-news/show-news');
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
        <Route path="/category.html" component={CategoryPage} />
        <Route path="/demo.html" component={DemoPage} />
        <Route path="/news.html" component={ShowNews} />
    </Router>
);

module.exports = appRoutes;
