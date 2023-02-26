/**
 * Validates login form input.
 *
 * @param {Object} formData - Object containing user's email and password.
 * @param {string} formData.mail - User's email address.
 * @param {string} formData.password - User's password.
 * @returns {boolean} - Whether the form data is valid.
 */
export const validateLoginForm = ({ mail, password }) => {
  const isMailValid = validateMail(mail);
  const isPasswordValid = validatePassword(password);
  return isMailValid && isPasswordValid;
};

/**
 * Validates a password string.
 *
 * @param {string} password - The password string to validate.
 * @returns {boolean} - Whether the password is valid.
 */
const validatePassword = (password) => {
  return password.length > 5 && password.length < 12;
};

/**
 * Validates an email address string.
 *
 * @param {string} mail - The email address string to validate.
 * @returns {boolean} - Whether the email address is valid.
 */
const validateMail = (mail) => {
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/;
  return emailRegex.test(mail);
};
