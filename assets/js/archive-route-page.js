(function () {
  function escapeHtml(value) {
    return window.ArchiveFoundation ? window.ArchiveFoundation.escapeHtml(value) : String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  async function fetchJson(url) {
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) throw new Error('Unable to load route data.');
    return response.json();
  }

  document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const routeKey = body.dataset.routeKey;
    const routeTitle = body.dataset.routeTitle || 'Archive route';
    const routeType = body.dataset.routeType;
    const countEl = document.getElementById('route-count');
    const statusEl = document.getElementById('route-status');
    const metaEl = document.getElementById('route-meta');
    const noteEl = document.getElementById('route-note');
    const sampleEl = document.getElementById('route-samples');
    const resultsEl = document.getElementById('route-results');
    const searchForm = document.getElementById('route-search-form');
    const searchInput = document.getElementById('route-search');
    const buttonLoad = document.getElementById('button-load-route-inventory');
    const searchScope = document.getElementById('route-scope');

    let routeEntry = null;
    let recordInventory = null;
    let inventoryPromise = null;

    function setStatus(message) {
      countEl.textContent = message;
    }

    function renderRouteSummary() {
      if (!routeEntry) return;
      document.title = routeTitle + ' — Barran Dodger Archive';
      document.getElementById('route-title').textContent = routeTitle;
      document.getElementById('route-kicker').textContent = routeType === 'collection' ? 'Phase 3 · Collection route' : 'Phase 3 · Family route';
      document.getElementById('route-summary').textContent = routeEntry.note;
      metaEl.innerHTML = '<strong>Publication states:</strong> ' + escapeHtml((routeEntry.publication_statuses || []).join(', ') || 'none') +
        ' · <strong>Collections:</strong> ' + escapeHtml((routeEntry.collection_keys || []).join(', ') || 'none') +
        ' · <strong>Families:</strong> ' + escapeHtml((routeEntry.genre_families || []).join(', ') || 'none');
      noteEl.textContent = routeEntry.collection_publication_status
        ? 'Collection publication status: ' + routeEntry.collection_publication_status + '.'
        : 'This route is limited to public-record and public-metadata-sensitive records only.';
      sampleEl.innerHTML = (routeEntry.sample_titles || []).length
        ? '<ul class="path-list">' + routeEntry.sample_titles.map(function (title) { return '<li>' + escapeHtml(title) + '</li>'; }).join('') + '</ul>'
        : '<p class="small">No sample records available for this route.</p>';
      setStatus('Summary loaded: ' + routeEntry.record_count + ' routed record' + (routeEntry.record_count === 1 ? '' : 's') + '.');
    }

    function filterRecords(records) {
      const query = searchInput.value.trim().toLowerCase();
      const scope = searchScope.value;
      return records.filter(function (record) {
        const routeMatch = routeType === 'collection'
          ? record.collection_key === routeEntry.collection_keys[0]
          : record.genre_family === routeEntry.genre_families[0] && ['public-record', 'public-metadata-sensitive'].includes(record.publication_status);
        const scopeMatch = !scope || record.publication_status === scope;
        const haystack = [record.title, record.original_path, record.collection_label, record.genre_family, record.provenance_status].join(' ').toLowerCase();
        return routeMatch && scopeMatch && (!query || haystack.includes(query));
      });
    }

    function renderRecords(records) {
      const filtered = filterRecords(records);
      const limited = filtered.slice(0, 50);
      setStatus('Showing ' + limited.length + ' of ' + filtered.length + ' routed records.');
      resultsEl.setAttribute('role', 'list');
      resultsEl.innerHTML = limited.map(function (record) {
        const reviewPills = record.review_flags && record.review_flags.length
          ? '<div class="pill-row">' + record.review_flags.map(function (flag) { return '<span class="pill">' + escapeHtml(flag) + '</span>'; }).join('') + '</div>'
          : '';
        return '<article class="result-card" role="listitem">' +
          '<h3>' + escapeHtml(record.title) + '</h3>' +
          '<div class="result-meta">' + escapeHtml(record.record_id) + ' · ' + escapeHtml(record.publication_status) + ' · ' + escapeHtml(record.provenance_status) + '</div>' +
          '<p><strong>Original path:</strong> <code>' + escapeHtml(record.original_path) + '</code></p>' +
          '<p><strong>Collection:</strong> ' + escapeHtml(record.collection_label) + '</p>' +
          '<p><strong>Family:</strong> ' + escapeHtml(record.genre_family) + '</p>' +
          reviewPills +
          '</article>';
      }).join('') || '<article class="result-card" role="listitem"><h3>No routed records</h3><p>Adjust the search or publication filter.</p></article>';
    }

    async function ensureInventory() {
      if (recordInventory) return recordInventory;
      if (!inventoryPromise) {
        statusEl.textContent = 'Loading routed record inventory…';
        inventoryPromise = fetchJson('../../data/archive-records.json').then(function (data) {
          recordInventory = data;
          statusEl.textContent = 'Routed record inventory loaded on demand.';
          return data;
        }).catch(function (error) {
          statusEl.textContent = error.message;
          throw error;
        });
      }
      return inventoryPromise;
    }

    function announcePending() {
      if (recordInventory) {
        renderRecords(recordInventory.records || []);
        return;
      }
      setStatus('Search criteria ready. Submit the form or use the load button to fetch routed record metadata.');
      resultsEl.innerHTML = '<article class="result-card" role="listitem"><h3>Route inventory not loaded yet</h3><p>Use the controls above to request routed record metadata.</p></article>';
    }

    function handleError(error) {
      const message = error && error.message ? error.message : 'Unable to load route inventory.';
      statusEl.textContent = message;
      setStatus(message);
      resultsEl.innerHTML = '<article class="result-card" role="listitem"><h3>Route unavailable</h3><p>' + escapeHtml(message) + '</p></article>';
    }

    buttonLoad.addEventListener('click', function () {
      ensureInventory().then(function (data) { renderRecords(data.records || []); }).catch(handleError);
    });
    searchInput.addEventListener('input', announcePending);
    searchScope.addEventListener('change', announcePending);
    searchForm.addEventListener('submit', function (event) {
      event.preventDefault();
      ensureInventory().then(function (data) { renderRecords(data.records || []); }).catch(handleError);
    });

    fetchJson('../../data/archive-routes.json').then(function (data) {
      routeEntry = (data.routes || []).find(function (entry) { return entry.route_key === routeKey; }) || null;
      if (!routeEntry) throw new Error('Route definition not found.');
      renderRouteSummary();
      announcePending();
    }).catch(handleError);
  });
})();
