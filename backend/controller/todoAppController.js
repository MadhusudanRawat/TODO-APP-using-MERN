const asyncWrapper = require("../middleware/asyncErrorHandler")
const todoModel = require("../models/todoModel")

exports.createTODO = asyncWrapper(async (req, res, next) => {
    console.log(req.body);
    const { title, description } = req.body;
    if (!title ) {
        return res.status(404).json({ success: false, message: "All Fields are requires." })
    }
    const data = await todoModel.create(req.body)
    if (!data) {
        return res.status(404).json({ success: false, message: "Error When Creating a Data." })
    }
    res.status(200).json({ success: true, data: data })
})

exports.getAllTODO = asyncWrapper(async (req, res, next) => {
    const data = await todoModel.find();
    res.status(200).json({
        success: true,
        data: data
    })
})


exports.updateTODO = asyncWrapper(async (req, res, next) => {
    const { id } = req.params;

    const { title, description } = req.body;
    if( !title){
        return res.status(404).json({ success: false, message: "All Fields are requires." })
    }
    const updateData = await todoModel.findOneAndUpdate({_id:id},req.body,{
        new: true,
        runValidators: true,
      })
    
    res.status(200).json({
        success : true,
        data : updateData
    })
})


exports.deleteTODO = asyncWrapper(async (req, res, next) => {
    const {id} = req.params;

    if(!id){
        return res.status(404).json({ success: false, message: "Not Valid Input." })
    }
    const task = await todoModel.findOneAndDelete({_id:id})
    if(!task){
        return res.status(404).json({ success: false, message: "Not Valid Task Id." })
    }
    res.status(200).json({
        success : true,
        message : "Task Deleted Successfully."
    })
})