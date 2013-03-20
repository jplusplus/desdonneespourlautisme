(function(window, $, undefined) {

  $(window).load(function main() {

      cartodb.createVis('map', 'http://silveroux.cartodb.com/api/v1/viz/des_donnees_pour_l_autisme/viz.json', {
          shareable: false,
          title: false,
          description: false,
          searchControl: true,
          zoomControl: true,
          loaderControl: true,
          center_lat: 47,
          center_lon: -1,
          zoom: 6,          
          cartodb_logo: false,
          infowindow: true
      }).done(function(vis, layers) {          
          createSelector(layers[1]);
          layers[1].infowindow.set('template', $('#infowindow_template').html() );
      });

      $('.sidebar .close').on('click', function() {
        $('.sidebar').toggleClass("closed");
      });

      resize();
      $(window).on("resize", resize);

  });

  function resize() {
    $("#map, .sidebar").css("top", $(".navbar").outerHeight() )
    // Close the sidebar in mobile view
    if( $(window).width() <  767) $("#map, .sidebar").addClass("closed");
  }

  // create layer selector
  function createSelector(layer) {

    var sql = new cartodb.SQL({ user: 'silveroux' });

    $('.sidebar .checkbox').on("click", function() {
      
      var query = "select * from des_donnees_pour_l_autisme where ";
      
      query += buildQuery("places", "nombre_de_places");
      query += " and " + buildQuery("dates", "annee_d_ouverture");
      query += " and " + buildQuery("wait", "temps_d_attente_maximum_selon_les_temoignages");

      // change the query in the layer to update the map
      layer.setQuery(query);

    });
  }

  function buildQuery(theme, col) {

    var theme_min_array = ['100000']
        , theme_max_array = ['0'];

    // looks up the values in the checkboxes
    $('input[name=' + theme + ']:checked').each(function() {

        theme_min_array.push($(this).attr('data-' + theme + '-min'));
        theme_max_array.push($(this).attr('data-' + theme + '-max'));
    
    });
    
    return  "(" + col + " >= " + Math.min.apply( Math, theme_min_array ) + " and " + col + " < " + Math.max.apply( Math, theme_max_array ) + ")";
  
  }

})(window, jQuery);