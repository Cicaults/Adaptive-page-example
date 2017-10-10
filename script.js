function main() {
	// Проверяем при загрузке страницы
	changeHeaderStyle();

	//Проверяем при прокрутке
	$(window).scroll(() => {
		changeHeaderStyle();
	})

	function changeHeaderStyle() {
		if($(document).scrollTop() > 40){
			$('.navbar').removeClass('navbar-dock');
		}
		else {
			$('.navbar').addClass('navbar-dock');
		}
	}

	$('.navbar-items a, .navbar-header a').smoothScroll({
			offset: -50
		});

	ymaps.ready(loadMap);

	function loadMap() {
		var fakeMap = new ymaps.Map("map", {
			center: [55.88246282, 37.62999305],
			zoom: 14
		});

		var fakePlacemark = new ymaps.Placemark(fakeMap.getCenter(), {
			hintContent: 'ААААААААВТОМОБИИИЛЬ!'
		},{
			iconLayout: 'default#image',
			iconImageHref: 'img/map_logo.png',
			iconImageSize: [336, 267],
			iconImageOffset: [-150, -267]
		});

		fakeMap.geoObjects.add(fakePlacemark);
		fakeMap.behaviors.disable('scrollZoom');
	}
}

$(document).ready(main);