exports.getHomePage = (req, res, next) =>{

    res.render("pages/index");
}
exports.getAboutPage = (req, res, next) =>{

    res.render("pages/about");
}
exports.getVacanciesPage = (req, res, next) =>{

    res.render("pages/vacancies")
}
exports.getContactPage = (req, res, next) =>{
    res.render("pages/contact");
}
exports.getCareersPage = (req, res, next) => {
    res.render("pages/careers")
}
exports.getResourcesPage = (req, res, next) => {
    res.render("pages/resources")
}