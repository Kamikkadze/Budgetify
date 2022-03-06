const {validationResult} = require("express-validator");

module.exports = validate = (validations) => {
    return async (req, res, next) => {
        await Promise.all(validations.map((validation) => validation.run(req)));

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }

        const errorsArray = [];

        await errors.array().forEach(error => {
            if (!errorsArray.includes(error.param))
                errorsArray.push(error.param);
        });

        res.status(400).json({
            error: {
                statusCode: 400,
                type: "validation",
                fields: errorsArray,
            },
        });
    };
};