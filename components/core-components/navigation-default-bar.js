var _ = require('lodash');
var React = require('react');
var Icon = require('components/core-components/icon');
var Link = require('components/core-components/link');

var NavigationDefaultBar = React.createClass({

    render: function () {
        var links = this.props.links;

        return (
            <div className="navigation-default-bar">
              <div className="navigation-default-bar-logo-container">
                {this.renderLogoBar()}
              </div>
              <div className="navigation-default-bar-links">
                {_.map(links, this.renderLinks)}
              </div>
                {this.renderNetworks()}
            </div>
        );
    },

    renderLinks: function (link, key) {
        return (
          <div className="navigation-default-bar-link" key={key}>
            <a href={link.href}>{link.title}</a>
          </div>
        );
    },

    renderLogoBar: function () {
      var logo = <a href="demo.html"><img className="navigation-default-bar-logo" src="images/logo_blanco_bar.png"/></a>;

      return logo;
    },

    renderNetworks: function () {
      var networks = (
        <div className="navigation-default-bar-networks">
            <Link kind="no_bubble" linkType="facebook"/>
            <Link kind="no_bubble" linkType="twitter"/>
            <Link kind="no_bubble" linkType="instagram"/>
        </div>
      );

      return networks;
    }
});

module.exports = NavigationDefaultBar;
