function autocomplete() {
  document.addEventListener("DOMContentLoaded", function() {
    var flatAddress = document.getElementById('submit-search-value');

    if (flatAddress) {
      var autocomplete = new google.maps.places.Autocomplete(flatAddress, { types: [ 'geocode' ] });
      autocomplete.setComponentRestrictions(
            {'country': ['fr']});

      google.maps.event.addDomListener(flatAddress, 'keydown', function(e) {
        if (e.key === "Enter") {
          e.preventDefault(); // Do not submit the form on Enter.
        }
      });
    }
  });
}

export { autocomplete };