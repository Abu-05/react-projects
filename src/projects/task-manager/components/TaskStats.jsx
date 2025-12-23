function TaskStats({ total, todo, inProgress, done }) {
  return (
    <div className="stats">
      <span>Total: {total}</span>
      <span>Todo: {todo}</span>
      <span>In Progress: {inProgress}</span>
      <span>Done: {done}</span>
    </div>
  );
}

export default TaskStats;