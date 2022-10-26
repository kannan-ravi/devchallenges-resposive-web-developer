
//* || JSON FILE IMPORTED FOR SIMPLY COUNTRY LIST

import countryList from "./country-list.json" assert {type: 'json'}

function countryDropDown() {
	for (let i = 0; i < countryList.length; i++) {
		const option = document.createElement('option');
		option.value = countryList[i].name;
		option.innerHTML = countryList[i].name;
		select.appendChild(option);
		option.classList.add('style');
	 }
}

const select = document.getElementById('country-list');
select.addEventListener('click', countryDropDown());


///* || PRICE SECTION


const bagOfferPrice = document.getElementById('bag-offer-price');
const bagIncrement = document.getElementById('bag-plus');
const bagDecrement = document.getElementById('bag-minus');
const bagQuantity = document.getElementById('bag-quantity');

const shoeOfferPrice = document.getElementById('shoe-offer-price');
const shoeIncrement = document.getElementById('shoe-plus');
const shoeDecrement = document.getElementById('shoe-minus');
const shoeQuantity = document.getElementById('shoe-quantity');

const totalPrice = document.querySelector('#total-price');

const bofferPrice = Number(bagOfferPrice.innerHTML.split(' ')[0].slice(1));
const boriginalPrice = Number(bagOfferPrice.innerText.split(' ')[1].slice(1));

const sofferPrice = Number(shoeOfferPrice.innerHTML.split(' ')[0].slice(1));
const soriginalPrice = Number(shoeOfferPrice.innerText.split(" ")[1].slice(1));


bagIncrement.addEventListener('click', () => {
	increment(bagQuantity);
	calculation(bagOfferPrice, bagQuantity, bofferPrice, boriginalPrice);
})

bagDecrement.addEventListener('click', () => {
	decrement(bagQuantity);
	calculation(bagOfferPrice, bagQuantity, bofferPrice, boriginalPrice);
})

shoeIncrement.addEventListener('click', () => {
	increment(shoeQuantity);
	calculation(shoeOfferPrice, shoeQuantity, sofferPrice, soriginalPrice);
})

shoeDecrement.addEventListener('click', () => {
	decrement(shoeQuantity);
	calculation(shoeOfferPrice, shoeQuantity, sofferPrice, soriginalPrice);
})

let increment = (number) => {
	number.innerText = Number(number.innerHTML) + 1;
}

let decrement = (number) => {
	if (number.innerText > 1) {
		number.innerText = Number(number.innerHTML) - 1;
	}
}

let calculation = (price, quantity, offerPrice, originalPrice) => {
	quantity = Number(quantity.innerText);
	let ofPrice = quantity * offerPrice;
	let orPrice = quantity * originalPrice;

	price.innerHTML = `<p class="product-price" id="bag-offer-price">$${ofPrice.toFixed(2)} <span class="o-price" id="bag-original-price"><s>$${orPrice.toFixed(2)}</s></span></p>`;
	
	totalPrice.innerText = `$${(Number(document.getElementById('bag-offer-price').innerText.split(" ")[0].slice(1)) + Number(document.getElementById('shoe-offer-price').innerText.split(" ")[0].slice(1)) 
	+ 19).toFixed(2)}`;
}
