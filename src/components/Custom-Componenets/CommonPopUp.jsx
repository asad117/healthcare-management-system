import { Fragment, useState } from "react";
import { Modal, Row, Col } from "react-bootstrap";
import CustomButton from "./CustomButton";
const CommonPopUp = ({
  show,
  heading,
  content,
  onClick,
  handleClose,
  submitBtn,
}) => {
  return (
    <Fragment>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>
          <Row>
            <Col>
              <CustomButton
                primary={true}
                onClick={handleClose}
                name="Close"
                className={"btnwidth"}
              />
            </Col>
            {submitBtn && (
              <Col>
                <CustomButton
                  primary={true}
                  onClick={onClick}
                  name={submitBtn}
                  className={"btnwidth"}
                />
              </Col>
            )}
          </Row>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default CommonPopUp;
