var _ = require('lodash');
var NewItemMobile = require('components/common-components/new-item-mobile');
var React = require('react');


var NewsGridMobile = React.createClass({

  render: function () {
    var news = this.props.children;
    var ads = this.props.advertisment.ads;
    var mobileGridData = [];
    var counter = 0;

    while (news.length || ads.length) {
      if (counter % 2) {
        if (news.length) {
          mobileGridData.push(news.pop())
        }
      } else {
        if (ads.length) {
          mobileGridData.push(ads.pop())
        }
      }
      counter++;
    };

    var sortedData = mobileGridData.reverse();
    console.log(sortedData, mobileGridData)
    return (
      <div className="news-grid">
        {_.map(sortedData, this.renderNewsItem)}
      </div>
    );
  },

  renderNewsItem: function (mobileData, key) {
    return <NewItemMobile key={key}>{mobileData}</NewItemMobile>;
  }
});

module.exports = NewsGridMobile;
