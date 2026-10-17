const filters = document.querySelectorAll('[data-filter]');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
  document.querySelectorAll('[data-category]').forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; });
}));
document.querySelectorAll('[data-service]').forEach(button => button.addEventListener('click', () => {
  document.getElementById('service').value = button.dataset.service;
  document.getElementById('cotizar').scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  document.getElementById('service').focus({preventScroll:true});
}));
document.querySelectorAll('[data-pick]').forEach(link => link.addEventListener('click', () => { filters[0].click(); }));
document.getElementById('quote-form').addEventListener('submit', event => {
  event.preventDefault();
  const content = 'FUHENTES PRINT\nResumen de proyecto\n\nServicio: ' + document.getElementById('service').value + '\nCantidad: ' + document.getElementById('quantity').value + '\nMedidas o tallas: ' + document.getElementById('size').value + '\nDetalles: ' + (document.getElementById('details').value || 'Por definir') + '\n\nEste resumen no confirma un pedido. Precio, materiales y fecha de entrega por acordar.';
  const url = URL.createObjectURL(new Blob([content], {type:'text/plain;charset=utf-8'}));
  const anchor = document.createElement('a'); anchor.href = url; anchor.download = 'proyecto-fuhentes-print.txt'; anchor.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  document.getElementById('form-status').textContent = 'Resumen preparado. Ya puedes compartir el archivo descargado.';
});
