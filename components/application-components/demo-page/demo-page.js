var ads = require('services/advertisement.json');
var Footer = require('components/core-components/footer');
var Header = require('components/core-components/header');
var Logo = require('components/core-components/logo');
var NavigationBar = require('components/core-components/navigation-bar');
var NewsGrid = require('components/common-components/news-grid');
var NewsGridMobile = require('components/common-components/news-grid-mobile');
var Placement = require('components/core-components/placement');
var React = require('react');
var SliderNews = require('components/common-components/slider-news');
var storeProductApi = require('services/store-product/store-product-api');

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
        var isMobile = (window.screen.width < 1180);
        var NewsStore = this.state.news.records;
        var HighlightedNews = [];

        NewsStore.forEach(function (item) {
          if (item.ubicacion === "0") {
            HighlightedNews.push(item);
          }
        });

        return (
            <div className="demo-page">
              <NavigationBar />
              <div className="demo-page-highlighted">
                <SliderNews>{HighlightedNews}</SliderNews>
              </div>
              <div className="demo-page-main">
                {this.renderNewsGrid(ads, NewsStore, isMobile)}
              </div>
              <div className="demo-page-footer">
                <Footer />
              </div>
            </div>
        );
    },

    renderNewsGrid: function (ads, NewsStore, isMobile) {
      var grid = (isMobile) ? <NewsGridMobile advertisment={ads}>{NewsStore}</NewsGridMobile> : <NewsGrid advertisment={ads}>{NewsStore}</NewsGrid>;

      return grid;
    }
});

module.exports = DemoPage;
