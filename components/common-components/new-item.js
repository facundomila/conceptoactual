var classNames = require('classnames');
var React = require('react');
var ShareItemBar = require('components/core-components/share-item-bar');

var NewItem = React.createClass({

    render: function () {
        var news = this.props.children;
        var category = (news) ? news.category_id : null;

        return (
            <div className={this.getClass(news) + category}>
                <a href={this.getLocation(news)}>
                    {this.renderTitle(news)}
                    {this.renderCategory(news)}
                    {this.renderImg(news)}
                </a>
            </div>
        );
    },

    getClass: function (news) {
        return classNames({
            'new-item-xthree--': (this.props.type === 'xthree'),
            'new-item-xtwo--': (this.props.type === 'xtwo'),
            'new-item-xone--': (this.props.type === 'xone'),
            'new-item-xone--mobile--': (this.props.type === 'xone--mobile'),
        })
    },

    getLocation: function (news) {
        var location = (news) ? "news.html?id=" + news.id : 'news.html?id=0';

        return location;
    },

    renderTitle: function (news) {
        var titleClass = "new-item-" + this.props.type + "--title";
        var title = (news) ? <div className={titleClass}>{news.title}</div> : null;

        return title;
    },

    renderCategory: function (news) {
        var categoryClass = "new-item-" + this.props.type + "-category--";
        var category = (news) ? <div className={categoryClass + news.category_id}>{news.category_name}</div> : null;

        return category;
    },

    renderImg: function (news) {
        var ruta;
        var rutaMini;
        var dynamicPath = "http://conceptoactual.com/cpanel/";
        var imgClass = "new-item-" + this.props.type + "--img";
        if (news) {
            ruta = news.ruta || null;
            rutaMini = news.ruta_miniatura || null;
        } else {
            null
        }
        var size = (this.props.type === "xone") ? ruta : rutaMini;
        var renderImg = <img width="100%" className={imgClass} src={"http://conceptoactual.com/cpanel/" + size} />;

        return (news) ? renderImg : null;
    },

    renderShareItemBar: function (news) {
        var shareItems = (news) ? <ShareItemBar id={news.id} /> : null;

        return shareItems;
    }
});

module.exports = NewItem;
