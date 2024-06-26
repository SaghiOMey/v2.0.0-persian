export const nameValidator = (name) => {
  if (!name) {
    return "Name is required";
  } else if (name.length < 3) {
    return "Name must have a minimum 3 characters";
  } else if (name.length > 24) {
    return "Name must have a maximum 24 characters";
  }
  return "";
};

export const emailValidator = (email) => {
  if (!email) {
    return "Email is required";
  } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
    return "Incorrect email format";
  }
  return "";
};

export const messageValidator = (message) => {
  if (!message) {
    return "Message is required";
  } else if (message.length < 20) {
    return "Message must have a minimum 20 characters";
  }
  return "";
};

export const subjectValidator = (subject) => {
  if (!subject) {
    return "Subject is required";
  } else if (subject.length > 30) {
    return "Subject must have a maximum 30 characters";
  }
  return "";
};
