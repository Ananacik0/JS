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
const menuList = document.querySelector('.menu__catalog');


const dropCatalog = (event) => {
  switch(true) {
    case event.target.id === 'item__category--list--noactive' || event.target.className === 'category__arrow':
      if(event.target.tagName === 'LI') {
        event.target.id = 'item__category--list--active';
        event.target.children[0].className = 'category__arrow--drop';
        console.log(event)
        render();
      } else if(event.target.tagName === 'IMG') {
        event.target.parentElement.id = 'item__category--list--active';
        event.target.className = 'category__arrow--drop';
        console.log(event)
        render();
      };
      break;
    case event.target.id === 'item__category--list--active' || event.target.className === 'category__arrow--drop':
      if(event.target.tagName === 'LI') {
        event.target.id = 'item__category--list--noactive';
        event.target.children[0].className = 'category__arrow';
        menuList.innerHTML = ``;
      } else if(event.target.tagName === 'IMG') {
        event.target.parentElement.id = 'item__category--list--noactive';
        event.target.className = 'category__arrow'
        menuList.innerHTML = ``;
      };
      
      break;

    default:
      console.log('false')
  };
};

const render = () => {
  let menu = ``;
  menu += `
  <a href="">Google.com</a>
  <a href="">Google.com</a>
  <a href="">Google.com</a>
  `;
  menuList.innerHTML = menu;
};


const listen = catalog.addEventListener('click', dropCatalog);


