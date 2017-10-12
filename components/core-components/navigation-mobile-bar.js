var _ = require('lodash');
var React = require('react');
var Icon = require('components/core-components/icon');
var Link = require('components/core-components/link');

var MobileNavBar = React.createClass({

    getInitialState: function() {
        return {
          mobileNavClass: 'navigation-mobile-bar',
          burguerButton: 'open'
        }
    },

    render: function () {
        var links = this.props.links;

        return (
            <div className={this.state.mobileNavClass}>
              <button {...this.getBurgerButtonProps()}>
                {this.getIcon()}
              </button>
              {_.map(links, this.renderLinks)}
            </div>
        );
    },

    renderLinks: function (link, key) {
        return (
          <div className="navigation-mobile-bar-link" key={key}>
            <a href="#">{link}</a>
          </div>
        );
    },

    renderLogoBar: function () {
      var logo = (
        <div className="navigation-mobile-bar-logo-container">
          <img className="navigation-mobile-bar-logo" src="images/logo_blanco_bar.png"/>
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

    handleClick: function() {
        (this.state.mobileNavClass === 'navigation-mobile-bar') ?
        this.setState({ mobileNavClass: 'navigation-mobile-bar--opened' }) :
        this.setState({ mobileNavClass: 'navigation-mobile-bar'});

        (this.state.mobileNavClass === 'navigation-mobile-bar') ?
        this.setState({ burguerButton: 'close' }) :
        this.setState({ burguerButton: 'open'});
    }
});

module.exports = MobileNavBar;
