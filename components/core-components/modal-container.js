var React = require('react');
var Modal = require('components/core-components/modal');

var ModalContainer = React.createClass({

    render: function () {
        return (
            <div className="modal-container">
                {this.renderModal()}
            </div>
        );
    },

    renderModal: function () {
        var modal = null;

        if (this.props.disable) {
            modal = (
                <div>
                    <div className="modal-container-overlay">
                    </div>
                    <Modal closeMe={this.props.closeMe}>
                        <h2>Seguro que quieres eliminar {this.props.title}?</h2>
                        <button onClick={this.props.closeMe}>Close</button>
                        <button onClick={this.props.closeMe}>No</button>
                        <button onClick={this.props.confirm}>Confirmar</button>
                    </Modal>
                </div>
            );
        }

        return modal;
    }
});

module.exports = ModalContainer;