var updateDimensions = function(event) {
  var divs = Array.prototype.slice.call(document.getElementsByTagName('div'));

  divs.map(function(div){
    div.innerHTML = div.offsetWidth + " x " + div.offsetHeight;
  });
};


// Debounce by John Dugan - https://john-dugan.com/javascript-debounce/
var debounce = function(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if ( !immediate ) {
                func.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait || 200);
        if ( callNow ) {
            func.apply(context, args);
        }
    };
};

window.addEventListener('resize', debounce(updateDimensions, 5));
