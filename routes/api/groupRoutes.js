const router = require("express").Router();
const { getAllGroups, getGroupById, createGroup } = require("../controllers/groupController");
const { updateUserById } = require("../controllers/userController");

// ======== User Routes ========================

router.get("/group", async (req, res) => {
  try {
    const groups = await getAllGroups()
    res.json({ status: "success", payload: groups })
  } catch( error ){
    res.status(500).json({ msg: error.message })
  }
})

router.get("/group/:id", async (req, res) => {
  try {
    const group = await getGroupById(req.params.id)
    res.json({ status: "success", payload: group })
  } catch( error ){
    res.status(500).json({ msg: error.message })
  }
})

// Here we create a new group, and associate that new group with
// the user who created it. We assume in this case that the user's 
// id is provided in req.body

router.post("/group", async( req, res) => {
  try {
    const newGroup = await createGroup(req.body)
    const updatedUser = await updateUserById(req.body.userId, {group: newGroup._id} )
    res.status(200).json({ status: "success", group: newGroup, updatedUser })
  } catch(error){
    res.status(500).json({ msg: error.message })
  }
})


module.exports = router;
