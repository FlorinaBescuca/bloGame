const Post = require('../models/blog');
const catchAsync = require('../utils/catchAsync');

exports.getDota = catchAsync(async (req, res, next) => {
    const posts = await Post.find({game: 'dota2'}).sort({createdAt: 'desc'});
    res.render('dota',{
        posts
    })
});
exports.getLeagueOfLegends = catchAsync(async (req, res, next) => {
    const posts = await Post.find({game: 'leagueoflegends'}).sort({createdAt: 'desc'});
    res.render('lol', {
        posts
    });
});
exports.getValorant = catchAsync(async (req, res, next) => {
    const posts = await Post.find({game: 'valorant'}).sort({createdAt: 'desc'});
    res.render('valorant', {
        posts
    });
});
exports.getNews = catchAsync(async (req, res, next) => {
    const posts = await Post.find({game: 'news'}).sort({createdAt: 'desc'});
    res.render('news', {
        posts
    });
});
exports.getCreateBlog = (req, res) => {
    res.render('createBlog');
}