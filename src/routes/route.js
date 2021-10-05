const { Router } = require('express');
const PageController = require('../controller/pageController');
const SearchController = require('../controller/searchController');
const router = Router();


router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);

router.get('/search', SearchController.search);

module.exports = router;