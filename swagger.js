import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "API documentation for our application",
    },
    servers: [
      {
        url: `https://userauthapi-gh1l.onrender.com`,
      },
    ],
  },
  apis: ["./routes/userRoute.js"], // Ensure this path is correct for your project
};

const specs = swaggerJsdoc(options);

export { swaggerUi, specs };
