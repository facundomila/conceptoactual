var React = require('react');
var Icon = require('components/core-components/icon');
var Link = require('components/core-components/link');

var DefaultNavBar = React.createClass({

    render: function () {
        return (
            <div className="default-nav-bar">
              <span>default bar</span>
            </div>
        );
    },

    getLinks: function () {
        return (
          <div className="">
            <div><a href="#">Novedades</a></div>
            <div><a href="#">Deportes</a></div>
            <div><a href="#">Life Style</a></div>
            <div><a href="#">Turismo</a></div>
            <div><a href="#">Ocio</a></div>
            <div><a href="#">Tecno</a></div>
            <div><a href="#">Sociales</a></div>
            <div><a href="#">Concepto Tv</a></div>
          </div>
        );
    },

    renderLogoBar: function () {
      var logo = <div><img className="" src="images/logo_blanco_bar.png"/></div>;

      return logo;
    },

    renderNetworks: function () {
      var networks = (
        <div className="networks">
            <Link kind="no_bubble" linkType="facebook"/>
            <Link kind="no_bubble" linkType="twitter"/>
            <Link kind="no_bubble" linkType="instagram"/>
        </div>
      );

      return networks;
    }
});

module.exports = DefaultNavBar;
