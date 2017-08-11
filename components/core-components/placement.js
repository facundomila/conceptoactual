var React = require('react');

var Placement = React.createClass({

  propTypes: {
      ad: React.PropTypes.oneOf(['lolla', 'santafe'])
  },

    render: function () {
        return (
            <div className="placement">
              <img className="placement-img" src='images/lolapaloza.jpg' />
              <img className="placement-img" src='images/santafe.jpg' />
              <img className="placement-img" src='images/lolapaloza.jpg' />
              <img className="placement-img" src='images/santafe.jpg' />
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
