var React = require('react');
var IconPlus = require('react-icons/lib/fa/plus');
var IconEdit = require('react-icons/lib/fa/edit');
var IconView = require('react-icons/lib/fa/eye');
var IconDelete = require('react-icons/lib/fa/trash');
var IconFacebook = require('react-icons/lib/fa/facebook');
var IconTwitter = require('react-icons/lib/fa/twitter');
var IconWhatsapp = require('react-icons/lib/fa/whatsapp');
var IconInstagram = require('react-icons/lib/fa/instagram');
var IconYoutube = require('react-icons/lib/fa/youtube');
var IconLinkedin = require('react-icons/lib/fa/linkedin');
var IconBars = require('react-icons/lib/fa/bars');

var Icon = React.createClass({

    render: function () {
        return (
            <span className="icon">
                {this.getIcon()}
            </span>
        );
    },

    getIcon: function () {
        var icons = {
            add: <IconPlus />,
            edit: <IconEdit />,
            view: <IconView />,
            delete: <IconDelete />,
            facebook: <IconFacebook />,
            linkedin: <IconLinkedin />,
            whatsapp: <IconWhatsapp />,
            twitter: <IconTwitter />,
            instagram: <IconInstagram />,
            youtube: <IconYoutube />,
            bars: <IconBars />
        };

        return icons[this.props.type];
    }
});

module.exports = Icon;
