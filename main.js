fetch("https://antoniapuspan.com/mmd/Semester-2/t9/wordpress/wp-json/wp/v2/bike")
.then(res => res.json())
.then(handleData)

function handleData(bike) {
	console.log(bike);
}