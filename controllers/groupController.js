const { Group } = require("../models")

const getAllGroups = async () => {
  try {
    const groups = await Group.find()
    return groups
  } catch(err){
    throw new Error("Error getting all groups")
  }
}

const getGroupById = async(id) => {
  try {
    const group = await Group.findById(id)
    return group
  } catch(err){
    throw new Error("Error getting group by id")
  }
}

const createGroup = async(data) => {
  try {
    const group = await Group.create(data)
    return group
  } catch(err){
    throw new Error("Error creating a new group")
  }
}

const updateGroupById = async(id) => {
  try {
    const group = await Group.findByIdAndUpdate(id, data, {new:true})
    return group
  } catch(err){
    throw new Error("Error updating group by id")
  }
}

module.exports = {
  getAllGroups,
  getGroupById,
  createGroup,
  updateGroupById
}