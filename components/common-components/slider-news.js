var SliderItem = require('components/common-components/slider-item');
var React = require('react');

var SliderNews = React.createClass({

    render: function () {
        var news = this.props.children;

        return (
            <div className="slider-news">
              <div className="slider-news-container">
                <SliderItem>{this.getItem()}</SliderItem>
                <a className="slider-news-container-prev" onClick={this.prevItem}>&#10094;</a>
                <a className="slider-news-container-next" onClick={this.nextItem}>&#10095;</a>
              </div>
              <div className="slider-news-status">
                <span className="slider-news-status-dot"></span>
                <span className="slider-news-status-dot"></span>
                <span className="slider-news-status-dot"></span>
                <span className="slider-news-status-dot"></span>
                <span className="slider-news-status-dot"></span>
                <span className="slider-news-status-dot"></span>
              </div>
            </div>
        );
    }

});

module.exports = SliderNews;
