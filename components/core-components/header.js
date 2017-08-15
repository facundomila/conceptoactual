var React = require('react');
var Link = require('components/core-components/link');

var Header = React.createClass({

    render: function () {
        return (
            <div id="particles-js">
              <div className="header-logo-block">
                <a href="demo.html">
                  <img className="header-logo" src="images/iso_blanco.png" />
                </a>
              </div>
              <div className="header-social">
                  <Link kind="no_bubble" linkType="facebook"/>
                  <Link kind="no_bubble" linkType="twitter"/>
                  <Link kind="no_bubble" linkType="instagram"/>
              </div>
      			</div>
        );
    }
});

module.exports = Header;
