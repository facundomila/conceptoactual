var React = require('react');
var Footer = require('components/core-components/footer');
var Header = require('components/core-components/header');
var storeProductApi = require('services/store-product/store-product-api');
var NewsGrid = require('components/common-components/news-grid');
var SliderNews = require('components/common-components/slider-news');
var Logo = require('components/core-components/logo');
var NavigationBar = require('components/core-components/navigation-bar');
var Placement = require('components/core-components/placement');

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
        var HighlightedNews = [];

        NewsStore.forEach(function (item) {
          if (item.ubicacion === "0") {
            HighlightedNews.push(item);
          }
        });

        return (
            <div className="demo-page">
              <Header>
                <Logo />
              </Header>
              <NavigationBar />
              <div className="demo-page-highlighted">
                <SliderNews>{HighlightedNews}</SliderNews>
              </div>
              <div className="demo-page-ads">
                <img src='images/lolla.png' />
              </div>
              <div className="demo-page-main">
                <NewsGrid>{NewsStore}</NewsGrid>
              </div>
              <div className="demo-page-ads2">
                <img src='images/stafecultura.jpg' />
              </div>
              <div className="demo-page-footer">
                <Footer />
              </div>
            </div>
        );
    }
});

module.exports = DemoPage;
