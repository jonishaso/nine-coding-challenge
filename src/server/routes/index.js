import root from "./root";

export default app => {
  app.use("/", root);

  app.use("/*", (req, res) => {
    res.status(404).json({
      message: "Endpoint does not exist"
    });
  });
};
