import React, { useEffect, useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { Form, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import successicon from '../../assets/icon/button outlined circle.png';
import Flex from '../common/utils/Flex';

const CheckoutForm = function () {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  console.log(message);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret',
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case 'succeeded':
          setMessage('Payment succeeded!');
          setShow(true);
          break;
        case 'processing':
          setMessage('Your payment is processing.');
          break;
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.');
          break;
        default:
          setMessage('Something went wrong.');
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: 'https://falcon-components-v2/payment-details',
      },
    });
    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      setMessage('An unexpected error occured.');
    }
    setIsLoading(false);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <Form className=" mx-auto w-100 w-lg-70 my-5" onSubmit={handleSubmit}>
        <div className="d-flex flex-column gap-3 flex-md-row">
          <div className="h-100 w-100 bg-light card">
            <div className="card-header bg-white ">
              <h5 className="mb-0">Billing Details</h5>
            </div>
            <div className="card-body">
              <p className="fs--1 mb-4">
                Safe money transfer using your bank accounts. Visa, maestro,
                discover, american express.
              </p>
              <PaymentElement id="payment-element" />
              {message && <div id="payment-message">{message}</div>}
            </div>
          </div>

          <div className="card w-100 bg-light h-100">
            <div className="card-header bg-white">
              <h5 className="mb-0">Billing</h5>
            </div>
            <div className="card-body">
              <div className="pb-3">
                <Form.Select aria-label="Select your Plan">
                  <option value="1">Monthly Plan (Business)</option>
                  <option value="2">Annual</option>
                  <option value="3">Monthly</option>
                </Form.Select>
              </div>
              <div className="d-flex justify-content-between fs--1 mb-1">
                <p className="mb-0">Due in 30 days</p>
                <span>$49.00</span>
              </div>
              <div className="d-flex justify-content-between fs--1 mb-1 text-success">
                <p className="mb-0">Due in 30 days</p>
                <span>$49.00</span>
              </div>
              <hr />
              <h5 className="d-flex justify-content-between">
                <span>Due today</span>
                <span>$49.00</span>
              </h5>
              <p className="fs--1 text-600">
                Once you start your trial, you will have 30 days to use Falcon
                Premium for free. After 30 days you’ll be charged based on your
                selected plan.
              </p>
              <button
                className="btn bg-primary w-100 text-white"
                disabled={isLoading || !stripe || !elements}
                id="submit"
              >
                <span id="button-text">
                  {isLoading ? (
                    <div className="spinner" id="spinner" />
                  ) : (
                    <span>
                      <FontAwesomeIcon icon={faLock} className="mx-2" />
                      Pay Securely
                    </span>
                  )}
                </span>
              </button>
              <div className="text-center mt-2">
                <small className="d-inline-block">
                  By continuing, you are agreeing to our subscriber
                  {' '}
                  <a href="/pages/billing#!">terms</a>
                  {' '}
                  and will be charged at
                  the end of the trial.
                </small>
              </div>
            </div>
          </div>
        </div>
      </Form>
      <Modal
        centered
        className=""
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <Flex direction="column" alignItems="center">
            <div className="py-1 pb-3">
              <img src={successicon} alt="success-icon" />
            </div>
            <p className="fs-2 text-800 fw-semi-bold">payment successful</p>
            <span className="border w-100 my-3" />
            <p className="text-center fs-0">
              You have successfully completed your payment. Click on continue
              and proceed with setting up your page
            </p>
            <Link
              to="/company-information"
              className="btn bg-primary text-white py-2 px-5"
            >
              Continue
            </Link>
          </Flex>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default CheckoutForm;
