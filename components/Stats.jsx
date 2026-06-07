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
        <h3>{total}</h3>
        <p>Total</p>
      </div>

      <div>
        <h3>{active}</h3>
        <p>Aktif</p>
      </div>

      <div>
        <h3>{completed}</h3>
        <p>Selesai</p>
      </div>

    </div>
  );
}

export default Stats;