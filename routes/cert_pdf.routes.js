const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  const { url_image, full_name, course_name, received_date } = req.query;
  url_image.trim();
  full_name.trim();
  course_name.trim();
  course_name.trim();
  res.render("cert_pdf", {
    url_image,
    full_name,
    course_name,
    received_date,
  });
});

// router.post("/", async (req, res, next) => {
//   const { full_name, course_name } = req.body;
//   res.render("cert_pdf", {
//     full_name,
//     course_name,
//   });
// });

router.post("/", async (req, res, next) => {
  res.render("cert_pdf", { title: "Express" });
});

module.exports = router;
