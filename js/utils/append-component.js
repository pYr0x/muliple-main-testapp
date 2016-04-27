export default function(selector, tag, map = {}){

	let renderer = can.stache(tag);
	let fragment = renderer(map);

	var elements = document.querySelectorAll(selector);
	Array.prototype.forEach.call(elements, function(el, i){
		el.appendChild(fragment);
	});

}