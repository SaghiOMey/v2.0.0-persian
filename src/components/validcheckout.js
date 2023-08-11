export const apartmentValidator = (apartment) => {
  if (!apartment) {
    return "Apartment is required";
  } else if (apartment.length < 20) {
    return "Apartment must have a minimum 20 characters";
  } else if (apartment.length > 40) {
    return "Apartment must have a maximum 40 characters";
  }
  return "";
};

export const cityValidator = (city) => {
  if (!city) {
    return "City is required";
  } else if (city.length > 15) {
    return "City must have a maximum 15 characters";
  }
  return "";
};

export const countryValidator = (country) => {
  if (!country) {
    return "Country is required";
  }
  return "";
};

export const provinceValidator = (province) => {
  if (!province) {
    return "Province is required";
  } else if (province.length < 15) {
    return "Province must have a minimum 15 characters";
  } else if (province.length > 30) {
    return "Province must have a maximum 30 characters";
  }
  return "";
};

export const postalcodeValidator = (postalcode) => {
  if (!postalcode) {
    return "Postalcode is required";
  } else if (postalcode.length < 6) {
    return "Postalcode must have a minimum 6 characters";
  } else if (postalcode.length > 8) {
    return "Postalcode must have a maximum 8 characters";
  }
  return "";
};

export const phoneValidator = (phone) => {
  if (!phone) {
    return "Phone is required";
  } else if (phone.length > 15) {
    return "Phone must have a maximum 15 characters";
  }
  return "";
};
