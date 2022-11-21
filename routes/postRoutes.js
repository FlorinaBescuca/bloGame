const express = require('express');
const postController = require('../controllers/postController');

// app.get('/api/v1/posts', getAllPosts);
// app.get('/api/v1/posts/:id', getPost);
// app.post('/api/v1/posts', createPost);
// app.patch('/api/v1/posts/:id', updatePost);
// app.delete('/api/v1/posts/:id', detelePost);
//ARE THE SAME!!! ^
const router = express.Router();

router
    .route('/')
    .get(postController.getAllPosts)
    .post(postController.createPost);
    
router
    .route('/:id')
    .get(postController.onePost)
    .delete(postController.detelePost)
    .patch(postController.updatePost);


module.exports = router;