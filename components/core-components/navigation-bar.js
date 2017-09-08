var React = require('react');
var Icon = require('components/core-components/icon');
var Link = require('components/core-components/link');

var NavigationBar = React.createClass({

    getInitialState: function() {
        return {
          mobileNav: 'navigation-bar',
          burguerButton: 'open',
          stickyBar: 'navigation-sticky--hidden'
        }
    },

    render: function () {
        return (
            <div className="navigation" scroll={this.handleScroll()}>
              {this.renderStickyBar()}
              <div className="navigation-logo-container"></div>
              <button {...this.getBurgerButtonProps()}>
                {this.getIcon()}
              </button>
              <a href="demo.html">
                <img className="navigation-logo" src="images/iso_blanco.png" />
              </a>
                <nav>
                    {this.getLinks()}
                </nav>
              <div className="navigation-networks-container"></div>
              <div className="navigation-networks">
                  <Link kind="no_bubble" linkType="facebook"/>
                  <Link kind="no_bubble" linkType="twitter"/>
                  <Link kind="no_bubble" linkType="instagram"/>
              </div>
            </div>
        );
    },

    renderStickyBar: function () {
        return (
            <div className={this.state.stickyBar}>
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
        var scrollY = e.path[1].scrollY;
        if (scrollY <= 60) {
          this.setState({ stickyBar: 'navigation-sticky--hidden'})
        } else {
          this.setState({ stickyBar: 'navigation-sticky--shown'})
        }

        return scrollY;
    },

    getIcon: function () {
      return (this.state.burguerButton === 'open') ? <Icon type="bars" /> : <Icon type="close" />;
    },

    getBurgerButtonProps: function () {
      var props = {
        className: 'navigation-bar-burger-btn',
        onClick: this.handleClick
      }
      return props;
    },

    getLinks: function () {
        return (
          <div className={this.state.mobileNav}>
            <div className="navigation-bar-links"><a href="#">Novedades</a></div>
            <div className="navigation-bar-links"><a href="#">Deportes</a></div>
            <div className="navigation-bar-links"><a href="#">Life Style</a></div>
            <div className="navigation-bar-links"><a href="#">Turismo</a></div>
            <div className="navigation-bar-links"><a href="#">Ocio</a></div>
            <div className="navigation-bar-links"><a href="#">Tecno</a></div>
            <div className="navigation-bar-links"><a href="#">Sociales</a></div>
            <div className="navigation-bar-links"><a href="#">Concepto Tv</a></div>
          </div>
        );
    },

    handleClick: function() {
      (this.state.mobileNav === 'navigation-bar') ?
      this.setState({ mobileNav: 'navigation-bar--opened' }) :
      this.setState({ mobileNav: 'navigation-bar'});

      (this.state.mobileNav === 'navigation-bar') ?
      this.setState({ burguerButton: 'close' }) :
      this.setState({ burguerButton: 'open'});
    }
});

module.exports = NavigationBar;
