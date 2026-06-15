function Stats({ todos }) {

  const total = todos.length;

  const completed =
    todos.filter(
      t => t.completed
    ).length;

  const active =
    total - completed;

  return (
    <div className="stats">

      <div>
        <i className="fas fa-tasks" style={{fontSize: "1.8em", color: "#3b82f6", marginBottom: "10px"}}></i>
        <h3>{total}</h3>
        <p>Total</p>
      </div>

      <div>
        <i className="fas fa-spinner" style={{fontSize: "1.8em", color: "#3b82f6", marginBottom: "10px"}}></i>
        <h3>{active}</h3>
        <p>Aktif</p>
      </div>

      <div>
        <i className="fas fa-check" style={{fontSize: "1.8em", color: "#3b82f6", marginBottom: "10px"}}></i>
        <h3>{completed}</h3>
        <p>Selesai</p>
      </div>

    </div>
  );
}

export default Stats;
