const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("<h1>home page</h1>");
});
router.get("/about", (req, res, next) => {
    res.send("<h1>About page</h1>");
});
router.get("/vacancies", (req, res, next) => {
    res.send("<h1>VACANCIES</h1>");
});
router.get("/careers", (req, res, next) => {
    res.send("<h1>Your careers:</h1>");
});
router.get("/contact", (req, res, next) => {
    res.send("<h1>Phone: 0 800 000 000 00</h1>");
});
router.get("/resources", (req, res, next) => {
    res.send("<h1>Resources</h1>");
});

module.exports = router;