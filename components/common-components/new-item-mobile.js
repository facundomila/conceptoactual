var classNames = require('classnames');
var NewItem = require('components/common-components/new-item');
var PlacementBlock = require('components/common-components/placement-block');
var React = require('react');
var ShareItemBar = require('components/core-components/share-item-bar');

var NewItemMobile = React.createClass({

    render: function () {
        var gridContent = this.props.children;

        return (
            <div className="new-item-mobile">
              {this.getComponent(gridContent)}
            </div>
        );
    },

    getComponent: function (content) {
        var component = (content.id) ? this.renderNews(content) : this.renderAds(content);

        return component;
    },

    renderAds: function (gridContent) {
        return <PlacementBlock type="full">{gridContent}</PlacementBlock>;
    },

    renderNews: function (gridContent) {
        return <NewItem type="xone--mobile">{gridContent}</NewItem>;
    }

    // getLocation: function (gridContent) {
    //     var location = (gridContent) ? "news.html?id="+news.id : 'news.html?id=0';
    //
    //     return location;
    // },
    //
    // renderTitle: function (gridContent) {
    //     var titleClass = "new-item-"+this.props.type+"--title";
    //     var title = (gridContent) ? <div className={titleClass}>{news.title}</div> : 'No Title';
    //     
    //     return title;
    // },
    //
    // renderSubtitle: function (gridContent) {
    //     var categoryClass = "new-item-"+this.props.type+"--category";
    //     var category = (gridContent) ? <div className={categoryClass}>{news.category_name}</div> : 'No Category';
    //
    //     return category;
    // },
    //
    // renderImg: function (gridContent) {
    //     var dynamicPath = "http://conceptoactual.com/cpanel/";
    //     var imgClass = "new-item-"+this.props.type+"--img";
    //
    //     if (gridContent) {
    //         var ruta = news.ruta || null;
    //         var rutaMini = news.ruta_miniatura || null;
    //     } else {
    //         'No Image'
    //     }
    //
    //     var size = (this.props.type == "xone") ? ruta : rutaMini;
    //
    //     return <img width="100%" className={imgClass} src={"http://conceptoactual.com/cpanel/"+size}/>;
    // },
    //
    // renderShareItemBar: function (gridContent) {
    //     var shareItems = (gridContent) ? <ShareItemBar id={gridContent.id} /> : 'No id';
    //
    //     return shareItems;
    // }
});

module.exports = NewItemMobile;
