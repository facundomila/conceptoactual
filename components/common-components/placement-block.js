var _ = require('lodash');
var React = require('react');
//TODO: create placement type for swicheables ads
var PlacementBlock = React.createClass({

    render: function () {
        var ads = this.props.children;

        return (
          <div className="placement-block">
            {_.map(ads, this.renderPlacement)}
          </div>
        );
    },

    renderPlacement: function (ads) {
        return <div className="placement-block-image">
                  <img src={ads.ad} />
              </div>
    }
});

module.exports = PlacementBlock;
