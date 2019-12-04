import express from "express";
import Joi from "joi";
import _ from "lodash";

import { hasBody } from "#root/server/middleware/routes/validation";

const router = express.Router();

// ASSUMPTION: that payload, skip, take and totalRecords are the only parameters
// that will be provided, and that nothing else will be sent in the request

router.post(
  "/",
  hasBody({
    payload: Joi.array()
      .items(Joi.object().required())
      .required(),
    skip: Joi.number(),
    take: Joi.number(),
    totalRecords: Joi.number()
  }),
  (req, res) => {
    try {
      return res.json({
        response: req.body.payload
          .filter(show => show.drm === true && show.episodeCount > 0)
          .map(show => ({
            image: show.image?.showImage, // https://github.com/tc39/proposal-optional-chaining
            slug: show.slug,
            title: show.title
          }))
      });
    } catch (e) {
      return next(e); // sends the error to handleErrors.js
    }
  }
);

export default router;
