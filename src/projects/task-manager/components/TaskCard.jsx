function TaskCard({ task, onToggleStatus }) {
  return (
    <div className="card">
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>

      <div className="meta">
        <span className={`priority ${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>

        <span
          className={`status ${task.status.toLowerCase()}`}
          onClick={() => onToggleStatus(task.id)}
          style={{ cursor: "pointer" }}
        >
          {task.status.replace("_", " ")}
        </span>
      </div>
    </div>
  );
}

export default TaskCard;