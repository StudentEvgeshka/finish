$(document).ready(function(){
	
	// Находим блок карусели
	var carousel = $("#carousel");

	// Запускаем плагин карусели
	carousel.owlCarousel({
		// Количество блоков на больших экранах
	items:             8,
		// 4 блоков на компьютерах (экран от 1200px до 901px)
	itemsDesktop:      [1400, 4],
		// 2 блоков на компьютерах (экран от 1400px до 901px)
	itemsDesktopSmall: [900, 3],
		// 1 элемента на планшетах (экран от 700 до 480 пикселей)
	itemsTablet:       [500, 1],
		// Настройки для телефона отключены, в этом случае будут
	// использованы настройки планшета
	itemsMobile:       false
	});


// Назад
// При клике на "Назад"
$('#js-prev').click(function () {

	// Запускаем перемотку влево
	carousel.trigger('owl.prev');

	return false;
});

// Вперед
// При клике на "Вперед"
$('#js-next').click(function () {

	// Запускаем перемотку вправо
	carousel.trigger('owl.next');

	return false;
});
});