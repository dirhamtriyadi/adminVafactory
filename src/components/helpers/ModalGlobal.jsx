import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import utility from "./../store/actions/utility_action";


const maptostate = (state) => {
  return {
    isOpen: state.utility.modalDialog,
  };
};
class ModalGlobal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  modalHide() {
    this.props.dispatch(utility.hideModal())
    localStorage.setItem("total_rp_services", JSON.stringify([]));
  }
  render() {
    return (
      <Modal
        backdrop="static"
        keyboard={false}
        isOpen={this.props.isOpen}
        toggle={() => this.props.dispatch(utility.hideModal())}
        size={this.props.size || "xl"}
      >
        <ModalHeader toggle={() => this.modalHide()}>
          {this.props.title}
        </ModalHeader>
        <ModalBody>{this.props.content}</ModalBody>
      </Modal>
    );
  }
}

export default connect(maptostate, null)(ModalGlobal);