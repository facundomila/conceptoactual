var React = require('react');
var Link = require('components/core-components/link');
var SiteMap = require('components/core-components/site-map');

var Footer = React.createClass({

    render: function () {
        return (
            <div className="footer">
                <img className="footer-logo" src="images/logo_blanco.png" />
                <div className="footer-social">
                    <Link linkType="facebook"/>
                    <Link linkType="whatsapp"/>
                    <Link linkType="twitter"/>
                    <Link linkType="linkedin"/>
                </div>
                <div className="footer-site-map">
                    <SiteMap />
                </div>
                <span className="footer-copyright">© 2017 - conceptoActual.com</span>
            </div>
        );
    }
});

module.exports = Footer;
