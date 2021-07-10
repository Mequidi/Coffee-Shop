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
const links = document.querySelector(".links");
const allLinks = document.querySelectorAll(".link-item");
const topBtn = document.querySelector(".back-to-top");
const submitEmail = document.querySelector(".submit-email-btn");
const cartBtn = document.querySelector(".cart-btn");
const shoppingSidebar = document.querySelector(".shopping-sidebar")

const alertMessage = document.getElementById("alert-message");
const input = document.getElementById("input");
const submitForm = document.getElementById('submit-form');

// quote btn functionality
let countForQuotes = 0;
let containerHeight = 0;

window.addEventListener("load",()=>{
    if(alertMessage.textContent=="")
    alertMessage.style.display="none";
})

submitForm.addEventListener("submit",(e)=>{
    e.preventDefault();
})
cartBtn.addEventListener("click",()=>{
    console.log("btn clicked");
    shoppingSidebar.classList.toggle("show-sidebar");
})
topBtn.addEventListener("click",()=>{
    window.scrollTo({top:0,left:0});
})
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
// end quote
//scroll fixed navbar
window.addEventListener("scroll",()=>{
    let scrollLength = window.pageYOffset;
    let navbarHeight = navigation.getBoundingClientRect().height;
    if(scrollLength>navbarHeight)
        navigation.classList.add("fixed-nav");
    else    
        navigation.classList.remove("fixed-nav");
    if(scrollLength>500)
        topBtn.classList.add("show-btn");
    else
        topBtn.classList.remove("show-btn");
})
// end fixed navbar
//toggle navbar
document.querySelector(".toggle-btn").addEventListener("click",(e)=>{
    // links.classList.toggle("show-links");
    allLinks.forEach(function(item){
        containerHeight += item.getBoundingClientRect().height;
    })
    if(links.getBoundingClientRect().height === 0)
    { 
        links.style.height = `${containerHeight}px`;
        links.classList.add("show-links");   
    }
    else
    {    
        links.style.height = `0px`;
        containerHeight = 0;
        links.classList.remove("show-links");
    }
})

submitEmail.addEventListener("click",()=>{
    const inputText = input.value;
    console.log(inputText)
    if(!input.value)
    {
        displayMessage("Email left empty!","danger")
    }
    else
    if(inputText.search("@")===-1)
    {
        displayMessage("please include an `@` in the email","danger")
    }
    else{
        const aPosition = inputText.search("@");
        const afterA = inputText.slice(aPosition);
        if(afterA == "")
            displayMessage(`please enter a part following '@', "${input.value}" is empty`,"danger");
        else{
            displayMessage(`email added`,"success");
        }
    }

})

allLinks.forEach(function(item){
    item.addEventListener("click",function(e){
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        if (element === null)
            return 0 
        const navHeight = navigation.getBoundingClientRect().height;
        const linkContainerHeight = links.getBoundingClientRect().height;
        const fixedNav = navigation.classList.contains("fixed-nav");
        let position= element.offsetTop-navHeight;
        
        if(!fixedNav)
        {
            console.log("if statement entered");
            position = position - navHeight;  
        }
        if(links.getBoundingClientRect().height>80)
        {
            console.log("else if loop entered");
            position = position + linkContainerHeight;
        }
        
        window.scrollTo({
            left:0,
            top:position
        })
        links.style.height = `0px`;
        containerHeight = 0;
        isFirstClick = false;
        
    })
})

allLinks.forEach((item)=>{
    item.addEventListener("click",()=>{
      if(links.classList.contains("show-links")||links.style.height !== "0px")
        {
            links.style.height = `0px`;
            containerHeight = 0;
            links.classList.remove("show-links");
    
        }  
    })
})

function displayMessage(message, type) {
        alertMessage.style.display="inline";
        alertMessage.classList.add(`alert-${type}`)
        alertMessage.textContent = message;
        setTimeout(function () {
            alertMessage.textContent = "";
            alertMessage.classList.remove(`alert-${type}`);
            alertMessage.style.display="none";
        }, 1000);
    }

