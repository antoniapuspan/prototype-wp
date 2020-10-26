//fetch data
fetch("https://antoniapuspan.com/mmd/Semester-2/t9/wordpress/wp-json/wp/v2/bike")
	.then(res => res.json())
	.then(handleData)

function handleData(bikes) {
	//loop through products
	console.log(bikes);
	bikes.forEach(showBike)
}

function showBike(bike) {
	const template = document.querySelector("template").content;
	console.log(bike)

	const copy = template.cloneNode(true);
	copy.querySelector("h3").textContent = bike.title.rendered;
	
	copy.querySelector(".productBody .price span").value = "$" + bike.price;

	copy.querySelector(".productImage").src = bike.image.guid;





	document.querySelector("main").appendChild(copy);
}
