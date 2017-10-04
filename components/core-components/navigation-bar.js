var React = require('react');
var Icon = require('components/core-components/icon');
var Link = require('components/core-components/link');
var NavigationSticky = require('components/core-components/navigation-sticky');

var NavigationBar = React.createClass({

    getInitialState: function() {
        return {
          mobileNav: 'navigation-bar',
          burguerButton: 'open'
        }
    },

    render: function () {
      // <div className="navigation-networks">
      //     <Link kind="no_bubble" linkType="facebook"/>
      //     <Link kind="no_bubble" linkType="twitter"/>
      //     <Link kind="no_bubble" linkType="instagram"/>
      // </div>
        return (
            <div className="navigation">
              <NavigationSticky />
            </div>
        );
    }

    // renderStickyBar: function () {
    //     var sticky = <div className={this.state.stickyBarClass}>
    //                   <div className="navigation-logo-container--sticky">
    //                     <a href="demo.html">
    //                       <img className="navigation-logo--sticky" src="images/iso_blanco-small.png" />
    //                     </a>
    //                   </div>
    //                   {this.getLinks()}
    //                   <div className="navigation-networks--sticky">
    //                     <Link kind="no_bubble" linkType="facebook"/>
    //                     <Link kind="no_bubble" linkType="twitter"/>
    //                     <Link kind="no_bubble" linkType="instagram"/>
    //                   </div>
    //                 </div>;
    //
    //     var renderStiky = (this.state.stickyBarState) ? sticky : null;
    //
    //     return renderStiky;
    // },
    //
    // handleScroll: function () {
    //     window.addEventListener('scroll', this.getStickyBar)
    // },
    //
    // getStickyBar: function (e) {
    //     var scrollY = e.path[0].scrollY || e.path[1].scrollY;
    //     console.log(scrollY)
    //     if (scrollY >= 50) {
    //       this.setState({ stickyBarState: true })
    //       this.setState({ stickyBarClass: 'navigation-sticky--hidden'})
    //     } if (scrollY >= 120) {
    //       this.setState({ stickyBarClass: 'navigation-sticky--shown'})
    //     } if (scrollY <= 120) {
    //       this.setState({ stickyBarClass: 'navigation-sticky--hidden'})
    //     } if (scrollY <= 120) {
    //       this.setState({ stickyBarState: false})
    //     }
    //
    //     return scrollY;
    // },
    //
    // getIcon: function () {
    //   return (this.state.burguerButton === 'open') ? <Icon type="bars" /> : <Icon type="close" />;
    // },
    //
    // getBurgerButtonProps: function () {
    //   var props = {
    //     className: 'navigation-bar-burger-btn',
    //     onClick: this.handleClick
    //   }
    //   return props;
    // },
    //
    // getLinks: function () {
    //     return (
    //       <div className={this.state.mobileNav}>
    //         <div className="navigation-bar-links"><a href="#">Novedades</a></div>
    //         <div className="navigation-bar-links"><a href="#">Deportes</a></div>
    //         <div className="navigation-bar-links"><a href="#">Life Style</a></div>
    //         <div className="navigation-bar-links"><a href="#">Turismo</a></div>
    //         {this.renderLogoBar()}
    //         <div className="navigation-bar-links"><a href="#">Ocio</a></div>
    //         <div className="navigation-bar-links"><a href="#">Tecno</a></div>
    //         <div className="navigation-bar-links"><a href="#">Sociales</a></div>
    //         <div className="navigation-bar-links"><a href="#">Concepto Tv</a></div>
    //       </div>
    //     );
    // },
    //
    // handleClick: function() {
    //   (this.state.mobileNav === 'navigation-bar') ?
    //   this.setState({ mobileNav: 'navigation-bar--opened' }) :
    //   this.setState({ mobileNav: 'navigation-bar'});
    //
    //   (this.state.mobileNav === 'navigation-bar') ?
    //   this.setState({ burguerButton: 'close' }) :
    //   this.setState({ burguerButton: 'open'});
    // },
    //
    // renderLogoBar: function () {
    //   console.log(this.state.mobileNav);
    //   var img = <div className={this.state.stickyBarClass+"--logo"}><img className={this.state.stickyBarClass+"--img"} src="images/logo_blanco_bar.png"/></div>;
    //   var renderlogo = (this.state.mobileNav === "navigation-bar") ? img : null;
    //
    //   return renderlogo;
    // }
});

module.exports = NavigationBar;
