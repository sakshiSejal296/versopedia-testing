const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'VerseOpedia API',
      version: '1.0.0',
      description: 'API documentation for VerseOpedia project',
    },
  },
  apis: ['./routes/*.js'], // Path to your route files with JSDoc
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
