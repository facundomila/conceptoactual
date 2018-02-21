var React = require('react');
var Link = require('components/core-components/link')

var Notice = React.createClass({

    render: function () {
        var item = this.props.children;
        var dynamicPath = "http://conceptoactual.com/cpanel/";

        return (
            <div className="notice">
                <div className="notice-category_name">{item[0].category_name}</div>
                <div className="notice-img">
                  <div className="notice-title">{item[0].title}</div>
                  <img src={dynamicPath+item[0].ruta} />
                </div>
                  {this.renderEpigraph(item[0].epigraph)}
                <div className="notice-subtitle">{item[0].subtitle}</div>  
                <div className="notice-main">
                  {this.renderDescription(item[0].description)}
                  <div className="notice-main-paragraph">{item[0].paragraph}</div>
                </div>
                  {this.renderVideo(item[0].vide)}
                <div className="notice-social">
                    <Link linkType="facebook" onClick={this.facebookShare} />
                    <Link linkType="twitter"/>
                    <Link linkType="whatsapp"/>
                </div>
            </div>
        );
    },

    renderDescription: function (item) {
      var layoutDesc = <div className="notice-main-description">{item}</div>;

      return (item) ? layoutDesc : null;
    },

    renderEpigraph: function (item) {
      var layoutEpi = <div className="notice-epigraph">{item}</div>;

      return (item) ? layoutEpi : null;
    },

    renderVideo: function (video) {
      var videoComponent = <iframe className="notice-video" width="420" height="315"
        src={video}></iframe>
      var renderVideo = (video) ? videoComponent : null
      
      return  renderVideo;
    },

    facebookShare: function () {
      FB.ui({
        method: 'share',
        href: 'http://conceptoactual.com/news.html?id=47',
      }, function(response){});
    }
});

module.exports = Notice;
