window.onload = fetchData;

async function fetchData() {
	const data = await fetch(new Request('/fake-api/cncMaterials.json'));
	const materials = await data.json();

	console.log(materials);
}