const router = require("express").Router();
const { getAllThoughts, getThoughtById, createThought } = require("../controllers/thoughtController");
const { updateUserById } = require("../controllers/userController");

// ======== User Routes ========================

router.get("/thought", async (req, res) => {
  try {
    const thoughts = await getAllThoughts()
    res.json({ status: "success", payload: thoughts })
  } catch( error ){
    res.status(500).json({ msg: error.message })
  }
})

router.get("/thought/:id", async (req, res) => {
  try {
    const thought = await getThoughtById(req.params.id)
    res.json({ status: "success", payload: thought })
  } catch( error ){
    res.status(500).json({ msg: error.message })
  }
})

// Here we create a new thought, and associate that new thought with
// the user who created it. We assume in this case that the user's 
// id is provided in req.body

router.post("/thought", async( req, res) => {
  try {
    const newThought = await createThought(req.body)
    const updatedUser = await updateUserById(req.body.userId, {thought: newThought._id} )
    res.status(200).json({ status: "success", thought: newThought, updatedUser })
  } catch(error){
    res.status(500).json({ msg: error.message })
  }
})


module.exports = router;
