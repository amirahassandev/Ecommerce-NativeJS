
document.addEventListener('DOMContentLoaded', function() {
    async function fetchProducts(url) {
        try {
            let response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            let data = await response.json();
            let products = document.querySelector('#products');
            products.innerHTML = ''; 
            data.forEach(product => {
                products.innerHTML += `
                    <div class="item">
                        <div class="itemImg">
                            <img src="${product.category.image || 'https://via.placeholder.com/100'}" alt="${product.title}">
                        </div>
                        <div class="itemContents">
                            <p>${product.title}</p>
                            <p>Price: $${product.price}</p>
                        </div>
                    </div>
                `;
            });
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }
    
    fetchProducts('https://api.escuelajs.co/api/v1/products');
    // fetchProducts('./data.json');
});


function showImg(event){
    var mainImg = document.getElementById("mainImg");
    mainImg.src = event.target.src;
}