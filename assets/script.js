// Simple localStorage mock for tickets
document.addEventListener("DOMContentLoaded", () => {
    const ticketForm = document.getElementById("ticketForm");
    const ticketList = document.getElementById("ticketList");

    if (ticketForm) {
        ticketForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const title = document.getElementById("title").value;
            const status = document.getElementById("status").value;
            const description = document.getElementById("description").value;

            if (!title || !status) {
                alert("Title and Status are required!");
                return;
            }

            const tickets = JSON.parse(localStorage.getItem("tickets") || "[]");
            tickets.push({ title, status, description });
            localStorage.setItem("tickets", JSON.stringify(tickets));

            renderTickets();
            ticketForm.reset();
        });

        function renderTickets() {
            const tickets = JSON.parse(localStorage.getItem("tickets") || "[]");
            ticketList.innerHTML = tickets.map(
                (t, i) => `
        <div class="card">
          <strong>${t.title}</strong> - ${t.status}<br>
          <small>${t.description || ""}</small><br>
          <button onclick="deleteTicket(${i})">Delete</button>
        </div>
      `
            ).join("");
        }

        window.deleteTicket = (index) => {
            const tickets = JSON.parse(localStorage.getItem("tickets") || "[]");
            tickets.splice(index, 1);
            localStorage.setItem("tickets", JSON.stringify(tickets));
            renderTickets();
        };

        renderTickets();
    }
});
