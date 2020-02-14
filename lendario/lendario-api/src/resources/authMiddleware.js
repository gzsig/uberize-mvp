let jwt = require('jsonwebtoken');

const authMiddleware = (request, response, next) => {
  const token =
    request.headers['x-access-token'] || request.headers['authorization'];
  console.log('header token:', token);
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        return response.json({
          success: false,
          message: 'Token is not valid'
        });
      } else {
        request.decoded = decoded;
        next();
      }
    });
  } else {
    return response.json({
      success: false,
      message: 'Auth token is not supplied'
    });
  }
};

module.exports = {
  authMiddleware
};
