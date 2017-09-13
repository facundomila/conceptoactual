var _ = require('lodash');
var NewItem = require('components/common-components/new-item');
var React = require('react');
var Placement = require('components/core-components/placement');

var NewsGrid = React.createClass({

    render: function () {
        var news = this.props.children;
        var ads = this.props.advertisment.ads;

        var place_0 = ads.place_0;
        var place_1 = ads.place_1;

        console.log('news: ',news)

        return (
            <div className="news-grid">
                {this.renderAds(place_0)}
                {this.renderNewsXthree()}
                {this.renderAds(place_1)}
                {this.renderNewsXone()}
                {this.renderAds(place_0)}
                {this.renderNewsXtwo()}
                {this.renderNewsXone()}
                {this.renderAds(place_1)}
                {this.renderNewsXthree()}
                {this.renderNewsXone()}
                {this.renderAds(place_0)}
                {this.renderNewsXtwo()}
                {this.renderNewsXone()}
                {this.renderAds(place_1)}
                {this.renderNewsXthree()}
                {this.renderNewsXone()}
                {this.renderAds(place_0)}
                {this.renderNewsXtwo()}
                {this.renderNewsXone()}
                {this.renderAds(place_1)}
                {this.renderNewsXthree()}
                {this.renderNewsXone()}
                {this.renderAds(place_0)}
            </div>
        );
    },

    renderAds: function (ads) {
        console.log(ads)
    },

    renderNewsXthree: function () {
        console.log()
    },

    renderNewsXtwo: function () {
        console.log()
    },

    renderNewsXone: function () {
      console.log()
    }

    // renderItems: function (item, key) {
    //   return <NewItem key={key}>{item}</NewItem>;
    // },

    // getProcessedNews: function () {
    //   var processedNews = [];
    //   var largeAdIndex = 0;
    //
    //   this.props.children.map(function (item, key) {
    //     processedNews.push(this.renderItems(item, key));
    //
    //     if (key % 3 == 2) {
    //       processedNews.push(this.renderAds(largeAdIndex));
    //       largeAdIndex++;
    //     }
    //   }, this);
    //
    //   return processedNews;
    // },

    // renderAds: function (largeAdIndex) {
    //   return (
    //     <div>
    //       <Placement type="large" index={largeAdIndex} />
    //     </div>
    //   );
    // }
});

module.exports = NewsGrid;
