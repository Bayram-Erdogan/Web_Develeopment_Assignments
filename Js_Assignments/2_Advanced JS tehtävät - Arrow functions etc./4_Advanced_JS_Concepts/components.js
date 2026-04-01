export const restaurantRow = (restaurant) => {
  const {name, company, address, city} = restaurant;

  const tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${name}</td>
    <td>${address}</td>
    <td>${city}</td>
    <td>${company}</td>
  `;

  return tr;
};

export const restaurantModal = (restaurant, menu) => {
  const {name, address, postalCode, city, phone, company} = restaurant;
  const {courses} = menu || {};

  let menuHtml = '';
  if (courses && courses.length > 0) {
    menuHtml += '<h3>Daily Menu</h3><ul class="modal-menu-list">';
    courses.forEach(({name, price, diets}) => {
      menuHtml += `<li><span class="menu-name">${name}</span> <span class="menu-price">${price ?? '?€'}</span> <span class="menu-diets">${diets || ''}</span></li>`;
    });
    menuHtml += '</ul>';
  } else {
    menuHtml += '<p class="no-menu">No menu available</p>';
  }

  return `
    <button id="closeModal" title="Close">&times;</button>
    <div class="modal-content">
      <h2>${name}</h2>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Postal Code:</strong> ${postalCode}, ${city}</p>
      <p><strong>Phone:</strong> ${phone ?? 'No phone'}</p>
      <p><strong>Company:</strong> ${company}</p>
      ${menuHtml}
    </div>
  `;
};
