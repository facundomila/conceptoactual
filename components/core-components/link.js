var React = require('react');
var Icon = require('components/core-components/icon');

var Link = React.createClass({

    propTypes: {
        linkType: React.PropTypes.oneOf(['facebook', 'twitter', 'linkedin', 'whatsapp'])
    },

    render: function () {
        return (
            <a {...this.getProps()}>
                <Icon type={this.props.linkType} />
            </a>
        );
    },

    getProps: function () {
        return {
            className: 'link',
            href: this.props.href
        };
    }
});

module.exports = Link;
