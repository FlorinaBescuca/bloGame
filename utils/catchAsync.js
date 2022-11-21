//This is the fn that express will call, not the one from createPost for exemple.
module.exports = fn => {
    return (req, res, next) => {
        fn(req, res, next).catch(err => next(err));
    }
}