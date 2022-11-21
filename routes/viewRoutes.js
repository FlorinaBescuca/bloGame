const express = require('express');
const viewsController = require('./../controllers/viewsController');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/views/dota.ejs', viewsController.getDota);
router.get('/views/lol.ejs', viewsController.getLeagueOfLegends);
router.get('/views/valorant.ejs', viewsController.getValorant);
router.get('/views/news.ejs', viewsController.getNews);
router.get('/views/createBlog.ejs', viewsController.getCreateBlog);

module.exports = router;