module.exports = {
  mobile: /^[7-9]\d{9}$/,
  landline: /^[0]\d{10}$/,
  name: /^[a-zA-Z][a-zA-Z ]*[a-zA-Z]$/,
  pincode: /^\d{6}$/,
  pan: /^[A-Z]{5}\d{4}[A-Z]$/,
  aadhaar: /^\d{12}$/,
  filename: /^[a-zA-Z\d][a-zA-Z -_\d.]*[a-zA-Z\d]$/,
  path: /^[a-zA-Z\d-_/.]+$/,
  float: /^\d+(\.\d+)?$/,
  dateString: /^\d{4}-\d{2}-\d{2}$/,
  charactersOnly: /^[a-zA-Z]*$/,
  alphanumeric: /^[a-zA-Z\d]*$/,
};
