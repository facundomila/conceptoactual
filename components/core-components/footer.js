var React = require('react');
var Link = require('components/core-components/link');
var SiteMap = require('components/core-components/site-map');

var Footer = React.createClass({

    render: function () {
        return (
            <div className="footer-concepto">
                <div className="footer-concepto-logo">
                  <img src="images/completo_footer.png" />
                </div>
                <hr />
                <div className="footer-concepto-social">
                    <Link linkType="facebook"/>
                    <Link linkType="twitter"/>
                    <Link linkType="linkedin"/>
                    <Link linkType="instagram"/>
                    <Link linkType="whatsapp"/>
                    <Link linkType="youtube"/>
                </div>
                <hr />
                <div className="footer-concepto-copyright">
                  2017 WWW.CONCEPTOACTUAL.COM
                </div>
            </div>
        );
    }
});

module.exports = Footer;
