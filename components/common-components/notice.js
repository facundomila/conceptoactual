var React = require('react');

var Notice = React.createClass({

    render: function () {
        var item = this.props.children;
        var dynamicPath = "http://conceptoactual.com/cpanel/";

        console.log('test',item);

        return (
            <div className="notice">
                <div className="notice-header">
                  <div className="notice-title">{item[0].title}</div>
                  <div className="notice-subtitle">{item[0].subtitle}</div>
                </div>
                <div className="notice-category_name">{item[0].category_name}</div>
                <div className="notice-img">
                  <img src={dynamicPath+item[0].ruta} />
                </div>
                <div className="notice-epigraph">{item[0].epigraph}</div>
                <div className="notice-main">
                  <div className="notice-description">{item[0].description}</div>
                  <div className="notice-paragraph">{item[0].paragraph}</div>
                </div>
            </div>
        );
    }
});

module.exports = Notice;
