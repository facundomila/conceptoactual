var _ = require('lodash');
var NewItem = require('components/common-components/new-item');
var React = require('react');

var NewsGrid = React.createClass({

    render: function () {
        var news = this.props.children;

        return (
            <div className="news-grid">
                {_.map(news, this.renderItems)}
            </div>
        );
    },

    renderItems: function (item, key) {
        return <NewItem key={key}>{item}</NewItem>;
    }
});

module.exports = NewsGrid;
