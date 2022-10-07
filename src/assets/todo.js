function opentodoTab(id) {
    if (id === "Groceries") {
        document.getElementById('Groceries').style.display = "block";
        document.getElementById('Tools').style.display = "none";
        document.getElementById('plan4today').style.display = "none";
        document.getElementById('Miscellaneous').style.display = "none";
      } else if (id === "Tools") {
        document.getElementById('Groceries').style.display = "none";
        document.getElementById('Tools').style.display = "block";
        document.getElementById('plan4today').style.display = "none";
        document.getElementById('Miscellaneous').style.display = "none";
    
      } else if (id === "plan4today") {
        document.getElementById('Groceries').style.display = "none";
        document.getElementById('Tools').style.display = "none";
        document.getElementById('plan4today').style.display = "block";
        document.getElementById('Miscellaneous').style.display = "none";
      } else if (id === "Miscellaneous") {
        document.getElementById('Groceries').style.display = "none";
        document.getElementById('Tools').style.display = "none";
        document.getElementById('plan4today').style.display = "none";
        document.getElementById('Miscellaneous').style.display = "block";
      }
  }

  