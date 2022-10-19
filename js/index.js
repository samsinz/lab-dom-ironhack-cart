// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  console.log(product);
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  console.log(price, quantity);
  let subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // end of test

  // ITERATION 2
  let total = 0;
  const productList = document.querySelectorAll('.product');
  for (let i = 0; i < productList.length; i++) {
    total += updateSubtotal(productList[i]);
  }

  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  console.log('yo');
  const newProduct = document.querySelectorAll('.create-product input');
  const name = newProduct[0].value;
  const price = newProduct[1].value;
  console.log(name, price);
  const newProductRow = document.createElement('tr');
  newProductRow.classList.add('product');
  newProductRow.innerHTML = `<td class="name">
  <span>${name}</span>
</td>
<td class="price">$<span>${price}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`;
  console.log(newProductRow.querySelector('button'));
  newProductRow
    .querySelector('button')
    .addEventListener('click', removeProduct);
  const productListNew = document.getElementsByTagName('tbody');
  productListNew[0].appendChild(newProductRow);
  newProduct[0].value = '';
  newProduct[1].value = '';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.action button');
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }

  const createButton = document.querySelector('#create');
  createButton.addEventListener('click', createProduct);
});
