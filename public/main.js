// Load JSON data using jQuery's $.getJSON() method
$.getJSON('data.json', function (data) {
    // Access the array of ticket-style cards from the JSON
    const ticketCards = data.ticketCards;

    // Create a new section and a row container using Bootstrap classes
    const section = $('<section class="container mt-4"><div class="row gx-4"></div></section>');
    const row = section.find('.row');

    // Loop through each ticket card in the JSON data
    ticketCards.forEach(card => {
        const col = $('<div class="col-lg-6"></div>');
        const cardContainer = $(`
            <div class="custom-card">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="fw-bold mb-0">${card.title}</h4>
                    <a href="#" class="text-primary fw-semibold">${card.linkText}</a>
                </div>
                <p class="text-muted small">Group: <span class="fw-bold">${card.group}</span></p>
                <ul class="list-group custom-list-group"></ul>
            </div>
        `);

        const list = cardContainer.find('.list-group');

        // Loop through each list item and add it to the card
        card.items.forEach(item => {
            const listItem = $(`
                <li class="list-group-item">
                    <span>${item.label}</span>
                    <span class="text-muted">${item.value}</span>
                </li>
            `);
            list.append(listItem);
        });

        col.append(cardContainer);
        row.append(col);
    });

    $('main').append(section);
}).fail(function (jqxhr, textStatus, error) {
    console.error("Error loading JSON:", textStatus, error);
});
