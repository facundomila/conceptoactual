var React = require('react');
var Link = require('components/core-components/link');
var SiteMap = require('components/core-components/site-map');

var Footer = React.createClass({

    render: function () {
        return (
            <div className="footer-concepto">
                <div className="footer-concepto-social">
                    <Link linkType="facebook"/>
                    <Link linkType="twitter"/>
                    <Link linkType="linkedin"/>
                    <Link linkType="instagram"/>
                    <Link linkType="whatsapp"/>
                    <Link linkType="youtube"/>
                </div>
            </div>
        );
    }
});

module.exports = Footer;
