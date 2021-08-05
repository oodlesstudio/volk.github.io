$(document).ready(function () {

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        defaultDate: '2021-08-01',
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'All Day Event',
                start: '2016-12-01'
            },
            {
                title: 'Long Event',
                start: '2016-12-07',
                end: '2016-12-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2016-12-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2016-12-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2016-12-11',
                end: '2016-12-13'
            },
            {
                title: 'Meeting',
                start: '2016-12-12T10:30:00',
                end: '2016-12-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2016-12-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2016-12-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2016-12-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2016-12-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2016-12-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'https://google.com/',
                start: '2016-12-28'
            }
        ]
    });

});




/* globals Chart:false, feather:false */

(function () {
    'use strict'
  
    feather.replace({ 'aria-hidden': 'true' })
  
    // Graphs
    var ctx = document.getElementById('myChart')
    // eslint-disable-next-line no-unused-vars
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'JAN',
          'FEB',
          'MAR',
          'APR',
          'MAY',
          'JUN',
          'JUL',
          'AUG',
          'SEP'
        ],
        datasets: [{
          data: [
            // 15339,
            // 21345,
            // 18483,
            // 24003,
            // 23489,
            // 24092,
            // 12034
            400,
            550,
            200,
            450,
            300,
            550,
            400,
            450,
            200
          ],
          lineTension: 0,
          backgroundColor: 'transparent',
          borderColor: '#BD8DBF',
          borderWidth: 1,
          pointBackgroundColor: '#BD8DBF'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        legend: {
          display: false
        }
      }
    })
  })()
  
  
  