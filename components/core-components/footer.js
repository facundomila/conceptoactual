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
                <div className="footer-concepto-social">
                  <div className="footer-concepto-social-container">
                    <Link linkType="facebook" href="https://www.facebook.com/ConceptoActual/" />
                    <Link linkType="twitter" href="https://twitter.com/ConceptoActual" />
                    <Link linkType="linkedin" href="https://www.linkedin.com/in/concepto-actual-05589b146/" />
                    <Link linkType="instagram" href="https://www.instagram.com/conceptoactual/" />
                    <Link linkType="whatsapp"/>
                    <Link linkType="youtube" href="https://www.youtube.com/channel/UCjty9yGSJ-s1EDPlP1j95Ng?view_as=subscriber"/>
                  </div>  
                </div>
                <div className="footer-concepto-copyright">
                  2017 WWW.CONCEPTOACTUAL.COM
                </div>
            </div>
        );
    }
});

module.exports = Footer;
