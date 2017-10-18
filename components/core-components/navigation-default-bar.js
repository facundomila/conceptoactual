var _ = require('lodash');
var React = require('react');
var Icon = require('components/core-components/icon');
var Link = require('components/core-components/link');

var NavigationDefaultBar = React.createClass({

    render: function () {
        var links = this.props.links;

        return (
            <div className="navigation-default-bar">
              {this.renderLogoBar()}
              {_.map(links, this.renderLinks)}
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
      var logo = <div><img className="navigation-default-bar-logo" src="images/logo_blanco_bar.png"/></div>;

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
