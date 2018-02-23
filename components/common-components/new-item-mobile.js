var classNames = require('classnames');
var NewItem = require('components/common-components/new-item');
var PlacementBlock = require('components/common-components/placement-block');
var React = require('react');

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
});

module.exports = NewItemMobile;
