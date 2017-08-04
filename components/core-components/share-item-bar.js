var React = require('react');
var Link = require('components/core-components/link');

var ShareItemBar = React.createClass({

    render: function () {
        return (
            <div className="share-item-bar">
                <Link linkType="facebook"/>
                <Link linkType="whatsapp"/>
                <Link linkType="twitter"/>
                <Link linkType="linkedin"/>
            </div>
        );
    }
});

module.exports = ShareItemBar;
