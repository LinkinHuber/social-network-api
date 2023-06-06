const { User } = require("../models")

const getAllUsers = async () => {
  try {
    const users = await User.find().populate({ path: "group" })
    return users
  } catch(err){
    throw new Error("Error getting all users")
  }
}

const getUserById = async(id) => {
  try {
    const user = await User.findById(id).populate({ path: "group" })
    return user
  } catch(err){
    throw new Error("Error getting user by id")
  }
}

const createUser = async(data) => {
  try {
    const user = await User.create(data)
    return user
  } catch(err){
    throw new Error("Error creating a new user")
  }
}

const updateUserById = async(id) => {
  try {
    const user = await User.findByIdAndUpdate(id, data, {new:true})
    return user
  } catch(err){
    throw new Error("Error updating user by id")
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById
}