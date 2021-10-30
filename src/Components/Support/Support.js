import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
function MyVerticallyCenteredModal(props) {
  const style = {
    border: '1px solid #2B6878',
    borderRadius: '5px',
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          style={{ color: '#2B6878', fontWeight: 'bold' }}
          id="contained-modal-title-vcenter"
        >
          Fell Free Ask Your Question :
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Your name :</Form.Label>
            <Form.Control style={style} type="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Contact email :</Form.Label>
            <Form.Control style={style} type="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Contact Number :</Form.Label>
            <Form.Control style={style} type="number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your question :</Form.Label>
            <Form.Control style={style} as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-regular" onClick={props.onHide}>
          Send
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const Support = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="mt-5">
      <div className="w-75 mx-auto text-center mb-3">
        <h2>Get in Touch with Us</h2>
        <p>
          No matter if you're a traveller who needs advice, a guide in search of
          a community or a potential new partner looking to collaborate, we're
          excited to hear from you. Simply choose your topic to find the right
          contact to suit your needs.
        </p>
      </div>
      <div className="container row  mt-5">
        <div className="col-lg-8 text-start mb-2">
          <h2>24/7 Customer Support</h2>
          <p>
            Our team of experienced Travel Experts have ventured to hundreds of
            countries around the globe and have decades of first-hand travel
            experiences to share. Contact us now to have all of your
            tour-related questions answered!
          </p>
          <div>
            <>
              <Button
                className="btn-regular"
                onClick={() => setModalShow(true)}
              >
                Ask A Question
              </Button>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </>
          </div>
        </div>
        <div className="col-lg-4 d-flex flex-wrap">
          <img
            style={{ height: '80px' }}
            className="img-fluid rounded-circle"
            src="https://cdn.tourradar.com/s3/team/original/90_Jaww8wcm.jpg"
            alt=""
          />
          <img
            style={{ height: '80px' }}
            className="img-fluid rounded-circle"
            src="https://cdn.tourradar.com/s3/team/original/116_X7vUqJpc.jpg"
            alt=""
          />
          <img
            style={{ height: '80px' }}
            className="img-fluid rounded-circle"
            src="https://cdn.tourradar.com/s3/team/original/119_xutrVM4W.jpg"
            alt=""
          />
          <img
            style={{ height: '80px' }}
            className="img-fluid rounded-circle"
            src="https://cdn.tourradar.com/s3/team/original/129_v6ehPU2s.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Support;
