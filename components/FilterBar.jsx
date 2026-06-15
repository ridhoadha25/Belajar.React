function FilterBar({
  filter,
  setFilter
}) {
  return (
    <div className="filter">

      <button
        onClick={() =>
          setFilter("all")
        }
        className={filter === "all" ? "active" : ""}
      >
        <i className="fas fa-list"></i>
        Semua
      </button>

      <button
        onClick={() =>
          setFilter("active")
        }
        className={filter === "active" ? "active" : ""}
      >
        <i className="fas fa-circle-notch"></i>
        Aktif
      </button>

      <button
        onClick={() =>
          setFilter("completed")
        }
        className={filter === "completed" ? "active" : ""}
      >
        <i className="fas fa-check-circle"></i>
        Selesai
      </button>

    </div>
  );
}

export default FilterBar;
