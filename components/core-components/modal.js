var React = require('react');

var Modal = React.createClass({

    render: function () {
        return (
            <div className="modal">
                {this.props.children}
            </div>
        );
    }
});

module.exports = Modal;