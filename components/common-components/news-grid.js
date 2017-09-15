var _ = require('lodash');
var NewItem = require('components/common-components/new-item');
var React = require('react');
var PlacementBlock = require('components/common-components/placement-block');

var NewsGrid = React.createClass({

    render: function () {
        var news = this.props.children;
        var ads = this.props.advertisment.ads;

        var place_0 = ads.place_0;
        var place_1 = ads.place_1;
        var place_2 = ads.place_0;
        var place_3 = ads.place_1;
        var place_4 = ads.place_0;
        var place_5 = ads.place_1;
        var place_6 = ads.place_0;
        var place_7 = ads.place_1;
        var place_8 = ads.place_0;

        var news_0 = [news[1] || null, news[2] || null, news[3] || null];
        var news_1 = news[4] || null;
        var news_2 = [news[5] || null, news[6] || null];
        var news_3 = news[0] || null;
        var news_4 = [news[7] || null, news[8] || null, news[9] || null];
        var news_5 = news[10] || null;
        var news_6 = [news[11] || null, news[12] || null];
        var news_7 = news[13] || null;
        var news_8 = [news[14] || null, news[15] || null, news[16] || null];
        var news_9 = news[17] || null;
        var news_10 = [news[18] || null, news[19] || null];
        var news_11 = news[20] || null;
        var news_12 = [news[21] || null, news[22] || null, news[23] || null];
        var news_13 = news[24] || null;

        return (
            <div className="news-grid">
                <PlacementBlock>{place_0}</PlacementBlock>
                {_.map(news_0, this.renderNewsXthree)}
                <PlacementBlock>{place_1}</PlacementBlock>
                {this.renderNewsXone(news_1)}
                <PlacementBlock>{place_2}</PlacementBlock>
                {_.map(news_2, this.renderNewsXtwo)}
                {this.renderNewsXone(news_3)}
                <PlacementBlock>{place_3}</PlacementBlock>
                {_.map(news_4, this.renderNewsXthree)}
                {this.renderNewsXone(news_5)}
                <PlacementBlock>{place_4}</PlacementBlock>
                {_.map(news_6, this.renderNewsXtwo)}
                {this.renderNewsXone(news_7)}
                <PlacementBlock>{place_5}</PlacementBlock>
                {_.map(news_8, this.renderNewsXthree)}
                {this.renderNewsXone(news_9)}
                <PlacementBlock>{place_6}</PlacementBlock>
                {_.map(news_10, this.renderNewsXtwo)}
                {this.renderNewsXone(news_11)}
                <PlacementBlock>{place_7}</PlacementBlock>
                {_.map(news_12, this.renderNewsXthree)}
                {this.renderNewsXone(news_13)}
                <PlacementBlock>{place_8}</PlacementBlock>
            </div>
        );
    },

    renderNewsXthree: function (news, key) {
        return <NewItem key={key} type="xthree">{news}</NewItem>;
    },

    renderNewsXtwo: function (news, key) {
        return <NewItem key={key} type="xtwo">{news}</NewItem>
    },

    renderNewsXone: function (news) {
        return <NewItem type="xone">{news}</NewItem>
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
