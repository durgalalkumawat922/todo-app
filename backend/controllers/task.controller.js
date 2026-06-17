import Task from "../Models/task.js";

export const addTask = async (req, res)=>{
     
  const { title, description } = req.body;

  if (!title || !description) {
    return res
      .status(400)
      .json({ success: false, message: "all fields required" });
  }

  const newTask = new Task({
    title,
    description,
  });

  const saveTask = await newTask.save();
  if (!saveTask) {
    res.status(404).json({ success: false, message: "Task Not Added" });
  }

  res
    .status(200)
    .json({ success: true, message: "Your Task is Added", data: newTask });
};



export const getAllTask = async(req, res) => {
const myAllTask = await Task.find({});
res.status(200).json({success:true, data:myAllTask})
}


