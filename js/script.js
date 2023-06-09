$(document).ready(function() {
    var currentFloor = 2; /* переменная где находиться этаж */
    var floorPath = $(".home-image path") /* каждый отдельный этаж в SVG */
    var buttonModal = $('.main_button') /* кнопка в main */
    var modal = $('.modal'); /* модальное окно */
    var modalCloseButton = $('.modal-close-button'); /* это крестик короче в модальном окне */
    var arrowTop = $(".top_arrow") /* кнопка увеличения */
    var arrowBottom = $(".bottom_arrow") /* кнопка уменьшения */
    floorPath.on('mouseover', function() { /* подсвечивает при наведении и изменяет этаж */
        floorPath.removeClass('current-floor'); /* удаляем активный класс этажей */
        currentFloor = $(this).attr('data-floor');
        $(".counter").text(currentFloor);  
    });


    floorPath.on('click', toggleModal); // открывает окно по нажатию на этаж
    modalCloseButton.on('click', toggleModal); // закрывает окно по нажатию на крестик
    buttonModal.on('click', toggleModal); // открывает окно по нажатию на кнопку

    arrowTop.on('click', function() { /* переходит на верхний этаж */
        if (currentFloor < 18) { 
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        };
    });
    
    arrowBottom.on('click', function() { /* переходит на нижний этаж */
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        };
    });
    
    function toggleModal() { //функция открыть-закрыть окно
        modal.toggleClass('is-open');
    }

    
});