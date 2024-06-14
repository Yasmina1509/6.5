document.addEventListener('DOMContentLoaded', function() {
    let cardsContainer = document.getElementById('cards');

    fetch("https://fakestoreapi.com/products?limit=10")
      .then((response) => response.json())
      .then((data) => {
        data.forEach(product => {
          let card = document.createElement('div');
          let img = document.createElement('img');
          let h3 = document.createElement('h3');
          let pPrice = document.createElement('p');
          let pDescription = document.createElement('p');

          img.src = product.image;
          img.alt = `Image of {product.title}`;
          h3.textContent = product.title;
          pPrice.textContent = `Price: {product.price}`;
          pDescription.textContent = product.description;

          card.classList.add('card');
          card.appendChild(img);
          card.appendChild(h3);
          card.appendChild(pPrice);
          card.appendChild(pDescription);

          cardsContainer.appendChild(card);
        });
      })
      .catch((err) => console.log(err));
});


