const shortid = require("shortid");
const {User} = require('./models/user')


async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "url is required" });
    const shortID = shortid();
  
  
    await URL.create({
      shortId: shortID,
      redirectURL: body.url,
      visitHistory: [],
    });
  
  
    return res.json({ id: shortID });
  }
  
// async function handleGetAllUsers(req, res){
//     const allDbUsers = await User.find();
//     return res.json(allDbUsers);
// }

// async function handleDeleteById(req,res){
//     await User.findByIdAndDelete(req.params.id);
    
//     res.send({ status: "Deleted Successfully" });
// }

module.exports=handleGetAllUsers;