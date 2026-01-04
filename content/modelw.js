(() => {

const GEN_TO_CELLS = {
    V1: ["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4", "C1", "C2", "C3", "C4", "D1", "D2", "D3", "D4"],
    C1: ["A1", "A2", "A3", "A4", "D1", "D2", "D3", "D4"],
    V2: ["A1", "A2", "D1", "D2", "B1", "B2", "C1", "C2"],
    C2: ["A1", "A2", "D1", "D2", "B3", "B4", "C3", "C4"],
    V3: ["A1", "A3", "D1", "D3", "B1", "B3", "C1", "C3"],
    C3: ["A1", "A3", "D1", "D3", "B2", "B4", "C2", "C4"],
    V4: ["A1", "A4", "D1", "D4", "B1", "B4", "C1", "C4"],
    C4: ["A1", "A4", "D1", "D4", "B2", "B3", "C2", "C3"],
    A1: ["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4"],
    D1: ["A1", "A2", "A3", "A4", "C1", "C2", "C3", "C4"],
    A2: ["A1", "A2", "B1", "B2", "C3", "C4", "D3", "D4"],
    D2: ["A1", "A2", "C1", "C2", "B3", "B4", "D3", "D4"],
    A3: ["A1", "A3", "B1", "B3", "C2", "C4", "D2", "D4"],
    D3: ["A1", "A3", "C1", "C3", "B2", "B4", "D2", "D4"],
    A4: ["A1", "A4", "B1", "B4", "C2", "C3", "D2", "D3"],
    D4: ["A1", "A4", "C1", "C4", "B2", "B3", "D2", "D3"],
};

 function clearHighlights(grid) {
    grid.querySelectorAll(".cell.is-active").forEach(el => el.classList.remove("is-active"));
  }

  function applyGen(gen) {
    const grid = document.getElementById("modelw");
    if (!grid) return;

    clearHighlights(grid);

    if (!gen || gen === "none") {
      grid.removeAttribute("data-active-gen");
      return;
    }

    grid.setAttribute("data-active-gen", gen);

    const cells = GEN_TO_CELLS[gen] ?? [];
    for (const c of cells) {
      const el = grid.querySelector(`.cell-${CSS.escape(c)}`);
      if (el) el.classList.add("is-active");
    }
  }

  // Click handler for buttons
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-gen]");
    if (!btn) return;
    e.preventDefault();
    applyGen(btn.dataset.gen);
  });

  // Optional: support ?gen=V1 in URL
  window.addEventListener("DOMContentLoaded", () => {
    const gen = new URL(location.href).searchParams.get("gen");
    if (gen) applyGen(gen);
  });
})();
