google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Voorraad', 'Drinken & eten'],
          ['Space eten',     11],
          ['Water',      2],
          ['Cola',  2],
          ['Fristi', 2],
        ]);

        var options = {
          title: 'Voorraad',
          pieHole: 0.5,
          'width': 800,
          'height': 400,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }