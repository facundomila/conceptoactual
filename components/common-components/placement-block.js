var _ = require('lodash');
var classNames = require('classnames');
var React = require('react');
var PlacementBlock = React.createClass({

  //TODO: create placement type for swicheables ads
    render: function () {
        var ads = this.props.children;

        return (
          <div className="placement-block">
            {_.map(ads, this.renderPlacement)}
          </div>
        );
    },

    renderPlacement: function (ads) {
      console.log(ads)
        return <div className={this.getClass()}>
                  <img src={ads} />
              </div>
    },

    getClass: function () {
        return classNames({
            'placement-block-image': (this.props.type === 'third'),
            'placement-block-full': (this.props.type === 'full'),
        })
    }
});

module.exports = PlacementBlock;
