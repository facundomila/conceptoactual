var React = require('react');
var Icon = require('components/core-components/icon');

var SiteMap = React.createClass({

    render: function () {
        return (
            <div className="site-map">
                <div className="site-map-secciones">
                    Secciones
                    <hr className="site-map-line"/>
                    <p className="site-map-paragraph">General</p>
                    <p className="site-map-paragraph">Deportes</p>
                    <p className="site-map-paragraph">Espectaculo</p>
                    <p className="site-map-paragraph">Economia</p>
                    <p className="site-map-paragraph">Tecnologia</p>
                    <p className="site-map-paragraph">Turismo</p>
                </div>
                <div className="site-map-secciones">
                    Contacto
                    <hr className="site-map-line"/>
                    <p className="site-map-paragraph">contacto@conceptoactual.com</p>
                    <p className="site-map-paragraph">info@conceptoactual.com</p>
                    <p className="site-map-paragraph">Tel: +54 0341 156 000-000</p>
                </div>
                <div className="site-map-secciones">
                    Desarrollo
                    <hr className="site-map-line"/>
                    <p className="site-map-paragraph">Desarrollador.com</p>
                </div>
            </div>
        );
    }
});

module.exports = SiteMap;
