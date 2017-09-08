var _ = require('lodash');
var React = require('react');

var smallAds = {
  lolapallozza: 'images/ads/small/lolapaloza.jpg',
  santafe: 'images/ads/small/santafe.jpg',
  hipotecario: 'images/ads/small/hipotecario.jpg',
  hoyts: 'images/ads/small/hoyts.jpg',
  mercadolibre: 'images/ads/small/mercadolibre.jpg',
  carrefour: 'images/ads/small/carrefour.jpg'
};

var largeAds = {
  lolapallozza: 'images/ads/large/lolapaloza.gif',
  paladini: 'images/ads/large/paladini.gif',
  nike: 'images/ads/large/nike.gif',
  lolapallozza_b: 'images/ads/large/lolapaloza2.gif',
  naranja: 'images/ads/large/naranja.gif'
};

var Placement = React.createClass({

    render: function () {
        return (
          <div className="placement">
            {this.getPlacement()}
          </div>
        );
    },

    getPlacement: function() {
        placementConfig = {
          small: this.renderSlider,
          large: this.renderImg
        };

        return placementConfig[this.props.type]() || null;
    },

    renderSlider: function () {
        return (
          <section className="regular slider">
            {_.map(smallAds, function(key , imgPath) {
                  return <div><img src={smallAds[imgPath]} /></div>
                })
            }
          </section>
        );
    },

    renderImg: function () {
        return (
          <div className="placement-large-ad">
            <img width="100%" src={largeAds[Object.keys(largeAds)[this.props.index]]} />
          </div>)
    }
});

module.exports = Placement;
