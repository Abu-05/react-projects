import { useEffect, useState } from "react";
import styles from "./TaskManager.module.css";
import TaskStats from "./components/TaskStats";
import TaskFilter from "./components/TaskFilter";
import TaskCard from "./components/TaskCard";

const initialTasks = [
  {
    id: 1,
    title: "Fix login bug",
    description: "Users can't log in after update",
    status: "TODO",
    priority: "HIGH",
  },
  {
    id: 2,
    title: "Create API docs",
    description: "Write Swagger documentation",
    status: "IN_PROGRESS",
    priority: "MEDIUM",
  },
  {
    id: 3,
    title: "Refactor CSS",
    description: "Clean unused styles",
    status: "DONE",
    priority: "LOW",
  },
];

function TaskManager() {
  const [tasks, setTasks] = useState(() => {
  const saved = localStorage.getItem("tasks");
  return saved ? JSON.parse(saved) : initialTasks;
});
  const [filter, setFilter] = useState("ALL");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("LOW");
  useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

  function toggleStatus(id) {
  setTasks((prev) =>
    prev.map((task) => {
      if (task.id !== id) return task;

      let nextStatus = "TODO";
      if (task.status === "TODO") nextStatus = "IN_PROGRESS";
      else if (task.status === "IN_PROGRESS") nextStatus = "DONE";

      return { ...task, status: nextStatus };
    })
  );
}
  function addTask() {
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      description,
      status: "TODO",
      priority,
    };

    setTasks((prev) => [...prev, newTask]);
    setTitle("");
    setDescription("");
    setPriority("LOW");
  }

  const total = tasks.length;
  const todo = tasks.filter((t) => t.status === "TODO").length;
  const inProgress = tasks.filter((t) => t.status === "IN_PROGRESS").length;
  const done = tasks.filter((t) => t.status === "DONE").length;

  const filteredTasks =
    filter === "ALL"
      ? tasks
      : tasks.filter((task) => task.status === filter);

  return (
    <div className={styles.page}>
  <div className={styles.container}>
      <h1 className={styles.title}>Task Manager</h1>

      <TaskStats
        total={total}
        todo={todo}
        inProgress={inProgress}
        done={done}
      />

      <div className={styles.toolbar}>
        <button className={styles.addBtn}>+ Add Task</button>
        <TaskFilter setFilter={setFilter} />
      </div>

      <div className={styles.form}>
        <input
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </select>

        <button onClick={addTask}>Add Task</button>
      </div>

      <div className={styles.list}>
        {filteredTasks.map((task) => (
          <TaskCard
  key={task.id}
  task={task}
  onToggleStatus={toggleStatus}
/>
        ))}
      </div>
    </div>
</div>
  );
}

export default TaskManager;