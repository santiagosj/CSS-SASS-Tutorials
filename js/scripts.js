
  var triangulo = new Vivus('Capa_1', {type: 'scenario-sync', duration: 20, start: 'autostart', forceRender: false, dashGap: 20}, function () {
        if (window.console) {
          console.log('Animation finished. [log triggered from callback]');
        }
      }),
      obt1 = new Vivus('obturateur1', {type: 'delayed', duration: 150}),
      obt2 = new Vivus('obturateur2', {type: 'async', duration: 150}),
      obt3 = new Vivus('obturateur3', {type: 'oneByOne', duration: 150}),
      pola = new Vivus('polaroid', {type: 'scenario-sync', duration: 20, forceRender: false});



      function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      }

      function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      }
