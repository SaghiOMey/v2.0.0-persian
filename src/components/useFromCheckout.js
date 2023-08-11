import { useState } from "react";

import { apartmentValidator, cityValidator, countryValidator, provinceValidator, postalcodeValidator, phoneValidator } from "./validcheckout";

const touchErrors = (errors) => {
  return Object.entries(errors).reduce((acc, [field, fieldError]) => {
    acc[field] = {
      ...fieldError,
      dirty: true,
    };
    return acc;
  }, {});
};

export const useFormCheckout = (form) => {
  const [errors, setErrors] = useState({
    apartment: {
      dirty: false,
      error: false,
      message: "",
    },
    city: {
      dirty: false,
      error: false,
      message: "",
    },
    country: {
      dirty: false,
      error: false,
      message: "",
    },
    province: {
      dirty: false,
      error: false,
      message: "",
    },
    postalcode: {
      dirty: false,
      error: false,
      subject: "",
    },
    phone: {
      dirty: false,
      error: false,
      subject: "",
    },
  });

  const validateForm = ({ form, field, errors, forceTouchErrors = false }) => {
    let isValid = true;

    // Create a deep copy of the errors
    let nextErrors = JSON.parse(JSON.stringify(errors));

    // Force validate all the fields
    if (forceTouchErrors) {
      nextErrors = touchErrors(errors);
    }

    const { apartment, city, province, postalcode, phone } = form;

    if (nextErrors.apartment.dirty && (field ? field === "apartment" : true)) {
      const apartmentMessage = apartmentValidator(apartment, form);
      nextErrors.apartment.error = !!apartmentMessage;
      nextErrors.apartment.message = apartmentMessage;
      if (!!apartmentMessage) isValid = false;
    }

    if (nextErrors.city.dirty && (field ? field === "city" : true)) {
      const cityMessage = cityValidator(city, form);
      nextErrors.city.error = !!cityMessage;
      nextErrors.city.message = cityMessage;
      if (!!cityMessage) isValid = false;
    }

    if (nextErrors.country.dirty && (field ? field === "country" : true)) {
      const countryMessage = countryValidator(country, form);
      nextErrors.country.error = !!countryMessage;
      nextErrors.country.message = countryMessage;
      if (!!countryMessage) isValid = false;
    }

    if (nextErrors.province.dirty && (field ? field === "province" : true)) {
      const provinceMessage = provinceValidator(province, form);
      nextErrors.province.error = !!provinceMessage;
      nextErrors.province.message = provinceMessage;
      if (!!provinceMessage) isValid = false;
    }

    if (nextErrors.postalcode.dirty && (field ? field === "postalcode" : true)) {
      const postalcodeMessage = postalcodeValidator(postalcode, form);
      nextErrors.postalcode.error = !!postalcodeMessage;
      nextErrors.postalcode.message = postalcodeMessage;
      if (!!postalcodeMessage) isValid = false;
    }

    if (nextErrors.phone.dirty && (field ? field === "phone" : true)) {
      const phoneMessage = phoneValidator(phone, form);
      nextErrors.phone.error = !!phoneMessage;
      nextErrors.phone.message = phoneMessage;
      if (!!phoneMessage) isValid = false;
    }

    setErrors(nextErrors);

    return {
      isValid,
      errors: nextErrors,
    };
  };

  const onBlurField = (e) => {
    const field = e.target.name;
    const fieldError = errors[field];
    if (fieldError.dirty) return;

    const updatedErrors = {
      ...errors,
      [field]: {
        ...errors[field],
        dirty: true,
      },
    };

    validateForm({ form, field, errors: updatedErrors });
  };

  return {
    validateForm,
    onBlurField,
    errors,
  };
};
