const photos = [
    "q (1)",
    "q (2)",
    "q (3)",
    "q (4)",
    "q (5)",
    "q (6)",
    "q (7)",
    "q (8)",
    "q (9)",
    "q (10)",
    "q (11)",
    "q (12)",
    "q (13)",
    "q (14)",
    "q (15)",
    "q (16)",
    "q (17)",
    "q (18)",
    "q (19)",
    "q (20)",
    "q (21)",
    "q (22)",
    "q (23)"
];

const gallery = document.getElementById("gallery");

photos.forEach(photo => {
    gallery.innerHTML += `
        <div class="card">
            <img src="images/${photo}" alt="${photo}">
            <a class="btn" href="images/${photo}" download>
                Download
            </a>
        </div>
    `;
});