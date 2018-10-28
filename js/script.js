
$(document).ready(function(){
	// Находим блок карусели
	var carousel = $("#carousel");

	// Запускаем плагин карусели
	carousel.owlCarousel({
		// Количество блоков на больших экранах
	items:             4,
		// 4 блоков на компьютерах (экран от 1200px до 901px)
	itemsDesktop:      [900, 3],
		// 2 блоков на компьютерах (экран от 1400px до 901px)
	itemsDesktopSmall: [700, 2],
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
$(document).ready(function(){
	// Находим блок карусели
	var carousel2 = $("#konkurs");

	// Запускаем плагин карусели
	carousel2.owlCarousel({
		// Количество блоков на больших экранах
	items:             5,
		// 4 блоков на компьютерах (экран от 1200px до 901px)
	itemsDesktop:      [900, 3],
		// 2 блоков на компьютерах (экран от 1400px до 901px)
	itemsDesktopSmall: [700, 2],
		// 1 элемента на планшетах (экран от 700 до 480 пикселей)
	itemsTablet:       [500, 1],
		// Настройки для телефона отключены, в этом случае будут
	// использованы настройки планшета
	itemsMobile:       false
	});
// Назад
// При клике на "Назад"
$('#poch').click(function () {

	// Запускаем перемотку влево
	carousel2.trigger('owl.prev');

	return false;
});

// Вперед
// При клике на "Вперед"
$('#fin').click(function () {

	// Запускаем перемотку вправо
	carousel2.trigger('owl.next');

	return false;
});
});