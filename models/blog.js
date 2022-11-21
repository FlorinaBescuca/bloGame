const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    game: {
        type: String,
        enum: ['dota2', 'leagueoflegends', 'valorant', 'news']
    },
    whatType: {
        type: String,
        enum: ['Tournament', 'Update', 'News']
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date, 
        default: new Date()
    }
});

const Post = mongoose.model('Post', blogSchema);

module.exports = Post;