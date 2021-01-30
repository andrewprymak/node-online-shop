exports.getHomePage = (req, res, next) =>{
    res.render("pages/index");
}
exports.getContactPage = (req, res, next) =>{
    res.render("pages/contact");
}
//shop
exports.getCategoryPage = (req, res, next) => {
    res.render("pages/category")
}
exports.getSingleProductPage = (req, res, next) => {
    res.render("pages/single-product")
}
exports.getCheckoutPage = (req, res, next) => {
    res.render("pages/checkout")
}
exports.getConfirmationPage = (req, res, next) => {
    res.render("pages/confirmation")
}
exports.getCartPage = (req, res, next) => {
    res.render("pages/cart")
}
//blog
exports.getBlogPage = (req, res, next) => {
    res.render("pages/blog")
}
exports.getSingleBlogPage = (req, res, next) => {
    res.render("pages/single-blog")
}
//pages
exports.getLoginPage = (req, res, next) => {
    res.render("pages/login")
}
exports.getRegisterPage = (req, res, next) => {
    res.render("pages/register")
}
exports.getTrackingOrderPage = (req, res, next) => {
    res.render("pages/tracking-order")
}
