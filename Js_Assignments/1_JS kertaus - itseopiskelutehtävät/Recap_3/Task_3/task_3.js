const target = document.querySelector('#target');

const now = new Date();

target.innerHTML = `
  <p>Browser: ${navigator.userAgent}</p>
  <p>Operating System: ${navigator.platform}</p>
  <p>Screen size: ${screen.width} x ${screen.height}</p>
  <p>Available space: ${screen.availWidth} x ${screen.availHeight}</p>
  <p>Date: ${now.toLocaleDateString('fi-FI')}</p>
  <p>Time: ${now.toLocaleTimeString('fi-FI', {hour: '2-digit', minute: '2-digit'})}</p>
`;
