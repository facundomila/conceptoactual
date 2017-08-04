var React = require('react');
var Footer = require('components/core-components/footer');
var Header = require('components/core-components/header');
var storeProductApi = require('services/store-product/store-product-api');
var NewsGrid = require('components/common-components/news-grid');
var Logo = require('components/core-components/logo');

var DemoPage = React.createClass({

    getInitialState: function() {
        return {
            news: ''
        };
    },

    componentWillMount: function () {
        var newsObj = storeProductApi({
            method: 'GET',
            url: 'http://conceptoactual.com.ar/api/news/read.php'
        });

        return this.setState({news: JSON.parse(newsObj)})
    },

    render: function () {
        var NewsStore = this.state.news.records;

        return (
            <div className="demo-page">
              <Header>
                <Logo />
              </Header>
              <div className="demo-page-main">
                <NewsGrid>{NewsStore}</NewsGrid>
              </div>
              <Footer />
            </div>
        );
    }
});

module.exports = DemoPage;
