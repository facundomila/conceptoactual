var React = require('react');

var Placement = React.createClass({

  propTypes: {
      ad: React.PropTypes.oneOf(['lolla', 'santafe'])
  },

    render: function () {
        return (
            <div className="placement">
              <img className="placement-img" src={this.getPlacement()} />
            </div>
        );
    },

    getPlacement: function() {
      var adConf = {
        lolla: 'images/lolla.png',
        santafe: 'images/stafecultura.jpg'
      }
        return adConf[this.props.ad];
    }
});

module.exports = Placement;
