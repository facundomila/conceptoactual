var _ = require('lodash');
var React = require('react');
var Link = require('components/core-components/link');

var NavigationStickyBar = React.createClass({

    getInitialState: function() {
        return {
          stickyBarClass: 'navigation-sticky-bar--hidden',
        }
    },

    componentDidMount: function () {
        window.addEventListener('scroll', this.getStickyBar)
    },

    componentWillUnmount: function () {
        window.removeEventListener('scroll', this.getStickyBar)
    },

    render: function () {
      var links = this.props.links;

      return (
          <div className={this.state.stickyBarClass}>
              <div className="navigation-sticky-bar-logo-container">
                  <a href="demo.html">
                      <img className="navigation-sticky-bar-logo" src="images/iso_blanco-small.png" />
                  </a>
              </div>
                  {_.map(links, this.renderLinks)}
              <div className="navigation-sticky-bar-networks">
                  <Link kind="no_bubble" linkType="facebook"/>
                  <Link kind="no_bubble" linkType="twitter"/>
                  <Link kind="no_bubble" linkType="instagram"/>
              </div>
          </div>
        );
    },

    getStickyBar: function (e) {
        var scrollY = e.path[0].scrollY || e.path[1].scrollY;

        if (scrollY >= 120) {
          this.setState({ stickyBarClass: 'navigation-sticky-bar--shown'})
        } else {
          this.setState({ stickyBarClass: 'navigation-sticky-bar--hidden'})
        }

        return scrollY;
    },

    renderLinks: function (link, key) {
        return (
          <div className="navigation-sticky-bar-link" key={key}>
              <a href="#">{link}</a>
          </div>
        );
    }
});

module.exports = NavigationStickyBar;
