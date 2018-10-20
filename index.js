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
  ascii: /^[\x20-\x7E]*$/,
  string: /^[\w\x20-\x2F\x2C-\x2E\x3A\x3B\x3F\x40\x5B\x5D\x60\x7C\x7E]*$/,
  address: /^[a-zA-Z\d,."'\x2D\x20\n\r]*$/,
  gstin: /^\d{2}[A-Z]{5}\d{4}[A-Z][a-zA-Z\d]Z[a-zA-Z\d]$/,
};
