var React = require('react');

var SliderNews = React.createClass({

    render: function () {
        var news = this.props.children;
        console.log(news);
        var dynamicPath = "http://conceptoactual.com/cpanel/";

        return (
          <div {...this.getProps()}>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-slide-to="0" className="active"></li>
                <li data-slide-to="1"></li>
                <li data-slide-to="2"></li>
                <li data-slide-to="3"></li>
                <li data-slide-to="4"></li>
                <li data-slide-to="5"></li>
              </ol>
              <div className="carousel-inner">
                <div className="item active">
                  <div className="slider-news-title">{news[0].title}</div>
                  <img src={dynamicPath+news[0].ruta} />
                </div>
                <div className="item">
                  <div className="slider-news-title">{news[1].title}</div>
                  <img src={dynamicPath+news[1].ruta} />
                </div>
                <div className="item">
                  <div className="slider-news-title">{news[2].title}</div>
                  <img src={dynamicPath+news[2].ruta} />
                </div>
                <div className="item">
                  <div className="slider-news-title">{news[3].title}</div>
                  <img src={dynamicPath+news[3].ruta} />
                </div>
                <div className="item">
                  <div className="slider-news-title">{news[4].title}</div>
                  <img src={dynamicPath+news[4].ruta} />
                </div>
                <div className="item">
                  <div className="slider-news-title">{news[5].title}</div>
                  <img src={dynamicPath+news[5].ruta} />
                </div>
              </div>

              <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        );
    },

    getProps: function() {
      return {
          className: 'container',
          style: {
            width: '100%',
            padding: 0
          }
      }
    }
});

module.exports = SliderNews;
