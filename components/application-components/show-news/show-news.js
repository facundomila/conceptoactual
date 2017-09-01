var _ = require('lodash');
var React = require('react');
var Footer = require('components/core-components/footer');
var Header = require('components/core-components/header');
var storeProductApi = require('services/store-product/store-product-api');
var NewsGrid = require('components/common-components/news-grid');
var Logo = require('components/core-components/logo');
var NavigationBar = require('components/core-components/navigation-bar');
var Placement = require('components/core-components/placement');
var Notice = require('components/common-components/notice');
var Placement = require('components/core-components/placement');

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

        var recomended = [
          NewsStore[0],
          NewsStore[1],
          NewsStore[2]
        ];

        return (
            <div className="show-news-page">
              <NavigationBar />
              <Notice>{itemToRender}</Notice>
              <div className="show-news-page-ads2">
                <Placement type="small"/>
              </div>
              <div className="show-news-page-recomended">
                <NewsGrid>{recomended}</NewsGrid>
              </div>
              <div className="show-news-page-footer">
                <Footer />
              </div>
            </div>
        );
    }
});

module.exports = ShowNews;
