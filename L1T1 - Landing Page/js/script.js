let bodyScrollHeight = document.body.scrollHeight;

let container = document.getElementById("container");

if (window.innerWidth > 798)
{
    containerHeight = container.offsetHeight * 1.125;
}
else
{
    containerHeight = container.offsetHeight;
}

document.body.style.height = containerHeight + 'px';

window.onbeforeunload = function ()
{
    window.scrollTo(0, 0);
}

window.onresize = function ()
{
    location.reload();
}

window.onscroll = function()
{
    let screenWidth = window.innerWidth;

    let img = this.document.getElementsByTagName("img");
    let p2 = this.document.getElementById("p2");
    let section2 = this.document.getElementById("section2");

    Array.from(img).forEach(element =>
    {
        let closestS1R = element.closest("#section1Right");

        if (closestS1R != null)
        {
            let section1Right = closestS1R;
        }
    });

    let idName = section1Right.getAttribute("id");
    let targetImg = document.getElementById(idName).firstElementChild;

    let scrollTop = document.documentElement.scrollTop * 2;

    targetImg.style.transform = "translateX(" + scrollTop + "px)";

    let percentScroll = (scrollTop/bodyScrollHeight) * 100;

    if (percentScroll > 35.5) 
    {
        section1Right.style.width = "0";
        p2.style.width = "100%";

        if (screenWidth > 798)
        {
            section2.style.paddingLeft = "175px"
            section2.style.paddingRight = "175px"            
        }
    }
    else
    {
        let temp1 = 35.5 - percentScroll;
        let temp2 = temp1/35.5;
        let temp3 = temp2 * 100;
        section1Right.style.width = temp3 + "%";
        
        let temp4 = percentScroll/35.5;

        let temp5a = temp4 * 50;
        let temp6a = 50 + temp5a
        
        let temp5b = temp4 * 60;
        let temp6b = 60 + temp5b

        if (temp6a > 100)
        {
            temp6a = 100;
        }
        else if (temp6b > 100)
        {
            temp6b = 100;
        }

        p2.style.width = temp6b + "%";

        let temp7 = percentScroll * 175;
        let temp8 = temp7/35.5;
        let temp9 = temp8 + 25;

        if (temp9 > 175)
        {
            temp9 = 175
        }

        if (screenWidth > 798)
        {
            section2.style.paddingLeft = temp9 + "px";
            section2.style.paddingRight = temp8 + "px";

            p2.style.width = temp6a + "%";
        }
    }
};