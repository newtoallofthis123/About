search_form = document.getElementById('search');
search_query = document.getElementById('search_query');

const NOOGLE = "https://noogle-search.herokuapp.com/search?q=";

function search_noogle(event) {
  event.preventDefault();
  const url_to_open = NOOGLE + search_query.value;
  const window_with_search = window.open(url_to_open, '_blank');
  window_with_search.focus();
}

search_form.addEventListener('submit', search_noogle);