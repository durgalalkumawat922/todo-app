import React, { useEffect, useState } from "react";
import Mytask from "../components/Mytask";
import { Loader2Icon } from "lucide-react";
import { toast } from "react-toastify";

function Home() {
  const [myTask, setMyTask] = useState({ title: "", description: "" });

  const [taskData, setMyTaskData] = useState({});
  const [loading, setLoading] = useState(false);

  const addTask = async (e) => {
    setLoading(true);
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/task/addtask", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myTask),
    });

    const data = await res.json();
    if (data.success == false) {
      setLoading(false);
      return toast.error(data.message);
    }

    getAllTask();
    toast.success(data.message);
    setLoading(false);
  };

  const getAllTask = async () => {
    const res = await fetch("http://localhost:5000/api/task/getalltask", {
      method: "get",
    });

    const data = await res.json();
    setMyTaskData(data.data);
  };

  useEffect(() => {
    getAllTask();
  }, []);

  console.log(taskData);
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8 mt-14">
      <div className="max-w-6xl mx-auto">
        {/* Form Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Todo App</h1>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Task Title
              </label>

              <input
                type="text"
                placeholder="Enter task title..."
                value={myTask.title}
                onChange={(e) => {
                  setMyTask({ ...myTask, title: e.target.value });
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Task Description
              </label>

              <textarea
                placeholder="Enter task description..."
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                value={myTask.description}
                onChange={(e) => {
                  setMyTask({ ...myTask, description: e.target.value });
                }}
              />
            </div>

            <button
              className="w-full bg-purple-600 text-white font-bold py-3 px-6 items-center flex justify-center  rounded-lg"
              onClick={addTask}
            >
              {loading ? (
                <Loader2Icon className="animate-spin items-center text-center" />
              ) : (
                "Add Task"
              )}
            </button>
          </div>
        </section>

        {taskData.length > 0 && (
          <Mytask taskData={taskData} setMyTaskData={setMyTaskData} getAllTask={getAllTask}/>
        )}
      </div>
    </div>
  );
}

export default Home;
