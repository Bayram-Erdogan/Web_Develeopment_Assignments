'use strict';

const apiUrl = 'https://media2.edu.metropolia.fi/restaurant/api/v1';

const taulukko = document.querySelector('#target');
const modal = document.querySelector('#modal');

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

const haeRavintolat = async () => {
  return await fetchData(apiUrl + '/restaurants');
};

const haePaivanMenu = async (id, lang) => {
  return await fetchData(apiUrl + `/restaurants/daily/${id}/${lang}`);
};

const teeMenuHTML = (courses) => {
  let html = '';
  for (const course of courses) {
    html += `
      <article>
        <p><strong>${course.name}</strong></p>
        <p>${course.price}</p>
        <p>${course.diets}</p>
      </article>
    `;
  }
  return html;
};

(async () => {
  const restaurants = await haeRavintolat();

  if (!restaurants) {
    taulukko.innerHTML =
      '<tr><td colspan="3">Data could not be loaded</td></tr>';
    return;
  }

  restaurants.sort((a, b) =>
    a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
  );

  for (const restaurant of restaurants) {
    const tr = document.createElement('tr');

    tr.addEventListener('click', async () => {
      document
        .querySelectorAll('.highlight')
        .forEach((el) => el.classList.remove('highlight'));
      tr.classList.add('highlight');

      modal.innerHTML = '<p>Loading...</p>';
      modal.showModal();

      const menuData = await haePaivanMenu(restaurant._id, 'fi');

      modal.innerHTML = '';

      const name = document.createElement('h3');
      name.textContent = restaurant.name;

      const address = document.createElement('p');
      address.textContent = restaurant.address;

      const city = document.createElement('p');
      city.textContent = restaurant.city;

      modal.append(name, address, city);

      if (!menuData || !menuData.courses || menuData.courses.length === 0) {
        modal.insertAdjacentHTML('beforeend', '<p>No menu available today</p>');
      } else {
        modal.insertAdjacentHTML('beforeend', teeMenuHTML(menuData.courses));
      }

      const closeBtn = document.createElement('button');
      closeBtn.textContent = 'Close';
      closeBtn.addEventListener('click', () => modal.close());

      modal.append(closeBtn);
    });

    const nameTd = document.createElement('td');
    nameTd.textContent = restaurant.name;

    const addressTd = document.createElement('td');
    addressTd.textContent = restaurant.address;

    const cityTd = document.createElement('td');
    cityTd.textContent = restaurant.city;

    tr.append(nameTd, addressTd, cityTd);
    taulukko.append(tr);
  }
})();
