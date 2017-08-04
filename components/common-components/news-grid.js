var _ = require('lodash');
var NewItem = require('components/common-components/new-item');
var React = require('react');

var NewsGrid = React.createClass({

    render: function () {
        var news = this.props.children;

        return (
            <div className="product-list">
                {_.map(news, this.renderItems)}
            </div>
        );
    },

    renderItems: function (news, key) {
        return <NewItem key={key}>{news}</NewItem>;
    }
});

module.exports = NewsGrid;
