const catalog = document.querySelector('#item__category--list--noactive');

const openCatalog = (event) => {
  console.log(event);
  if (event.target.id === 'item__category--list--noactive' && event.target.localName === 'li') {
    event.target.id = 'item__category--list--active';
    console.log(event);
    catalog.innerHTML += `
    <ul class='category__list'>
      <li class='category__list--item'>
        <a class='category__list--item--link' href=''>Лендинг</a>
      </li>
      <li class='category__list--item'>
        <a class='category__list--item--link' href=''>Интернет-магазин</a>
      </li>
      <li class='category__list--item'>
        <a class='category__list--item--link' href=''>CRM-система</a>
      </li>
      <li class='category__list--item'>
        <a class='category__list--item--link' href=''>Telegram-Bot</a>
      </li>
      <li class='category__list--item'>
        <a class='category__list--item--link' href=''>Web-приложение</a>
      </li>
    </ul>
    `;
    console.log(catalog);
  } else {
    event.target.id = 'item__category--list--noactive';
    let dropMenu = document.querySelector('.category__list');
    dropMenu.remove();
  };
};

const dropCatalog = catalog.addEventListener('click', openCatalog);