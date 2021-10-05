const {getFromName} = require('../models/Pets');

const search = (req, res)=>{
    let q = req.query.q;
    let list = getFromName(q);
    res.render("./pages/page", {list, q});
}

module.exports = {search};