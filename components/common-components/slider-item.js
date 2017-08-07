var React = require('react');

var SliderItem = React.createClass({

    render: function () {

        return (
            <div className="slider-item">
              {this.props.children}
            </div>
        );
    }
});

module.exports = SliderItem;
