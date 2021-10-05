const anim = {
    home: false,
    dogs: false,
    cats: false,
    fishes: false
}

const {Pets, getPets} = require("../models/Pets");

const home = (req, res) =>{
    let list = Pets;
    let title_banner = "Todos os Animais";
    let title = title_banner;
    let img = "../images/allanimals.jpg";
    let home = req.path ? !anim.home : anim.home;
    res.render('./pages/page',{title_banner, title, img, home, list});
}
const dogs = (req, res) =>{
    let list = getPets('dog');
    let title_banner = "Cachorros";
    let title = title_banner;
    let img = "../images/banner_dog.jpg";
    let dogs = req.path === "/dogs" ? !anim.dogs : anim.dogs;
    res.render('./pages/page',{title_banner, title, img, dogs, list});
}
const cats = (req, res) =>{
    let title_banner = "Gatos";
    let list = getPets('cat');
    let title = title_banner;
    let img = "../images/banner_cat.jpg";
    let cats = req.path === "/cats" ? !anim.cats : anim.cats;
    res.render('./pages/page',{title_banner, title, img, cats, list});
}
const fishes = (req, res) =>{
    let title_banner = "Peixes";
    let list = getPets('fish');
    let title = title_banner;
    let img = "../images/banner_fish.jpg";
    let fishes = req.path === "/fishes" ? !anim.fishes : anim.fishes;
    res.render('./pages/page',{title_banner, title, img, fishes, list});
}

module.exports = {home, dogs, cats, fishes};