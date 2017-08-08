var React = require('react');

var SliderNews = React.createClass({

    render: function () {
        var news = this.props.children;
        console.log(news)

        return (
          <div className="container">
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
                  <img src={"cpanel/"+news[1].ruta} />
                </div>
                <div className="item">
                  <img src={"cpanel/"+news[2].ruta} />
                </div>
                <div className="item">
                  <img src={"cpanel/"+news[3].ruta} />
                </div>
                <div className="item">
                  <img src={"cpanel/"+news[4].ruta} />
                </div>
                <div className="item">
                  <img src={"cpanel/"+news[5].ruta} />
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
    }
});

module.exports = SliderNews;
