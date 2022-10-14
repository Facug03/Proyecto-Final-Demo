const { Router } = require("express");

// Traigo las funciones necesarias
const { getBookDetail } = require("../utils/getBookDetail");
const { putBookVisibility } = require("../utils/putBookVisibility");

const router = Router();

router.get("/:id", async (req, res) => {
  const {id}= req.params
  const response = await getBookDetail(id)
  let statusCode;
  response.messageError ? (statusCode = 404) : (statusCode = 201);

  res.status(statusCode).json(response);
});

router.put("/:id", async (req, res) => {
  const response = await putBookVisibility(req.params);

  let statusCode;
  response.messageError ? (statusCode = 404) : (statusCode = 201);

  res.status(statusCode).json(response);
});

module.exports = router;
