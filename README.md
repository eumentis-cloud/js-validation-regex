# Validation RegEx for Node.js and Javascript

This library provides regular expression (RegEx) patterns for validation of:

|  Key  |  Description  |
| ------------- | ------------- |
|  mobile  | Mobile no. in India (only ten digits without 0 or country code). Eg - 9xxxxxxxxx  |
|  landline  | Landline no. in India (landline number with STD code, no hypens or spaces). Eg - 0204xxxxxxx  |
|  name  | Person's name (only uppercase & lowercase letters/characters and space allowed)  |
|  pincode  | Pincode/Zipcodes in India  |
|  pan  | PAN no. in India  |
|  aadhaar  |  AADHAAR no. in India (12 digits with no space allowed in between)  |
|  filename  |  File names (Only letters, digits, '-', '_', '.' are allowed. Spaces allowed only in middle and not at the start or end)  |
|  path  |  URL's or paths (Only letters, digits, '-', '_', '.', '/' are allowed)  |
|  float  |  Floating point numbers  |
|  dateString  |  Date with format = YYYY-MM-DD  |
|  charactersOnly  |  Only uppercase and lowercase letters  |
|  alphanumeric  |  Only digits and uppercase & lowercase letters  |
|  ascii  |  Only ASCII characters  |
|  string  |  Strings  |
|  address  |  Address input fields  |
|  gstin  |  GSTIN no. of businesses in India  |
|  drivingLicence  |  Driving Licence no. in India (no spaces and hypens allowed)  |
|  vehicleRegistrationNumber  |  Vehicle Registration no. in India (no spaces and hypens allowed)  |

## How to use?

```JS
// Node.js or non ES6
const validationRegex = require('@eumentis-cloud/js-validation-regex');
// ES6
import validationRegex from '@eumentis-cloud/js-validation-regex';

const valueToValidate;
// Replace <key> with any key (mentioned in table above) that you want to use
validationRegex.<key>.test(valueToValidate);  // true of false
```
