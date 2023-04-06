//Массив наших "кнопок"
const buttons = document.querySelectorAll('.buttons__item');
//Изображение
const img = document.querySelector('.menu__img > img');
//Цикл, в котором добавляем обработчик событий по нажатому элементу
buttons.forEach((el) => {
    el.addEventListener("click", (event) => {
        buttons.forEach((el1) => { 
            //Проверка на то, является ли элемент именно тем, на который мы нажали. Если это он, то добавляем класс и меняем изображение
            if(el1 === event.target){
                let buttonDataset = el1.dataset.img;
                el1.classList.add('selected');
                img.src = `./img/${buttonDataset}.jpg`;
            }
            else{
                el1.classList.remove('selected');
            }
        });
    });
});