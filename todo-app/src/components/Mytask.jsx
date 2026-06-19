import React from "react";
import { toast } from "react-toastify";

export default function Mytask({ taskData, setMyTaskData, getAllTask }) {
  const completeTask = async (id) => {
    // e.preventDefault();
    const res = await fetch(
      `http://localhost:5000/api/task/completetask/${id}`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    getAllTask();
  };

  const undoTask = async (id) => {
    const res = await fetch(`http://localhost:5000/api/task/undo/${id}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    });

    getAllTask();
  };

  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/api/task/deletetask/${id}`, {
      method: "delete",
    });

    const data = await res.json();

    if (data.success === false) {
      toast.error(data.messsage);
      return;
    }

    toast.success(data.messsage);

    getAllTask();
  };

  // const deleteTask = (id) => {
  //   setMyTaskData((prevTasks) => prevTasks.filter((task) => task.id !== id));
  // };

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">My Tasks</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {taskData.map((task) => (
          <div
            className={`bg-white rounded-lg shadow-md p-6 border-l-4 transition-all duration-300 ${
              task.isCompleted
                ? "border-green-500 opacity-75"
                : "border-purple-500"
            }`}
            key={task.id}
          >
            <h3
              className={`text-lg font-bold mb-3 transition-all duration-300 ${
                task.isCompleted
                  ? "line-through text-gray-400"
                  : "text-gray-800"
              }`}
            >
              {task.title}
            </h3>

            <p
              className={`text-sm mb-4 transition-all duration-300 ${
                task.isCompleted
                  ? "text-gray-400 line-through"
                  : "text-gray-600"
              }`}
            >
              {task.description}
            </p>

            <div className="flex gap-2 pt-4 border-t">
              <button
                className={`flex-1 py-2 rounded font-medium transition-all duration-300 ${
                  task.isCompleted
                    ? "bg-green-600 text-white hover:bg-green-600"
                    : "bg-yellow-500 text-white hover:bg-yellow-600 shadow-sm hover:shadow"
                }`}
                onClick={
                  task.isCompleted === true
                    ? () => undoTask(task._id)
                    : () => completeTask(task._id)
                }
              >
                {task.isCompleted ? "Undo" : "Complete"}
              </button>

              <button
                className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-all duration-300"
                onClick={() => deleteTask(task._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
