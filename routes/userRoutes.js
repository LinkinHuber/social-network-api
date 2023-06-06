const router = require("express").Router();
const { getAllUsers, getUserById, createUser, updateUserById } = require("../controllers/userController");


router.get("/user", async (req, res) => {
  try {
    const users = await getAllUsers()
    res.status(200).json({ status: "success", payload: users })
  } catch( error ){
    res.status(500).json({ msg: error.message })
  }
})

router.get("/user/:id", async (req, res) => {
  try {
    const user = await getUserById(req.params.id)
    res.status(200).json({ status: "success", payload: user })
  } catch( error ){
    res.status(500).json({ msg: error.message })
  }
})

router.post("/user", async( req, res) => {
  try {
    const newUser = await createUser(req.body)
    res.status(200).json({ status: "success", payload: newUser })
  } catch(error){
    res.status(500).json({ msg: error.message })
  }
})

router.put("/user/:id", async (req, res) => {
  try {
    const user = await updateUserById(req.params.id, req.body)
    res.status(200).json({ status: "success", payload: user })
  } catch( error ){
    res.status(500).json({ msg: error.message })
  }
})


module.exports = router;
