module.exports = {
  env: {
    DEV_API_KEY: process.env.DEV_API_KEY,
    PROJECT_ID: process.env.PROJECT_ID,
    DATASET: process.env.DATASET,
    USER_ID: process.env.USER_ID,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    SERVICE_ID: process.env.SERVICE_ID,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};
