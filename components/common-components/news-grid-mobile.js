var _ = require('lodash');
var NewItemMobile = require('components/common-components/new-item-mobile');
var React = require('react');


var NewsGridMobile = React.createClass({

  render: function () {
    var news = this.props.children;
    var ads = this.props.advertisment.ads;
    var mobileGridData = [];
    var counter = 0;
    console.log('ads', ads.length);

    while (news.length || 13) {
      if (counter % 2) {
        if (news.length) {
          mobileGridData.push(news.pop())
        }
      } else {
        if (13) {
          mobileGridData.push(ads.pop())
        }
      }
      counter++;
    };

    var sortedData = mobileGridData.reverse();

    return (
      <div className="news-grid">
        {_.map(sortedData, this.renderNewsItem)}
      </div>
    );
  },

  renderNewsItem: function (mobileData, key) {
    //console.log('data', mobileData);
    return <NewItemMobile key={key}>{mobileData}</NewItemMobile>;
  }
});

module.exports = NewsGridMobile;
