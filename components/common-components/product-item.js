var React = require('react');
var StoreActionBar = require('components/application-components/manage-data-store/store-action-bar');

var ProductItem = React.createClass({

    render: function () {
        var products = this.props.children;

        return (
            <div className="product-item">
                {this.renderTitle(products)}
                {this.renderSubtitle(products)}
                {this.renderActionBar(products)}
            </div>
        );
    },

    renderTitle: function (products) {
        return <div className="product-item-title">{products.title}</div>;
    },

    renderSubtitle: function (products) {
        return <div className="product-item-subtitle">{products.subtitle}</div>;
    },

    renderActionBar: function (products) {
        var productId = products.id;
        var productTitle = products.title;

        return (<div className="product-item-action-bar">
                    <StoreActionBar id={productId} title={productTitle}/>
               </div>);
    }
});

module.exports = ProductItem;