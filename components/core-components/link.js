var React = require('react');
var Icon = require('components/core-components/icon');
var classNames = require('classnames');

var Link = React.createClass({

    propTypes: {
        linkType: React.PropTypes.oneOf([
        'facebook',
        'twitter',
        'instagram',
        'whatsapp',
        'linkedin',
        'youtube',
        'facebook_simple',
        'twitter_simple',
        'instagram_simple'
      ])
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
      var kind = this.props.kind || null;
      var type = this.props.linkType;

        return classNames({
            'link-facebook--no_bubble': (type === 'facebook'  && kind === 'no_bubble'),
            'link-twitter--no_bubble': (type === 'twitter'  && kind === 'no_bubble'),
            'link-instagram--no_bubble': (type === 'instagram' && kind === 'no_bubble'),
            'link-facebook': (type === 'facebook' && kind === null),
            'link-twitter': (type === 'twitter' && kind === null),
            'link-instagram': (type === 'instagram' && kind === null),
            'link-whatsapp': (type === 'whatsapp' && kind === null),
            'link-linkedin': (type === 'linkedin' && kind === null),
            'link-youtube': (type === 'youtube' && kind === null),
        })
    }
});

module.exports = Link;
