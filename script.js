var links = document.querySelectorAll("nav a")

links.forEach(function(link) {
	link.addEventListener("click", function(event) {
		event.preventDefault()
		var targetId = link.getAttribute("href");
		var target = document.querySelector(targetId);
		target.scrollIntoView({ behavior: "smooth" });
	});
});