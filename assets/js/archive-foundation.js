(function () {
  function escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  function renderStatusBadges(container, items) {
    if (!container) return;
    container.innerHTML = items.map(function (item) {
      return '<article class="status-badge" data-tone="' + escapeHtml(item.tone || 'analysis') + '">' +
        '<span class="status-badge-symbol" aria-hidden="true">' + escapeHtml(item.symbol || '?') + '</span>' +
        '<div><span class="status-badge-title">' + escapeHtml(item.label) + '</span>' +
        '<span class="status-badge-desc">' + escapeHtml(item.description) + '</span></div></article>';
    }).join('');
  }

  function renderCards(container, items) {
    if (!container) return;
    container.innerHTML = items.map(function (item) {
      var href = item.href ? '<a class="card-link" href="' + escapeHtml(item.href) + '">Open section →</a>' : '';
      var meta = item.meta ? '<small>' + escapeHtml(item.meta) + '</small>' : '';
      return '<article class="card"><h3>' + escapeHtml(item.title) + '</h3><p>' + escapeHtml(item.description) + '</p>' + meta + href + '</article>';
    }).join('');
  }

  function attachSearch(config) {
    var input = document.getElementById(config.inputId);
    var filter = config.filterId ? document.getElementById(config.filterId) : null;
    var count = document.getElementById(config.countId);
    var results = document.getElementById(config.resultsId);
    if (!input || !count || !results) return;

    function render() {
      var query = input.value.trim().toLowerCase();
      var group = filter ? filter.value : '';
      var items = config.items.filter(function (item) {
        var haystack = [item.title, item.description, item.group, item.path].concat(item.tags || []).join(' ').toLowerCase();
        return (!query || haystack.includes(query)) && (!group || item.group === group);
      });
      count.textContent = 'Showing ' + items.length + ' Phase 1 shell item' + (items.length === 1 ? '' : 's') + '.';
      results.setAttribute('role', 'list');
      results.innerHTML = items.map(function (item) {
        var path = item.path ? '<div class="result-meta"><strong>Preserved path:</strong> <code>' + escapeHtml(item.path) + '</code></div>' : '';
        var href = item.href ? '<a class="card-link" href="' + escapeHtml(item.href) + '">Open section →</a>' : '';
        var pills = item.tags && item.tags.length ? '<div class="pill-row">' + item.tags.map(function (tag) { return '<span class="pill">' + escapeHtml(tag) + '</span>'; }).join('') + '</div>' : '';
        return '<article class="result-card" role="listitem"><h3>' + escapeHtml(item.title) + '</h3><div class="result-meta">' + escapeHtml(item.group) + '</div><p>' + escapeHtml(item.description) + '</p>' + path + pills + href + '</article>';
      }).join('') || '<article class="result-card" role="listitem"><h3>No matching shell items</h3><p>Phase 1 deliberately limits browser search to a small navigation shell. Full-record indexing is reserved for a later phase.</p></article>';
    }

    input.addEventListener('input', render);
    if (filter) filter.addEventListener('change', render);
    render();
  }

  window.ArchiveFoundation = {
    escapeHtml: escapeHtml,
    renderStatusBadges: renderStatusBadges,
    renderCards: renderCards,
    attachSearch: attachSearch,
  };
})();
