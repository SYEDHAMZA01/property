$(document).ready(
    $( function() {
        var dateFormat = "mm/dd/yy",
          arrival = $( "#arrival" )
            .datepicker({
              defaultDate: "+1w",
              changeMonth: true,
              numberOfMonths: 1,
              autoSize: true,
              // beforeShowDay: $.datepicker.noWeekends,
            })
            .on( "change", function() {
              departure.datepicker( "option", "minDate", getDate( this ) );
            });
          departure = $( "#departure" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1,
            autoSize: true,
            // beforeShowDay: $.datepicker.noWeekends
          })
          .on( "change", function() {
            arrival.datepicker( "option", "maxDate", getDate( this ) );
          });
     
        function getDate( element ) {
          var date;
          try {
            date = $.datepicker.parseDate( dateFormat, element.value );
          } catch( error ) {
            date = null;
          }
     
          return date;
        }
      } )
)
  