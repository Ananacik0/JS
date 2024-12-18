// DOM - document object model - это объект который преджставляет элементы страницы(html тег, кнопка, ссылка, изображение и тд) 
// BOM - browser object model - это все что связвано с браузерным апи. 
// API - это мост через который передается запрос ответ. 
// REST API - клиент-серверная архитектура приложения. Архитектура, которая принимает запрос от клиента, обрабатывает этот запрос на сервере, сервер возвращает клиенту ответ на запрос. 
// клиент(комп, телефон, браузер, приложение, сервер) - то устройство с которого ты отправляешь запросы на сервер. 
// сервер(комп, сервер) - то устройство, которое отправляет ответ на запрос клиента и хранит в себе бизнес логику приложения
// Бизнес логика - это процессы, скрипты, функции, условия и тд(код отвечающий за логику работы приложения), который выполняет логические операции для обработки данных на сервере.

// DOM-дерево - ораничевается твоим html <body>...</body>, это все элементы, которые находятся внутри этих тегов.


// слушатели событий, добавление объекта документа в переменную, находить объект, удалять эти объекты, менять объекты дом дерева, всплытие и погружение, методы

// всплытие - это процес, когда слушатель проходит по всем элементам которые являются родителями элемента на котором произошла прослушка
// погружение - это процесс, который работает в обратном порядке

const catalog = document.querySelector('#item__category--list--noactive');
// let newElement = catalog.innerHTML;
// newElement = ``;

const dropCatalog = (event) => {
  if(event.target.id === 'item__category--list--noactive') {
    event.target.id = 'item__category--list--active'
    catalog.innerHTML += `
    <li class="menu__item">
      <a href="https://google.com">GoogleCom</a>
    </li>
    <li class="menu__item">
      <a href="https://google.com">GoogleCom</a>
    </li>
    <li class="menu__item">
      <a href="https://google.com">GoogleCom</a>
    </li>
    `;
  } else {
    event.target.id = 'item__category--list--noactive'
    catalog.innerHTML = `
        Каталог
      <img class="category__arrow" src="image/arrow.svg" alt="arrow">
      <ul class="open__menu">
      </ul>
    `;
  };
};


const listen = catalog.addEventListener('click', dropCatalog);


