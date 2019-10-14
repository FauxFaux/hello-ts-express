import express = require("express");

const router = express.Router();

router.get(
  "/hello/:name",
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(200).send({ hello: req.params.name });
  }
);

export = router;
