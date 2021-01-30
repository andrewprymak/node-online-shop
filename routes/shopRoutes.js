const {getHomePage, getContactPage, getCategoryPage, getSingleProductPage, getCheckoutPage, getConfirmationPage, getCartPage, getBlogPage, getSingleBlogPage, getLoginPage, getRegisterPage, getTrackingOrderPage} = require("../controllers/shopController.js")
const express = require("express");
const router = express.Router();

router.get("/", getHomePage);
router.get("/contact", getContactPage);
//shop
router.get("/category", getCategoryPage);
router.get("/single-product", getSingleProductPage);
router.get("/checkout", getCheckoutPage);
router.get("/confirmation", getConfirmationPage);
router.get("/cart", getCartPage);
//blog
router.get("/blog", getBlogPage);
router.get("/single-blog", getSingleBlogPage);
//pages
router.get("/login", getLoginPage);
router.get("/register", getRegisterPage);
router.get("/tracking-order", getTrackingOrderPage);

module.exports = router;