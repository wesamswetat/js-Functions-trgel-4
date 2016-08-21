/**
 * Created by Wesam on 8/21/2016.
 */

window.onload = function () {

    var
        allImgs = document.getElementsByTagName('img'),
        i;

    for ( i = 0 ; i < allImgs.length ; i = i + 1 ){
        allImgs[i].onmouseover = function () {
            this.nextElementSibling.classList.toggle('showName');
        };
        allImgs[i].onmouseout = function () {
            this.nextElementSibling.classList.toggle('showName');
        };
    }

};
