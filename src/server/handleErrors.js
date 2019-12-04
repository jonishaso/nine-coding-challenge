// ASSUMPTION: that we're only looking to handle JSON errors at this
// stage. In the future this can be expanded to support different
// error types but we'll keep it like this for now

const handleErrors = app => {
  app.use((err, req, res, next) => {
    return res.status(400).json({
      error: "Could not decode request: JSON parsing failed"
    });
  });
};

export default handleErrors;
