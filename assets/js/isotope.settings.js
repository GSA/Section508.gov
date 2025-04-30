// Filter based on two factors + alphabetical sort
// Uses URI hash as trigger allowing direct links etc
// Losely based on: https://isotope.metafizzy.co/filtering.html#url-hash

jQuery(document).ready(function ($) {
    var $container = $(".policies");

    // Filter isotope
    $container.isotope({
        // options
        itemSelector: ".policy",
        layoutMode: "masonry",
        getSortData: {
            date: "p"
        }
    });

var iso = $container.data('isotope');
var $filterCount = $('.filter-count');

function updateFilterCount() {
    if (iso != null ){
        $filterCount.text( iso.filteredItems.length + ' items' );
    }
}



    // Alphabetical sort
    // Sort items alphabetically based on course title
    var sortValue = false;
    $(".sort").on("click", function(){
        // Get current URI hash
        var currentHash = location.hash;
        // If button is currently unchecked:
        if ( $(this).hasClass("checked") ) {
            // Set sort to false
            sortValue = false;
            // Remove sort attribute in hash
            location.hash = currentHash.replace( /&sort=([^&]+)/i, "");
        } else {
            // Set sortValue to current sort value
            sortValue = $(this).attr("data-sort-value");
            // Add sort attribute to hash
            location.hash = currentHash + "&sort=" + encodeURIComponent( sortValue );
        }
    });

    // Set up filters array with default values
    var filters = {};
    // When a button is pressed, run filterSelect
    $( ".filter-list a" ).on( "click", filterSelect );
    // Set the URI hash to the current selected filters
    function filterSelect() {
        // Current hash value
        var hashFilter = getHashFilter();
        // Set filters to current values (important for first run)
        filters["topic"] = hashFilter["topic"];
        filters["sub-topic"] = hashFilter["sub-topic"];
        filters["audience"] = hashFilter["audience"];
        filters["resource-type"] = hashFilter["resource-type"];
        filters["format"] = hashFilter["format"];
        // data-filter attribute of clicked button
        var currentFilter = $(this).attr("data-filter");
        // Navigation group (subject or role) as object
        var $navGroup = $(this).parents(".filter-list");
        // data-filter-group key for the current nav group
        var filterGroup = $navGroup.attr("data-filter-group");
        // If the current data-filter attribute matches the current filter,
        if ( currentFilter == hashFilter["subject"] || currentFilter == hashFilter["role"] || currentFilter == hashFilter["status"] ) {
            // Reset group filter as the user has unselected the button
            filters[ filterGroup ] = "*";
        } else {
            // Set data-filter of current button as value with filterGroup as key
            filters[ filterGroup ] = $(this).attr("data-filter");
        }
        // Create new hash
        // var newHash = "subject=" + encodeURIComponent( filters["subject"] ) + "&role=" + encodeURIComponent( filters["role"] ) + "&status=" + encodeURIComponent( filters["status"] );
        var newHash = "subject=" +  filters["subject"]  + "&role=" +  filters["role"]   + "&status=" +  filters["status"] ;
        // If sort value exists, add it to hash
        if ( sortValue ) {
            newHash = newHash + "&sort=" + encodeURIComponent( sortValue );
        }
        // Apply the new hash to the URI, triggering onHahschange()
        location.hash = newHash;
    } // filterSelect

    function onHashChange() {
        // Current hash value
        var hashFilter = getHashFilter();
        // Concatenate subject and role for Isotope filtering
        var theFilter = hashFilter["subject"] + hashFilter["role"] + hashFilter["status"];

        if ( hashFilter ) {
            // Repaint Isotope container with current filters and sorts
            $container.isotope( {
                filter:  decodeURIComponent( theFilter ),
                sortBy: hashFilter["sorts"]
            } );

            updateFilterCount();
            // Toggle checked status of sort button
            if ( hashFilter["sorts"] ) {
                $(".sort").addClass("checked");
            } else {
                $(".sort").removeClass("checked");
            }
            // Toggle checked status of filter buttons
            $( ".filter-list" ).find(".checked").removeClass("checked").attr("aria-checked","false");
            var subjectFilters = hashFilter["subject"].split(",");
            var roleFilters = hashFilter["role"].split(",");
            var statusFilters = hashFilter["status"].split(",");
            var allFilters = subjectFilters.concat(roleFilters);
            allFilters = allFilters.concat(statusFilters);
            for (filter in allFilters){
                $( ".filter-list" ).find("[data-filter='" + allFilters[filter] + "']").addClass("checked").attr("aria-checked","true");
            }
            // $( ".filter-list" ).find("[data-filter='" + hashFilter["subject"] + "'],[data-filter='" + hashFilter["role"] + "'] ,[data-filter='" + hashFilter["status"] + "']").addClass("checked").attr("aria-checked","true");
        }
    } // onHahschange

    function getHashFilter() {
        // Get filters (matches) and sort order (sorts)
        var subject = location.hash.match( /subject=([^&]+)/i );
        var role = location.hash.match( /role=([^&]+)/i );
        var status = location.hash.match( /status=([^&]+)/i );
        var sorts = location.hash.match( /sort=([^&]+)/i );

        // Set up a hashFilter array
        var hashFilter = {};
        // Populate array with matches and sorts using ternary logic
        hashFilter["subject"] = subject ? subject[1] : "*";
        hashFilter["role"] = role ? role[1] : "*";
        hashFilter["status"] = status ? status[1] : "*";
        hashFilter["sorts"] = sorts ? sorts[1]: "";

        return hashFilter;
    } // getHashFilter

    // When the hash changes, run onHashchange
    window.onhashchange = onHashChange;

    // When the page loads for the first time, run onHashChange
    onHashChange();

});

jQuery(document).ready(function ($) {
    if ($('.ty-compact').length > 2) {
  $('.ty-compact:gt(1)').hide();
  $('.show-more').show();
}

$('.show-more').bind("keypress click", function() {
  $('.ty-compact:gt(1)').toggle();
  $(this).text() === 'Show all' ? $(this).text('Show less') : $(this).text('Show all');
});

});