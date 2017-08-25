var React = require('react');

var Placement = React.createClass({

  propTypes: {
      ad: React.PropTypes.oneOf(['lolla', 'santafe'])
  },

    render: function () {
        return (
          <div className="placement">
            <section className="regular slider">
              <div><img src="images/lolapaloza.jpg"/></div>
              <div><img src="images/santafe.jpg"/></div>
              <div><img src="images/lolapaloza.jpg"/></div>
              <div><img src="images/santafe.jpg"/></div>
              <div><img src="images/lolapaloza.jpg"/></div>
              <div><img src="images/santafe.jpg"/></div>
              <div><img src="images/lolapaloza.jpg"/></div>
              <div><img src="images/santafe.jpg"/></div>
              <div><img src="images/lolapaloza.jpg"/></div>
              <div><img src="images/santafe.jpg"/></div>
              <div><img src="images/lolapaloza.jpg"/></div>
              <div><img src="images/santafe.jpg"/></div>
              <div><img src="images/lolapaloza.jpg"/></div>
              <div><img src="images/santafe.jpg"/></div>
            </section>
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
