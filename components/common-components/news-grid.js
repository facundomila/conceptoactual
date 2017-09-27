var _ = require('lodash');
var NewItem = require('components/common-components/new-item');
var PlacementBlock = require('components/common-components/placement-block');
var React = require('react');

var NewsGrid = React.createClass({

    render: function () {
        var news = this.props.children;
        var ads = this.props.advertisment.ads;


        var place_0 = [ads[0].ad, ads[1].ad, ads[2].ad];
        var place_1 = [ads[3].ad, ads[4].ad, ads[5].ad];
        var place_2 = [ads[0].ad, ads[1].ad, ads[2].ad];
        var place_3 = [ads[3].ad, ads[4].ad, ads[5].ad];
        var place_4 = [ads[0].ad, ads[1].ad, ads[2].ad];
        var place_5 = [ads[3].ad, ads[4].ad, ads[5].ad];
        var place_6 = [ads[0].ad, ads[1].ad, ads[2].ad];
        var place_7 = [ads[3].ad, ads[4].ad, ads[5].ad];

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
                <PlacementBlock type="third">{place_0}</PlacementBlock>
                {_.map(news_0, this.renderNewsXthree)}
                {this.renderNewsXone(news_1)}
                <PlacementBlock type="third">{place_1}</PlacementBlock>
                {this.renderNewsXone(news_3)}
                {_.map(news_2, this.renderNewsXtwo)}
                <PlacementBlock type="third">{place_2}</PlacementBlock>
                {this.renderNewsXone(news_5)}
                {_.map(news_4, this.renderNewsXthree)}
                <PlacementBlock type="third">{place_3}</PlacementBlock>
                {this.renderNewsXone(news_7)}
                {_.map(news_6, this.renderNewsXtwo)}
                <PlacementBlock type="third">{place_4}</PlacementBlock>
                {this.renderNewsXone(news_9)}
                {_.map(news_8, this.renderNewsXthree)}
                <PlacementBlock type="third">{place_5}</PlacementBlock>
                {this.renderNewsXone(news_11)}
                {_.map(news_10, this.renderNewsXtwo)}
                <PlacementBlock type="third">{place_6}</PlacementBlock>
                {this.renderNewsXone(news_13)}
                {_.map(news_12, this.renderNewsXthree)}
                <PlacementBlock type="third">{place_7}</PlacementBlock>
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
