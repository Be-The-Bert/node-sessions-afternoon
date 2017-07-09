const swag = require('./../models/swag');
module.exports = {
    add: (req, res, next) =>{
        const index = req.session.user.cart.findIndex(swag => swag.id == req.query.id);
        if (index === -1) {
            req.session.user.cart.push(swag.find(swag => swag.id == req.query.id));
            req.session.user.total += swag.find(swag => swag.id == req.query.id);
        }
        res.status(200).send(req.session.user);
    },
    delete: (req, res, next) =>{
        if (swag.find(swag => swag.id == req.query.id)) {
            let i = req.session.user.cart.findIndex(swag => swag.id == req.query.id);
            req.session.user.cart.splice(i, 1);
            req.session.user.total -= swag.find(swag => swag.id == req.query.id);
        }
        res.status(200).send(req.session.user);
    },
    checkout: (req, res, next) =>{
        req.session.user.cart = [];
        req.session.user.total = 0;
        res.status(200).send(req.session.user);
    }
}