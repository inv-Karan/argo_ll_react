import React from 'react';

import SignUp from '../container/Login/signup';
import SignIn from '../container/Login/signin';

const nameValidation = (fieldName, fieldValue) => {
  if (fieldValue.trim() === '') {
    return `${fieldName} is required`;
  }
  if (/[^a-zA-Z -]/.test(fieldValue)) {
    return 'Invalid characters';
  }
  if (fieldValue.trim().length < 3) {
    return `${fieldName} needs to be at least three characters`;
  }
  return null;
};

const emailValidation = Email => {
  if (
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      Email,
    )
  ) {
    return null;
  }
  if (Email.trim() === '') {
    return 'Email is required';
  }
  return 'Please enter a valid email';
};

const mobileValidation = (fieldNumber, fieldValue) => {
    if (fieldValue.trim() === '') {
      return `${fieldNumber} is required`;
    }
    if (/[^0-9]/.test(fieldValue)) {
      return 'Invalid characters';
    }
    if (fieldValue.trim().length == 10) {
      return `${fieldNumber} must be ten digits`;
    }
    return null;
  };

  const altmobileValidation = (fieldNumber, fieldValue) => {
    if (fieldValue.trim() === '') {
      return `${fieldNumber} is required`;
    }
    if (/[^0-9]/.test(fieldValue)) {
      return 'Invalid characters';
    }
    if (fieldValue.trim().length == 10) {
      return `${fieldNumber} must be ten digits`;
    }
    return null;
  };

  const passwordValidation = (fieldPassword, fieldValue) => {
    if (fieldValue.trim() === '') {
      return `${fieldPassword} is required`;
    }
    if (/[a-zA-Z0-9.!#$%&’*]/.test(fieldValue)) {
      return 'Invalid characters';
    }
    if (fieldValue.trim().length >= 6) {
      return `${fieldPassword} must be ten digits`;
    }
    return null;
  };

  const addressValidation = (fieldAddress, fieldValue) => {
    if (fieldValue.trim() === '') {
      return `${fieldAddress} is required`;
    }
    if (/[a-zA-Z0-9/-]/.test(fieldValue)) {
      return 'Invalid characters';
    }
    if (fieldValue.trim().length > 6) {
      return `${fieldAddress} must be ten digits`;
    }
    return null;
  };

  const dobValidation = (fieldDOB, fieldValue) => {
    if (fieldValue.trim() === '') {
      return `${fieldDOB} is required`;
    }
    if (/[0-9/-]/.test(fieldValue)) {
      return 'Invalid characters';
    }
    if (fieldValue.trim().length > 6) {
      return `${fieldDOB} must be ten digits`;
    }
    return null;
  };

const validate = {
  Name: Name => nameValidation('Name', Name),
  Email: emailValidation,
  Mobile: Mobile => mobileValidation('Mobile', Mobile),
  AltMobile: AltMobile => altmobileValidation('AltMobile', AltMobile),
  Password: Password => passwordValidation('Password', Password),
  Address: Address => addressValidation('Address', Address),
  DateOfBirth: DateOfBirth => dobValidation('DateOfBirth', DateOfBirth)
};

const initialValues = {
  Name: 'Demo',
  Email: 'abc@example.com',
  Mobile: '1234567890',
  AltMobile: '1234567890',
  Password: '',
  Address: 'abcxyz',
  DateOfBirth: '00-00-0000'
};
