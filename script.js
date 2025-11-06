(async function(){
  const countEl = document.getElementById('count');
  try {
    const res = await fetch('https://func-cv-sirhum.azurewebsites.net/api/visitors');
    const data = await res.json();
    countEl.textContent = data.count ?? '—';
  } catch(e) {
    countEl.textContent = 'offline';
    console.error(e);
  }
})();
