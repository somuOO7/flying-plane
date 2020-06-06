var map = document.getElementById('map');
var cross = document.getElementById('cross');

map.addEventListener('click', () => {
	map.style.borderRadius = '0';
	map.style.width = '100%';
	map.style.height = '100vh';
	map.style.cursor = 'auto';
	cross.style.display = 'inline';
});

cross.addEventListener('click', () => {
	map.style.borderRadius = '50%';
	map.style.width = '20rem';
	map.style.height = '20rem';
	map.style.cursor = 'pointer';
	cross.style.display = 'none';
});
