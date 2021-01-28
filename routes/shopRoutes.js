const {getHomePage, getAboutPage, getVacanciesPage, getContactPage, getCareersPage, getResourcesPage} = require("../controllers/shopController.js")

const express = require("express");

const router = express.Router();

router.get("/", getHomePage);

router.get("/about", getAboutPage);

router.get("/vacancies", getVacanciesPage);

router.get("/careers", getCareersPage);

router.get("/contact", getContactPage);

router.get("/resources", getResourcesPage);

module.exports = router;