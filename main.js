const quotes = [
    {
        name:"john white",
        text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium itaque commodi maxime fugit, sequi deleniti provident magnam sunt id iure!"
    },
    {
        name:"lisa heart",
        text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae possimus cumque autem dolor non ullam porro repellendus reprehenderit soluta animi?"
    },
    {
        name:"jane doe",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione quaerat quasi minus debitis nam esse sequi, atque totam rem maiores?"
    }
]
const quoteBtns = document.querySelectorAll(".quote-btn"); 
const quoteText = document.querySelector(".quote-text");
const quotePerson = document.querySelector(".quote-person");
const logoHero = document.querySelector(".logo-hero");
const navigation = document.querySelector(".navigation");

// quote btn functionality
let countForQuotes = 0;

quoteBtns.forEach((btn,index) =>{
    btn.addEventListener("click",()=>{
        quoteBtns.forEach((thatBtn)=>{
            if(thatBtn != btn)
                thatBtn.classList.remove("clicked-btn")
                btn.classList.add("clicked-btn");
        })
        quoteText.textContent=quotes[index].text;
        quotePerson.textContent = quotes[index].name;
    })
})

setInterval(()=>{
    countForQuotes++;
    if(countForQuotes>2)
        countForQuotes=0;
    changeQuote(countForQuotes);
},5000);

function changeQuote(x){
    quoteText.textContent = quotes[x].text;
    quotePerson.textContent = quotes[x].name;
    quoteBtns.forEach((btn)=>{
        btn.classList.remove("clicked-btn");
    })
    quoteBtns[x].classList.add("clicked-btn");
}
//quote
//scroll fixed navbar
window.addEventListener("scroll",()=>{
    let scrollLength = window.pageYOffset;
    let navbarHeight = navigation.getBoundingClientRect().height;
    if(scrollLength>navbarHeight)
        navigation.classList.add("fixed-nav");
    else    
        navigation.classList.remove("fixed-nav");
})