var React = require('react');
var Footer = require('components/core-components/footer');
var Header = require('components/core-components/header');
var storeProductApi = require('services/store-product/store-product-api');
var NewsGrid = require('components/common-components/news-grid');
var Logo = require('components/core-components/logo');
var NavigationBar = require('components/core-components/navigation-bar');
var Placement = require('components/core-components/placement');
var Notice = require('components/common-components/notice');

var ShowNews = React.createClass({

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
        var handleItem = this.props.location.query.id;
        var itemToRender = [];

        NewsStore.forEach(function (item) {
          if (item.id === handleItem) {
            itemToRender.push(item);
          }
        });

        return (
            <div className="show-news-page">
              <Header>
                <Logo />
              </Header>
              <NavigationBar />
              <Notice>{itemToRender}</Notice>
              <Placement ad="santafe" />
              <Footer />
            </div>
        );
    }
});

module.exports = ShowNews;
