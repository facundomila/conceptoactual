var ads = require('services/advertisement.json');
var Footer = require('components/core-components/footer');
var NavigationBar = require('components/core-components/navigation-bar');
var NewsGrid = require('components/common-components/news-grid');
var NewsGridMobile = require('components/common-components/news-grid-mobile');
var React = require('react');
var SliderNews = require('components/common-components/slider-news');
var storeProductApi = require('services/store-product/store-product-api');

var IndexPage = React.createClass({

    getInitialState: function () {
        return {
            news: ''
        };
    },

    componentDidMount: function () {
        window.addEventListener('load', this.getStickyBar)
    },

    componentWillMount: function () {
        var newsObj = storeProductApi({
            method: 'GET',
            url: 'http://conceptoactual.com.ar/api/news/read.php'
        });

        return this.setState({ news: JSON.parse(newsObj) })
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
            <div className="index-page">
                <NavigationBar />
                <div className="index-page-highlighted">
                    <SliderNews>{HighlightedNews}</SliderNews>
                </div>
                <div className="index-page-main">
                    {this.renderNewsGrid(ads, NewsStore, isMobile)}
                </div>
                <div className="index-page-footer">
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

module.exports = IndexPage;
