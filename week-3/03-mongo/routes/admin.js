const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require('../db');
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    //check if a user with  the username already exists
    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        message: "Admin created successfully"
    })

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imagelink = req.body.imagelink;
    const price = req.body.price;
    //zod
   const newCourse = await Course.create ({
        title: title,
        description: description,
        imagelink: imagelink,
        price: price
    })
    console.log(newCourse);
    res.json({
        message: "Course created successfully",
        courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find ({})
        res.json({
            courses: allCourses
        })
});

module.exports = router;