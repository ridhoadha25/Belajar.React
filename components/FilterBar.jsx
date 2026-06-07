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
      >
        Semua
      </button>

      <button
        onClick={() =>
          setFilter("active")
        }
      >
        Aktif
      </button>

      <button
        onClick={() =>
          setFilter("completed")
        }
      >
        Selesai
      </button>

    </div>
  );
}

export default FilterBar;