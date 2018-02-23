var _ = require('lodash');
var NewItemMobile = require('components/common-components/new-item-mobile');
var React = require('react');


var NewsGridMobile = React.createClass({

  render: function () {
    var collection = [];
    var news = this.props.children.reverse();
    var ads = [
      this.props.advertisment.ads.alto,
      this.props.advertisment.ads.municipal,
      this.props.advertisment.ads.bolsa,
      this.props.advertisment.ads.fallabela,
      this.props.advertisment.ads.lacaja,
      this.props.advertisment.ads.lasegunda,
      this.props.advertisment.ads.osde,
      this.props.advertisment.ads.paladini,
      this.props.advertisment.ads.queens,
      this.props.advertisment.ads.rosental,
      this.props.advertisment.ads.santafe,
      this.props.advertisment.ads.showcase,
      this.props.advertisment.ads.solmujer
    ];
    var counter = 0;
    console.log(ads.length);

    while (ads.length) {
      if (counter % 2) {
        if (news.length) {
          collection.push(news.pop())
        }
      } else {
        if (ads.length) {
          collection.push(ads.pop())
        }
      }
      counter++;
    };

    return (
      <div className="news-grid">
        {_.map(collection, this.renderNewsItem)}
      </div>
    );
  },

  renderNewsItem: function (collection, key) {
    return <NewItemMobile key={key}>{collection}</NewItemMobile>;
  }
});

module.exports = NewsGridMobile;
