var _ = require('lodash');
var NewItemMobile = require('components/common-components/new-item-mobile');
var React = require('react');


var NewsGridMobile = React.createClass({

    render: function () {
        var news = _.cloneDeep(this.props.children);
        var ads = _.cloneDeep(this.props.advertisment.ads);
        var mobileGridData = [];
        var counter = 0;

        while(news.length || ads.length) {
          if (counter % 2) {
            if(news.length) {
              mobileGridData.push(news.pop())
            }
          } else {
            if(ads.length) {
              mobileGridData.push(ads.pop())
            }
          }
          counter++;
        };

        return (
            <div className="news-grid">
                {_.map(mobileGridData, this.renderNewsItem)}
            </div>
        );
    },

    renderNewsItem: function (mobileGridData, key) {
        return <NewItemMobile key={key}>{mobileGridData}</NewItemMobile>;
    }
});

module.exports = NewsGridMobile;
