const {Router} = require("express")
const BaseController = require("../controllers")
const {body, param, query} = require("express-validator")
const validate = require("../modules/helpers")

const router = Router()

router.get("/:name",
    validate([
        param("name").isString().trim().isLength({min: 1}),
        query("id").isNumeric()
    ]),
    BaseController.getName)

module.exports = router