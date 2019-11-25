// task-1
console.log(document.getElementById('string-3').textContent);
console.log(document.getElementById('string-5').textContent);
console.log(document.getElementById('string-2').textContent);
console.log(document.getElementById('string-3').textContent);
console.log(document.getElementById('string-6').textContent);
console.log(document.getElementById('string-4').textContent);
console.log(document.getElementById('string-1').textContent);

// task-2
let elements = document.getElementsByClassName('element');
for(let i = 0; i < elements.length; i++){
	if (i <= 2){
		elements[i].style.color = 'red';
	}
	else{
		elements[i].style.color = 'green';
	}
}

// task-3
let container = document.getElementById('container');

for(let i = 1; i < 6; i++){
	let element = document.createElement('div');
	element.classList.add('element');
	container.appendChild(element);
	let elementText = document.createTextNode('Element ' + i);
	element.appendChild(elementText);
}


// task-4
let container_1 = document.getElementById('container-1');

function addDiv(){
	var ok = true;
	if (ok === true) {
		let element = document.createElement('div');
		element.classList.add('element');
		container_1.appendChild(element);
		let elementText = document.createTextNode('Element');
		element.appendChild(elementText);
	}
}
var button = document.getElementById('add-item-btn');
button.onclick = addDiv;