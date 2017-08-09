var React = require('react');
var Icon = require('components/core-components/icon');
var classNames = require('classnames');

var Link = React.createClass({

    propTypes: {
        linkType: React.PropTypes.oneOf(['facebook', 'twitter', 'instagram', 'whatsapp'])
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
            className: this.getClass(),
            href: this.props.href
        };
    },

    getClass: function () {
        return classNames({
            'link--facebook': (this.props.linkType === 'facebook'),
            'link--twitter': (this.props.linkType === 'twitter'),
            'link--instagram': (this.props.linkType === 'instagram'),
            'link--whatsapp': (this.props.linkType === 'whatsapp'),
        })
    }
});

module.exports = Link;
