import Task from "../Models/task.js";

export const addTask = async (req, res) => {
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

export const getAllTask = async (req, res) => {
  const myAllTask = await Task.find({});
  res.status(200).json({ success: true, data: myAllTask });
};

export const completeTask = async (req, res) => {
  const { id } = req.params;

  const updatedTask = await Task.findByIdAndUpdate(
    id,
    { isCompleted: true },
    { new: true }, // returns the updated document
  );

  if (!updatedTask) {
    return res
      .status(404)
      .json({ success: false, message: "Task not Updated" });
  }

  res.status(200).json({
    success: true,
    message: "Task completed",
    data: updatedTask,
  });
};

export const undoTask = async (req, res) => {
  const { id } = req.params;

  const undoTask = await Task.findByIdAndUpdate(
    id,
    { isCompleted: false },
    { new: true },
  );

  if (!undoTask) {
    return res.status(404).json({ success: false, message: "Task Undo Fail" });
  }

  res
    .status(200)
    .json({ success: true, message: "Task Recovered", data: undoTask });
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  const deleteTask = await Task.findByIdAndDelete(id);

  if (!deleteTask) {
    return res
      .status(404)
      .json({ success: false, message: "Task is not deleted" });
  }

  res.status(200).json({ success: true, message: "Task is deleted" });
};
