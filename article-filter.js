(() => {
  const section = document.querySelector('#writing');
  const select = document.querySelector('#os-filter');
  if (!section || !select) return;

  const cards = [...section.querySelectorAll('.feature-card')];
  const count = document.querySelector('#article-count');
  const empty = document.querySelector('#article-empty');
  const options = new Set([...select.options].map(option => option.value));
  const initial = new URL(window.location.href).searchParams.get('os');
  if (options.has(initial)) select.value = initial;

  function filterArticles() {
    let visible = 0;
    for (const card of cards) {
      const matches = select.value === 'all' || card.dataset.os.split(/\s+/).includes(select.value);
      card.hidden = !matches;
      card.classList.toggle('is-first-visible', matches && visible === 0);
      card.classList.toggle('reverse', matches && visible % 2 === 1);
      if (matches) visible += 1;
    }
    count.textContent = select.value === 'all'
      ? `${visible} articles`
      : `${visible} of ${cards.length} articles`;
    empty.hidden = visible > 0;
  }

  select.addEventListener('change', () => {
    filterArticles();
    const url = new URL(window.location.href);
    if (select.value === 'all') url.searchParams.delete('os');
    else url.searchParams.set('os', select.value);
    url.hash = 'writing';
    window.history.replaceState(null, '', url);
    section.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  filterArticles();
  document.querySelector('.article-filters').hidden = false;
})();
