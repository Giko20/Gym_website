rec_div = document.querySelector('.rect-image');
rec_container = document.querySelector('.cube');
rec_elements = document.querySelector('.cube i');

for (let i = 0; i < 30; i++){
    created = document.createElement(rec_elements);

    rec_container.appendChild(created);
}
rec_div.appendChild(rec_container);