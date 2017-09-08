var _ = require('lodash');
var NewItem = require('components/common-components/new-item');
var React = require('react');
var Placement = require('components/core-components/placement');

var NewsGrid = React.createClass({

    render: function () {
        var news = this.props.children;

        return (
            <div className="news-grid">
                {this.getProcessedNews()}
            </div>
        );
    },

    renderItems: function (item, key) {
      return <NewItem key={key}>{item}</NewItem>;
    },

    getProcessedNews: function () {
      var processedNews = [];
      var largeAdIndex = 0;

      this.props.children.map(function (item, key) {
        processedNews.push(this.renderItems(item, key));

        if (key % 3 == 2) {
          processedNews.push(this.renderAds(largeAdIndex));
          largeAdIndex++;
        }
      }, this);

      return processedNews;
    },

    renderAds: function (largeAdIndex) {
      return <Placement type="large" index={largeAdIndex} />;
    }
});

module.exports = NewsGrid;
