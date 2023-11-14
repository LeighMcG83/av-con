import React, { useRef, useState } from 'react';
import { Alert } from '@mui/material';

export default function ContactUsForm() {
  const form = useRef();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'lastName') {
      setLastName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      message,
    };

    fetch('http://localhost:3001/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        setAlertMessage('Success You\'ve Been Registered');
        setAlertType('success');
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error:', error);
        setAlertMessage('Ooops Something Went Wrong - Please Try Again');
        setAlertType('error');
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} style={{ maxWidth: '80%', margin: 'auto' }}>
      <div className="username">
        <label className="form__label" htmlFor="firstName">
          First Name:{' '}
        </label>
        <input
          className="form__input"
          type="text"
          value={firstName}
          onChange={(e) => handleInputChange(e)}
          name="firstName"
          id="firstName"
          placeholder="First Name"
          style={{ width: '100%' }}
        />
      </div>
      <br />
      <div className="lastname">
        <label className="form__label" htmlFor="lastName">
          Last Name:{' '}
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          className="form__input"
          onChange={(e) => handleInputChange(e)}
          placeholder="Last Name"
          style={{ width: '100%' }}
        />
      </div>
      <br />
      <div className="email">
        <label className="form__label" htmlFor="email">
          Email:{' '}
        </label>
        <input
          type="email"
          id="email"
          className="form__input"
          value={email}
          onChange={(e) => handleInputChange(e)}
          name="email"
          placeholder="Email"
          style={{ width: '100%' }}
        />
      </div>
      <br />
      <div className="message">
        <label className="form__label" htmlFor="message">
          Message: {' '}
        </label>
        <input
          type="text"
          id="message"
          className="form__input"
          value={message}
          onChange={(e) => handleInputChange(e)}
          name="message"
          placeholder="Write your message to us"
          style={{ width: '100%' }}
        />
      </div>
      <div style={{ marginTop: '20px' }}>
        <button
          type="submit"
          name="Submit Registration Button"
          onSubmit={sendEmail}
          style={{ padding: '10px', width: '100%' }}
        >
          <b>Submit</b>
        </button>
      </div>
      {alertMessage && (
        <Alert severity={alertType} style={{ marginTop: '20px' }}>
          {alertMessage}
        </Alert>
      )}
    </form>
  );
}