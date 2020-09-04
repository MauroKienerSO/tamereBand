/**
 * Global Date Filter for Dates
 */
tamere.filter('formatDate', function($filter) {
    return function (myDate) {
        if(typeof myDate === 'undefined') {
            return myDate;
        }
        return $filter('date')(myDate, 'EEE, dd.MM.yyyy');
    };
});