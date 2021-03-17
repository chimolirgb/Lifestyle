var modal = document.getElementsByClassName("popup");
var btn = document.getElementsByClassName("exec_pop");
var span = document.getElementsByClassName("close_multi");

function exercise(){
  location.href = ("exercise.html");
};
function diet(){
  location.href = ("diet.html");
};

document.getElementById("home").addEventListener("click", function(){location.href=("index.html")});


function setDataIndex() {

    for (i = 0; i < btn.length; i++)
    {
        btn[i].setAttribute('data-index', i);
        modal[i].setAttribute('data-index', i);
        span[i].setAttribute('data-index', i);
    }
};

for (i = 0; i < btn.length; i++)
{
    btn[i].onclick = function() {
        var ElementIndex = this.getAttribute('data-index');
        modal[ElementIndex].style.display = "block";
    };
    span[i].onclick = function() {
        var ElementIndex = this.getAttribute('data-index');
        modal[ElementIndex].style.display = "none";
    };
};

window.onload = function() {
    setDataIndex();
};

window.onclick = function(event) {
    if (event.target === modal[event.target.getAttribute('data-index')]) {
        modal[event.target.getAttribute('data-index')].style.display = "none";
    }
};