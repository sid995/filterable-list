// Get input element
    let filterInput = document.getElementById('filterInput');

    // Add event listener
    filterInput.addEventListener('keyup', filterNames);

    function filterNames(){
      //Get value of input
      let filterValue = document.getElementById('filterInput').value.toUpperCase();

      //Get names ul
      let ul = document.getElementById('names');
      // Get li from ul
      let li = ul.querySelectorAll('li.collection-item'); // Select anything based on element, style, etc.  Here selecting every tag li with class collection-item.

      // Loop througn collection-item list
      for(let i = 0; i < li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];// [0] is to get current link.
        // If matched
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){// To match what is typed in search (filterValue). toUpperCase() for overall consistency. indexOf(filterValue) to match with whatever is getting passed in the form. > -1 for matching letters and the names.
          li[i].style.display = '';

        } else {
          li[i].style.display = 'none';
        }

      }

    }