var classNames = require('classnames');
var React = require('react');
var ShareItemBar = require('components/core-components/share-item-bar');

var NewItem = React.createClass({

    render: function () {
        var news = this.props.children;

        return (
            <div className={this.getClass()}>
              <a href={this.getLocation(news)}>
                {this.renderTitle(news)}
                {this.renderSubtitle(news)}
                {this.renderImg(news)}
              </a>
            </div>
        );
    },

    getClass: function () {
        return classNames({
            'new-item-xthree': (this.props.type === 'xthree'),
            'new-item-xtwo': (this.props.type === 'xtwo'),
            'new-item-xone': (this.props.type === 'xone')
        })
    },

    getLocation: function (news) {
        var location = (news) ? "news.html?id="+news.id : 'news.html?id=0';

        return location;
    },

    renderTitle: function (news) {
        var titleClass = "new-item-"+this.props.type+"--title";
        var title = (news) ? <div className={titleClass}>{news.title}</div> : 'No Title';

        return title;
    },

    renderSubtitle: function (news) {
        var categoryClass = "new-item-"+this.props.type+"--category";
        var category = (news) ? <div className={categoryClass}>{news.category_name}</div> : 'No Category';

        return category;
    },

    renderImg: function (news) {
        var dynamicPath = "http://conceptoactual.com/cpanel/";
        var imgClass = "new-item-"+this.props.type+"--img";

        if (news) {
            var ruta = news.ruta || null;
            var rutaMini = news.ruta_miniatura || null;
        } else {
            'No Image'
        }

        var size = (this.props.type == "xone") ? ruta : rutaMini;

        return <img width="100%" className={imgClass} src={"http://conceptoactual.com/cpanel/"+size}/>;
    },

    renderShareItemBar: function (news) {
        var shareItems = (news) ? <ShareItemBar id={news.id} /> : 'No id';

        return shareItems;
    }
});

module.exports = NewItem;
