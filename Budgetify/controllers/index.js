const BaseController = {
    getName: async (req, res) => {
        res.json({
            message: `Hello ${req.params.name}, your id: ${req.query.id}`
        })
    }
}

module.exports = BaseController