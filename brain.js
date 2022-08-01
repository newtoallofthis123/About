// Courtesy https://codepen.io/gorvgoyl/pen/vRPpGO

function TxtType(el, toRotate, period) {
    var obj={};
        obj.toRotate = toRotate;
        obj.el = el;
        obj.loopNum = 0;
        obj.period = parseInt(period, 10) || 2000;
        obj.txt = '';
    tick(obj);
        obj.isDeleting = false;

    };

function tick(obj){
    var i = obj.loopNum % obj.toRotate.length;
        var fullTxt = obj.toRotate[i];

        if (obj.isDeleting) {
        obj.txt = fullTxt.substring(0, obj.txt.length - 1);
        } else {
        obj.txt = fullTxt.substring(0, obj.txt.length + 1);
        }

        obj.el.innerHTML = '<span class="wrap">'+obj.txt+'</span>';

        
        var delta = 200 - Math.random() * 100;

        if (obj.isDeleting) { delta /= 2; }

        if (!obj.isDeleting && obj.txt === fullTxt) {
        delta = obj.period;
        obj.isDeleting = obj;
        } else if (obj.isDeleting && obj.txt === '') {
        obj.isDeleting = false;
        obj.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        tick(obj);
        }, delta);
}
    

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
    };