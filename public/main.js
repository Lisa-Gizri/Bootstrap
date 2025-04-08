$.getJSON('data.json', function (data) {
    const ticketCards = data.ticketCards;

    const section = $('<section class="container mt-4"><div class="row gx-4"></div></section>');
    const row = section.find('.row');

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
