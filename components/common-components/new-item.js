var React = require('react');
var ShareItemBar = require('components/core-components/share-item-bar');

var NewItem = React.createClass({

    render: function () {
        var news = this.props.children;

        return (
            <div className="new-item">
                {this.renderTitle(news)}
                {this.renderSubtitle(news)}
                {this.renderImg(news)}
                {this.renderShareItemBar(news)}
            </div>
        );
    },

    renderTitle: function (news) {
        return <div className="new-item-title">{news.title}</div>;
    },

    renderSubtitle: function (news) {
        return <div className="new-item-category">{news.subtitle}</div>;
    },

    renderImg: function (news) {
        return <div className="new-item-image"><img src={news.img}/></div>;
    },

    renderShareItemBar: function (news) {
        var newId = news.id;

        return <ShareItemBar id={newId} />
    }
});

module.exports = NewItem;