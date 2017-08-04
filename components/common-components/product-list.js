var _ = require('lodash');
var ProductItem = require('components/common-components/product-item');
var React = require('react');

var ProductList = React.createClass({

    render: function () {
        var products = this.props.children;

        return (
            <div className="product-list">
                {_.map(products, this.renderItems)}
            </div>
        );
    },

    renderItems: function (product, key) {
        return <ProductItem key={key}>{product}</ProductItem>;
    }
});

module.exports = ProductList;