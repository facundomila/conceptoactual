var React = require('react');
var Link = require('components/core-components/link');

var NavigationSticky = React.createClass({

    getInitialState: function() {
        return {
          stickyBarClass: 'navigation-sticky--hidden',
        }
    },

    render: function () {
      return (
          <div className={this.state.stickyBarClass}>
              {this.handleScroll()}
              <div className="navigation-logo-container--sticky">
                  <a href="demo.html">
                      <img className="navigation-logo--sticky" src="images/iso_blanco-small.png" />
                  </a>
              </div>
                  {this.getLinks()}
              <div className="navigation-networks--sticky">
                  <Link kind="no_bubble" linkType="facebook"/>
                  <Link kind="no_bubble" linkType="twitter"/>
                  <Link kind="no_bubble" linkType="instagram"/>
              </div>
          </div>
        );
    },

    handleScroll: function () {
        window.addEventListener('scroll', this.getStickyBar)
    },

    getStickyBar: function (e) {
        var scrollY = e.path[0].scrollY || e.path[1].scrollY;

        if (scrollY >= 120) {
          this.setState({ stickyBarClass: 'navigation-sticky--shown'})
        } else {
          this.setState({ stickyBarClass: 'navigation-sticky--hidden'})
        }

        return scrollY;
    },

    getLinks: function () {
      return (
          <div className="navigation-sticky">
              <div className="navigation-sticky-links"><a href="#">Novedades</a></div>
              <div className="navigation-sticky-links"><a href="#">Deportes</a></div>
              <div className="navigation-sticky-links"><a href="#">Life Style</a></div>
              <div className="navigation-sticky-links"><a href="#">Turismo</a></div>
              <div className="navigation-sticky-links"><a href="#">Ocio</a></div>
              <div className="navigation-sticky-links"><a href="#">Tecno</a></div>
              <div className="navigation-sticky-links"><a href="#">Sociales</a></div>
              <div className="navigation-sticky-links"><a href="#">Concepto Tv</a></div>
          </div>
      );
    }
});

module.exports = NavigationSticky;
