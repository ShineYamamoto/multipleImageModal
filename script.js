
var boxImg = document.getElementsByClassName("box_img");

for (var i = 0; i < boxImg.length; i++) {
    boxImg[i].addEventListener("click", function() {

        const copyBox = document.getElementById("copy_box");
        if ( copyBox.childNodes.length !== 0 ) {
            copyBox.innerHTML = "";
            return true;
        }
        
        const parent = this.parentNode;
        const children = parent.children;


        for ( var i = 0, len = children.length; i < len; i++ ) {
            copyBox.appendChild(children[i].cloneNode(true));
        }

    })
}