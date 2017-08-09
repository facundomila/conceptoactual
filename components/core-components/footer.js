var React = require('react');
var Link = require('components/core-components/link');
var SiteMap = require('components/core-components/site-map');

var Footer = React.createClass({

    render: function () {
        return (
            <div className="myfooter">
                <div className="myfooter-social">
                    <Link linkType="facebook"/>
                    <Link linkType="whatsapp"/>
                    <Link linkType="twitter"/>
                    <Link linkType="instagram"/>
                </div>
            </div>
        );
    }
});

module.exports = Footer;
