var React = require('react');
var Icon = require('components/core-components/icon');
var Link = require('components/core-components/link');
var NavigationSticky = require('components/core-components/navigation-sticky-bar');
var NavigationMobileBar = require('components/core-components/navigation-mobile-bar');
var NavigationDefaultBar = require('components/core-components/navigation-default-bar')

var NavigationBar = React.createClass({

    getInitialState: function () {
        return {
          mobileNav: false,
        }
    },

    componentDidMount: function () {
        window.addEventListener('resize', this.swichBar);
    },

    componentWillUnmount: function () {
        window.removeEventListener('resize', this.swichBar);
    },

    render: function () {
        return (
            <div className="navigation">
              {this.renderCurrentBar()}
            </div>
        );
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
        var navigationDefault = (
          <div className="navigation-default-bar">
            <NavigationSticky links={this.getLinks()} />
            <NavigationDefaultBar links={this.getLinks()}></NavigationDefaultBar>
          </div>
        );

        var renderBar = (!this.state.mobileNav) ? navigationDefault : null;

        return renderBar;
    },

    renderMobileBar: function () {
        var mobileBar = (this.state.mobileNav) ? <NavigationMobileBar links={this.getLinks()} /> : null;

        return mobileBar;
    },

    getLinks: function () {
        var links = [
          'novedades',
          'deportes',
          'life style',
          'turismo',
          'ocio',
          'sociales',
          'concepto tv'
        ]

        return links;
    }
});

module.exports = NavigationBar;
