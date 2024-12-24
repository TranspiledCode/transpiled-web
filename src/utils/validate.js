// Validate images
const isValidImage = (url) => {
  return /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg)$/i.test(url);
};

// Validate email
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export { isValidImage, isValidEmail };
