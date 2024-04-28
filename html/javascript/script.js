document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');
  
    tabButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const targetTab = button.dataset.tab;
        tabButtons.forEach(function(button) {
          button.classList.remove('active');
        });
        tabPanels.forEach(function(panel) {
          panel.classList.remove('active');
        });
        button.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
      });
    });
  });