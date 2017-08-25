var _ = require('lodash');
var React = require('react');
var storeProductApi = require('services/store-product/store-product-api');
var Home = require('components/application-components/index-page/home')

var IndexPage = React.createClass({

    render: function () {
        return (
            <div className="index-page">
              <div className="index-page-top-block"></div>
                <Home />
              <div className="index-page-bottom-block"></div>  
            </div>
        );
    }
});

module.exports = IndexPage;
