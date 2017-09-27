var React = require('react');

var SliderNews = React.createClass({

    render: function () {
        var news = this.props.children;
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
                <a href={"news.html?id="+news[0].id}>
                  <div className="slider-news-title">{news[0].title}</div>
                  <img className="slider-news-img" src={dynamicPath+news[0].ruta} />
                </a>
                </div>
                <div className="item">
                <a href={"news.html?id="+news[1].id}>
                  <div className="slider-news-title">{news[1].title}</div>
                  <img className="slider-news-img" src={dynamicPath+news[1].ruta} />
                </a>
                </div>
                <div className="item">
                <a href={"news.html?id="+news[2].id}>
                  <div className="slider-news-title">{news[2].title}</div>
                  <img className="slider-news-img" src={dynamicPath+news[2].ruta} />
                </a>
                </div>
                <div className="item">
                <a href={"news.html?id="+news[3].id}>
                  <div className="slider-news-title">{news[3].title}</div>
                  <img className="slider-news-img" src={dynamicPath+news[3].ruta} />
                </a>
                </div>
                <div className="item">
                <a href={"news.html?id="+news[4].id}>
                  <div className="slider-news-title">{news[4].title}</div>
                  <img className="slider-news-img" src={dynamicPath+news[4].ruta} />
                </a>
                </div>
                <div className="item">
                <a href={"news.html?id="+news[5].id}>
                  <div className="slider-news-title">{news[5].title}</div>
                  <img className="slider-news-img" src={dynamicPath+news[5].ruta} />
                </a>
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
            position: 'relative',
            top: '0',
            width: '100%',
            padding: 0
          }
      }
    }
});

module.exports = SliderNews;
