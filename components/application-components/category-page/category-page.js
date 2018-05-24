var ads = require('services/advertisement.json');
var Footer = require('components/core-components/footer');
var NavigationBar = require('components/core-components/navigation-bar');
var NewsGrid = require('components/common-components/news-grid');
var NewsGridMobile = require('components/common-components/news-grid-mobile');
var React = require('react');
var SliderNews = require('components/common-components/slider-news');
var storeProductApi = require('services/store-product/store-product-api');

var CategoryPage = React.createClass({

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
        var currentCategory = window.location.search.substr(1);
        var filtredNews = [];
        var HighlightedNews = [];

        NewsStore.forEach(function (item) {
            if (item.ubicacion === "0" && item.category_id === currentCategory) {
                HighlightedNews.push(item);
            }
        });
        NewsStore.forEach(function (item) {
            if (item.category_id === currentCategory) {
                filtredNews.push(item);
            }
        });

        return (
            <div className="category-page">
                <NavigationBar />
                {this.renderSlider(HighlightedNews)}
                <div className="category-page-main">
                    {this.renderNewsGrid(ads, filtredNews, isMobile)}
                </div>
                <div className="category-page-footer">
                    <Footer />
                </div>
            </div>
        );
    },

    renderSlider: function (HighlightedNews) {
        var render;
        var empty = (
            <div className="category-page-highlighted--empty"></div>
        );
        var slider = (<div className="category-page-highlighted">
            <SliderNews>{HighlightedNews}</SliderNews>
        </div>);
        if (HighlightedNews.length < 6) {
            render = empty;
        } else {
            render = slider;
        }

        return render;
    },

    renderNewsGrid: function (ads, NewsStore, isMobile) {
        var grid = (isMobile) ? <NewsGridMobile advertisment={ads}>{NewsStore}</NewsGridMobile> : <NewsGrid advertisment={ads}>{NewsStore}</NewsGrid>;

        return grid;
    },

    renderCategroryName: function (category) {
        var customClass = 'category-page-name--' + category.toLowerCase();
        var layoutCategoryName = <div className={customClass}>{category}</div>;

        return layoutCategoryName;
    },
});

module.exports = CategoryPage;
