const Post = require('./../models/blog');
const catchAsync = require('./../utils/catchAsync');

//GET all the posts
exports.getAllPosts = catchAsync(async (req, res, next) => {
    const posts = await Post.find(req.query);
    res.status(200).json({
        status: 'succes',
        results: posts.length,
        data: {
            posts
        }
    });
});

//GET one post (change the cod for get access for a specific game!)
exports.onePost = catchAsync(async (req, res, next) => { 
    const post = await Post.findById(req.params.id);
    res.status(200).json({
        status: 'succes',
        data: {
            post
        }
    });
});

//CREATE a post
exports.createPost = catchAsync(async (req, res, next) => {
    await Post.create(req.body);
    res.redirect('/');
});

//UPDATE a post
exports.updatePost = catchAsync(async (req, res) => {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    res.status(200).json({
        status: 'succes',
        data: {
            post
        }
    });
});

//DELETE a post
exports.detelePost = catchAsync(async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/');
});