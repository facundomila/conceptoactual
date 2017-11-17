var React = require('react');
var Icon = require('components/core-components/icon');
var Link = require('components/core-components/link');
var NavigationSticky = require('components/core-components/navigation-sticky-bar');
var NavigationMobileBar = require('components/core-components/navigation-mobile-bar');
var NavigationDefaultBar = require('components/core-components/navigation-default-bar')

var NavigationBar = React.createClass({

    getInitialState: function () {
        var state = (window.outerWidth < 768) ? true : false;
        return {
          mobileNav: state
        }
    },

    componentDidMount: function () {
        window.addEventListener('resize', this.switchBar);
    },

    componentWillUnmount: function () {
        window.removeEventListener('resize', this.switchBar);
    },

    render: function () {
        return (
            <div className="navigation-bar">
              {this.renderWebAppBar()}
              {this.renderMobileBar()}
            </div>
        );
    },

    switchBar: function () {
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
          {
            title: 'Novedades',
            href: '#',
            modifier: 'novedades' 
          },
          {
            title: 'Deportes',
            href: '#',
            modifier: 'deportes'
          },
          {
            title: 'Life Style',
            href: '#',
            modifier: 'lifestyle'
          },
          {
            title: 'Turismo',
            href: '#',
            modifier: 'turismo'
          },
          {
            title: 'Ocio',
            href: '#',
            modifier: 'ocio'
          },
          {
            title: 'Tecno',
            href: '#',
            modifier: 'tecno'
          },
          {
            title: 'Sociales',
            href: '#',
            modifier: 'sociales'
          },
          {
            title: 'Concepto TV',
            href: '#',
            modifier: 'conceptotv'
          }
        ]
        
        return links;
    }
});

module.exports = NavigationBar;
