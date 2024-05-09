const express = require("express");


const router = express.Router();




//Routes


// router.get("/users", async (req, res) => {


//     const allDbUsers = await User.find({})
//     const html = `


//     <ul>
//     ${allDbUsers.map((user) => `<li>${user.first_name} - ${user.last_name}</li>`).join("")}
//     </ul>


//     `;


//     res.send(html);
// });


//REST API
router.get("/", async (req, res) => {
    const allDbUsers = await User.find({})
    return res.json(allDbUsers);
});


router.post("/", async (req, res) => {
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({
            error: "Bad Request",
        });
    }
    try {
        const result = await User.create({
            first_name: body.first_name,
            last_name: body.last_name,
            email: body.email,
            gender: body.gender,
            job_title: body.job_title,
        });
        console.log("result", result);
        return res.status(200).json({ msg: 'Success' });
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});








router
    .route("/:id")
    .get(async (req, res) => {
        // const id = Number(req.params.id);
        // const user = users.find((user) => user.id == id);


        const user = await User.findById(req.params.id);
        return res.json(user);
    })


    .patch(async (req, res) => {


        //? TODO Edit the user with id
        await User.findByIdAndDelete(req.params.id, { lastName: 'Changed' })
        return res.json({ status: 'Success' })


    })
    .delete(async (req, res) => {
        //? TODO Delete the user with id
        await User.findByIdAndDelete(req.params.id)


        return res.json({ status: "Success" });
    });


module.exports = router;
