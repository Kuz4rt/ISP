function Menu() {
    let menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

fetch('https://dummyjson.com/products?limit=30&skip=106')
    .then(res => res.json())
    .then(json => {
        let card = document.getElementById('product');
        let search_bar = document.getElementById('search_bar');
        let search_button = document.getElementById('search_button');
        let drop_button = document.getElementById('drop_button');
        let products = json.products;
        function display_products(products_display) {
            card.innerHTML = '';
            products_display.forEach(product => {
                let productElement = document.createElement('div');
                productElement.innerHTML = `
          <img src="${product.thumbnail}">
          <p class="text_card">${product.title}</p>
          <p class="text_card">$${product.price}</p>
        `;
                card.append(productElement);
            });
        }
        display_products(products);

        if (document.getElementById('drop_button').style.display == "none") {
            document.getElementById('search_button').style.display = "block";
        }
        fetch('https://dummyjson.com/products?limit=0')
            .then(res => res.json())
            .then(json_all => {
                let all_products = json_all.products;
                search_button.addEventListener('click', () => {
                    let text = search_bar.value.toLowerCase();
                    if (text.length != 0) {
                        document.getElementById('search_button').style.display = "none";
                        document.getElementById('drop_button').style.display = "block";
                        document.getElementById('sum').style.display = "block";
                        let filter = all_products.filter(product =>
                            product.title.toLowerCase().includes(text) || product.description.toLowerCase().includes(text)
                        );
                        let filter_main = products.filter(product =>
                            product.title.toLowerCase().includes(text) || product.description.toLowerCase().includes(text)
                        );

                        document.getElementById("sum").textContent = "Всего совпадений найдено: " + filter.length + " | " + "Совпадений из диапазона: " + filter_main.length;
                        display_products(filter_main);
                    }
                });
                drop_button.addEventListener('click', () => {
                    document.getElementById('search_bar').value = "";
                    document.getElementById('search_button').style.display = "block";
                    document.getElementById('drop_button').style.display = "none";
                    document.getElementById('sum').style.display = "none";
                    display_products(products);
                });
            })
    })


function AddCard() {
    document.getElementById('new_card_main').style.display = "block";
    document.getElementById('new_card_main').style.position = "fixed";
    document.body.style.overflow = "hidden";
    document.body.style.userSelect = "none";
}


let outsideProduct;

function HideNew() {
    fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: document.getElementById("name_product").value,
            description: document.getElementById("description_product").value,
            price: document.getElementById("cost_product").value,
        })
    })
        .then(res => res.json())
        .then((createdProduct) => {
            outsideProduct = createdProduct;
            let new_card_solo = document.getElementById('new_product');
            let new_solo_productElement = document.createElement('div');
            new_solo_productElement.innerHTML = `
                    <img class="new_photo" src="../image/${document.getElementById("img_product").files[0]["name"]}">
                    <p class="text_card">${createdProduct.title}</p>
                    <p class="text_card">$${createdProduct.price}</p>
                  `;
            new_card_solo.append(new_solo_productElement);
            document.getElementById('new_card_main').style.display = "none";
            document.getElementById('new_card_main').style.position = "absolute";
            document.body.style.overflow = "auto";
            document.body.style.userSelect = "auto";
        })
}


function NewCardHide() {
    document.getElementById('new_solo_card').style.display = "none";
    document.getElementById('new_solo_card').style.position = "absolute";
    document.body.style.overflow = "auto";
    document.body.style.userSelect = "auto";
}