const home = (req, res) =>{
    res.send("Rota Home");
    //res.render('pages/page');
}
const dogs = (req, res) =>{
    res.send("Rota Dogs");
    //res.render('pages/page');
}
const cats = (req, res) =>{

    //res.render('pages/page');
}
const fishes = (req, res) =>{

    //res.render('pages/page');
}

module.exports = {home, dogs, cats, fishes};