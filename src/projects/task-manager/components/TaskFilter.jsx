function TaskFilter({ setFilter }) {
  return (
    <div className="filters">
      <button onClick={() => setFilter("ALL")}>All</button>
      <button onClick={() => setFilter("TODO")}>Todo</button>
      <button onClick={() => setFilter("IN_PROGRESS")}>In Progress</button>
      <button onClick={() => setFilter("DONE")}>Done</button>
    </div>
  );
}

export default TaskFilter;