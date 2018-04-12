var ads = require('services/advertisement.json');
var React = require('react');
var Link = require('components/core-components/link');
var MobileBottomBar = require('components/core-components/mobile-bottom-bar');
var PlacementBlock = require('components/common-components/placement-block');

var Notice = React.createClass({

  render: function () {
    var item = this.props.children;
    var dynamicPath = "http://conceptoactual.com/cpanel/";

    return (
      <div className="notice">
        {this.renderAds()}
        <div className="notice-img">
          <div className="notice-title" id="title">{item[0].title}</div>
          <img id="image" src={dynamicPath + item[0].ruta} />
        </div>
        {this.renderBaseboard(item[0].category_name, item[0].epigraph)}
        <div className="notice-subtitle" id="subtitle">{item[0].subtitle}</div>
        <div className="notice-main">
          {this.renderDescription(item[0].description)}
          <div className="notice-main-paragraph">{item[0].paragraph}</div>
        </div>
        {this.renderVideo(item[0].vide)}
        <div className="notice-social">
          <div id="fbShare" className="notice-social-fb"></div>
        </div>
        {this.renderMobileBottomBar()}
      </div>
    );
  },

  renderAds: function () {
    var place_1 = [ads.ads.paladini, ads.ads.fallabela, ads.ads.showcase];
    var mobileAd = <PlacementBlock type="full">{[ads.ads.queens]}</PlacementBlock>;;
    var deskAds = <PlacementBlock type="third">{place_1}</PlacementBlock>;
    var renderAds = (window.outerWidth < 768) ? mobileAd : deskAds;

    return renderAds;
  },

  renderDescription: function (item) {
    var layoutDesc = <div className="notice-main-description">{item}</div>;

    return (item) ? layoutDesc : null;
  },

  renderBaseboard: function (category, epigraph) {
    var customClass = 'notice-baseboard--' + category.toLowerCase();
    var epi = (epigraph) ? epigraph : '';
    var layoutBaseboard = <div className={customClass}>{'[' + category + '] ' + epigraph}</div>;

    return layoutBaseboard;
  },

  renderVideo: function (video) {
    var videoComponent = <iframe className="notice-video" width="420" height="315"
      src={video}></iframe>
    var renderVideo = (video) ? videoComponent : null

    return renderVideo;
  },

  renderMobileBottomBar: function () {
    var device = (window.location.pathname === "/news.html" && window.outerWidth < 768) ? 'mobile' : 'desktop';

    return (device === 'mobile') ? <MobileBottomBar /> : null;
  },

  getFbLinkProps: function (id) {
    var props = {
      onClick: this.handleFbClick.bind(this, id),
      className: 'notice-social-fb'
    };

    return props;
  },

  handleFbClick: function (id) {
    var url = 'https://www.facebook.com/sharer/sharer.php?u=http%3A//conceptoactual.com/news.html?id=' + id;

    return window.open(url, width = "300px");
  }
});

module.exports = Notice;
