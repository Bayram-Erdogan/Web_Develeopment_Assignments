'use strict';

import {baseUrl} from './variables.js';
import {fetchData} from './utils.js';
import {restaurantRow, restaurantModal} from './components.js';

const tableBody = document.querySelector('#target');
const modal = document.querySelector('#modal');

let restaurants = [];

const getRestaurants = async () => await fetchData(`${baseUrl}/restaurants`);
const getDailyMenu = async (id, lang = 'fi') =>
  await fetchData(`${baseUrl}/restaurants/daily/${id}/${lang}`);

const displayRestaurants = (restaurantsArray) => {
  tableBody.innerHTML = '';

  if (!restaurantsArray || restaurantsArray.length === 0) {
    tableBody.innerHTML =
      '<tr><td colspan="3">No matching restaurants</td></tr>';
    return;
  }

  restaurantsArray.forEach((restaurant) => {
    const row = restaurantRow(restaurant);

    row.addEventListener('click', async () => {
      document
        .querySelectorAll('.highlight')
        .forEach((el) => el.classList.remove('highlight'));
      row.classList.add('highlight');

      modal.showModal();
      const menu = await getDailyMenu(restaurant._id);
      modal.innerHTML = restaurantModal(restaurant, menu);
      // Modal kapatma butonu
      const closeBtn = modal.querySelector('#closeModal');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          modal.close();
        });
      }
    });

    tableBody.appendChild(row);
  });
};

const init = async () => {
  restaurants = await getRestaurants();

  if (!restaurants || restaurants.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="3">Failed to load data</td></tr>';
    return;
  }

  restaurants.sort((a, b) =>
    a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
  );

  displayRestaurants(restaurants);

  document
    .querySelector('#showAll')
    .addEventListener('click', () => displayRestaurants(restaurants));
  document
    .querySelector('#showSodexo')
    .addEventListener('click', () =>
      displayRestaurants(restaurants.filter((r) => r.company === 'Sodexo'))
    );
  document
    .querySelector('#showCompass')
    .addEventListener('click', () =>
      displayRestaurants(
        restaurants.filter((r) => r.company === 'Compass Group')
      )
    );
};

init();
