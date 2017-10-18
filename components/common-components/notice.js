var React = require('react');
var Link = require('components/core-components/link')

var Notice = React.createClass({

    render: function () {
        var item = this.props.children;
        var dynamicPath = "http://conceptoactual.com/cpanel/";

        return (
            <div className="notice">
                <div className="notice-header">
                  <div className="notice-header-title">{item[0].title}</div>
                  <div className="notice-header-subtitle">{item[0].subtitle}</div>
                </div>
                <div className="notice-category_name">{item[0].category_name}</div>
                <div className="notice-img">
                  <img src={dynamicPath+item[0].ruta} />
                </div>
                  {this.renderEpigraph(item[0].epigraph)}
                <div className="notice-main">
                  {this.renderDescription(item[0].description)}
                  <div className="notice-main-paragraph">{item[0].paragraph}</div>
                </div>
                <div className="notice-social">
                    <Link linkType="facebook"/>
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
    }
});

module.exports = Notice;
