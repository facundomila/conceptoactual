var React = require('react');
var ShareItemBar = require('components/core-components/share-item-bar');

var NewItem = React.createClass({

    render: function () {
        var news = this.props.children;

        return (
            <div className="new-item">
              <a href={this.getLocation(news)}>
                  {this.renderTitle(news)}
                  {this.renderSubtitle(news)}
                  {this.renderImg(news)}
              </a>
            </div>
        );
    },

    getLocation: function (news) {
        return "news.html?id="+news.id
    },

    renderTitle: function (news) {
        return <div className="new-item-title">{news.title}</div>;
    },

    renderSubtitle: function (news) {
        return <div className="new-item-category">{news.category_name}</div>;
    },

    renderImg: function (news) {
        var dynamicPath = "http://conceptoactual.com/cpanel/";

        return <img className="new-item-image" src={dynamicPath+news.ruta_miniatura}/>;
    },

    renderShareItemBar: function (news) {
        var newId = news.id;

        return <ShareItemBar id={newId} />
    }
});

module.exports = NewItem;
