const catalog = document.querySelector('#item__category--list');

const openCatalog = (event) => {
  console.log(event);
  if (event.target.id === 'item__category--list') {
    catalog.innerHTML += `
    <ul class='category__list--active'>
      <li class='category__list--item'>
        <a class='category__list--item--link' href=''>fafdafaf</a>
      </li>
      <li class='category__list--item'>
        <a class='category__list--item--link' href=''>sdagasfgafg</a>
      </li>
      <li class='category__list--item'>
        <a class='category__list--item--link' href=''>asgdawgwgwrg</a>
      </li>
      <li class='category__list--item'>
        <a class='category__list--item--link' href=''>wrgwrgwrgw</a>
      </li>
      <li class='category__list--item'>
        <a class='category__list--item--link' href=''>rgwrwr</a>
      </li>
    </ul>
    `;
  }
};

const dropCatalog = catalog.addEventListener('click', openCatalog);