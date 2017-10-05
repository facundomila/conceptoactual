var React = require('react');
var Icon = require('components/core-components/icon');
var Link = require('components/core-components/link');
var NavigationSticky = require('components/core-components/navigation-sticky');
var MobileNavBar = require('components/core-components/mobile-nav-bar');

var NavigationBar = React.createClass({

    getInitialState: function() {
        return {
          mobileNav: false,
        }
    },

    render: function () {
        return (
            <div className="navigation">
              {this.handleResize()}
              {this.renderCurrentBar()}
            </div>
        );
    },

    handleResize: function () {
        window.addEventListener('resize', this.swichBar);
    },

    swichBar: function () {
        if (window.outerWidth < 768) {
            this.setState({ mobileNav: true })
        } else {
            this.setState({ mobileNav: false })
        }
    },

    renderCurrentBar: function () {
        var deviceBar = (window.outerWidth < 768) ? this.renderMobileBar() : this.renderWebAppBar();

        return deviceBar;
    },

    renderWebAppBar: function () {
        var defaultNavBar = (
          <div>
            <span>defaultNavBar</span>
            <NavigationSticky />
          </div>
        );

        return defaultNavBar;
    },

    renderMobileBar: function () {
        var mobileBar = (this.state.mobileNav) ? <MobileNavBar /> : null;

        return mobileBar;
    }
});

module.exports = NavigationBar;
