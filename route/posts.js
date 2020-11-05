const router = require("express").Router();
const mongoose = require("mongoose")

const post = mongoose.model("Post")

router.get("/", async (req, res) => {
    try {
        const posts = await post.find({})
        res.send(posts)
    } catch (error) {
        res.status(500)
    }

})

router.post("/", async (req, res) => {
    try { 
        const post1 = new post();
        post1.name = req.body.name;
        post1.type = req.body.type;
        post1.start_date = req.body.start_date;
        post1.end_date = req.body.end_date;
        await post1.save();    
        res.send(post1)    
    } catch (error) {
        console.log('Post - ERROR',error);
        res.status(500)
    }

});

router.get("/:post1ID", async(req, res) => {
    const post1 = await post.find({
        _id: req.params.post1ID,
    })
    res.send(post1)
})

router.put("/:post1ID", async(req, res) => {
    const post1 = await post.findByIdAndUpdate({
        _id: req.params.post1ID
    },req.body,{
        new: true,
        runValidators: true
    });    
    res.send(post1)
})

router.delete("/:post1ID", async(req, res) => {
    const post1 = await post.findByIdAndRemove({
        _id: req.params.post1ID
    });
    res.send(post1)
})

module.exports = router;