const logoHero = document.querySelector(".logo-hero");
console.log(screen.width)
if(window.screen.width <= 830)
{
    logoHero.src = "/images/invis coffee logo (1).png"
    console.log("width is less than 830px");
}