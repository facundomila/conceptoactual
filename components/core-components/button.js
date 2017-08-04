var _ = require('lodash');
var classNames = require('classnames');
var React = require('react');
var Icon = require('components/core-components/icon');

var Button = React.createClass({

    propTypes: {
        buttonType: React.PropTypes.oneOf(['add', 'view', 'edit', 'delete'])
    },

    render: function () {
        return (
            <button {...this.getProps()}>
                <Icon type={this.props.buttonType} />
            </button>
        );
    },

    getProps: function () {
        return {
            className: this.getClass(),
            onClick: this.props.onClick
        };
    },

    getClass: function () {
        return classNames({
            'button-add': (this.props.buttonType === 'add'),
            'button-view': (this.props.buttonType === 'view'),
            'button-edit': (this.props.buttonType === 'edit'),
            'button-delete': (this.props.buttonType === 'delete'),
            'button-logout': (this.props.buttonType === 'logout')
        })
    }
});

module.exports = Button;