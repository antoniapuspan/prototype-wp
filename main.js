fetch("https://antoniapuspan.com/mmd/Semester-2/t9/wordpress/wp-json/wp/v2/bike")
.then(res => res.json())
.then(handleData)

function handleData(bikes) {
	console.log(bikes);
	bikes.forEach(showBike)
	
}
function showBike(bike) {
	const template = document.querySelector("template").content;
	console.log(bike)
	
	const copy = template.cloneNode(true);
	copy.querySelector("h2").textContent=bike.title.rendered;
	
	let price = document.createElement("p");
	price.innerHTML = "$" + bike.price;
	copy.querySelector(".product_body.price").appendChild(price)
	
	copy.querySelector(".product.image").src = bike.image.guid;
	
	
	if(bike.colours != ""){
		let colours = document.createElement("p");
		colours.innerHTML = bike.colours;
		copy.querySelector(".body").appendChild(colours)
		colourDiv.style.backgroundColor = bike.colours
	}
	
	
	
	document.querySelector("main").appendChild(copy);
}







