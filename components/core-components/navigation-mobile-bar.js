var _ = require('lodash');
var React = require('react');
var Icon = require('components/core-components/icon');
var Link = require('components/core-components/link');

var MobileNavBar = React.createClass({

  getInitialState: function () {
    return {
      mobileNavClass: 'navigation-mobile-bar--closed',
      burguerButton: 'open'
    }
  },

  render: function () {
    var links = this.props.links;

    return (
      <div className="navigation-mobile-bar">
        <div className="navigation-mobile-bar-top">
          <button {...this.getBurgerButtonProps()}>
            {this.getIcon()}
          </button>
          <a href="/index.html">{this.renderLogoBar()}</a>
        </div>
        <div className={this.state.mobileNavClass}>
          {_.map(links, this.renderLinks)}
        </div>
      </div>
    );
  },

  renderLinks: function (link, key) {
    return (
      <div className="navigation-mobile-bar-link" key={key}>
        <a href={link.href}>{link.title}</a>
      </div>
    );
  },

  renderLogoBar: function () {
    var logo = (
      <div className="navigation-mobile-bar-logo-container">
        <img className="navigation-mobile-bar-logo" src="images/iso_blanco.png" />
      </div>
    );

    return logo;
  },

  renderLogoMiniBar: function () {
    var logo = (
      <div className="navigation-mobile-bar-logo-container">
        <img className="navigation-mobile-bar-logo" src="images/logo_blanco_bar.png" />
      </div>
    );

    return logo;
  },

  getIcon: function () {
    return (this.state.burguerButton === 'open') ? <Icon type="bars" /> : <Icon type="close" />;
  },

  getBurgerButtonProps: function () {
    var props = {
      className: 'navigation-mobile-bar-burger-btn',
      onClick: this.handleClick
    }
    return props;
  },

  renderMiddleZone: function () {
    var logo = (
      <div className="navigation-mobile-bar-logo-container">
        <a href="index.html"><img className="navigation-mobile-bar-logo" src="images/iso_blanco.png" /></a>
      </div>
    );

    var networks = (
      <div className="navigation-mobile-bar-logo-container">
        nwtworks
      </div>
    );

    var show = (window.location.pathname === "/news.html") ? networks : logo;

    return show;
  },

  handleClick: function () {
    (this.state.mobileNavClass === 'navigation-mobile-bar--closed') ?
      this.setState({ mobileNavClass: 'navigation-mobile-bar--opened' }) :
      this.setState({ mobileNavClass: 'navigation-mobile-bar--closed' });

    (this.state.mobileNavClass === 'navigation-mobile-bar--closed') ?
      this.setState({ burguerButton: 'close' }) :
      this.setState({ burguerButton: 'open' });
  }
});

module.exports = MobileNavBar;
