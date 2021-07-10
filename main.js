const quotes = [{
        name: "john white",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium itaque commodi maxime fugit, sequi deleniti provident magnam sunt id iure!"
    },
    {
        name: "lisa heart",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae possimus cumque autem dolor non ullam porro repellendus reprehenderit soluta animi?"
    },
    {
        name: "jane doe",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione quaerat quasi minus debitis nam esse sequi, atque totam rem maiores?"
    }
]

const shopItemsArray = [
    {
        id: 1,
        imgSrc: "/images/shop/shop1.jpg",
        name: "paper brouch",
        stars: 3.5,
        price: 46.00,
        isreducedPrice: false,
        reducedPrice: 46.00 
    },
    {
        id: 2,
        imgSrc: "/images/shop/shop2.jpg",
        name: "paper bag",
        stars: 4.5,
        price: 98.00,
        isreducedPrice: true,
        reducedPrice: 79.00 
    },
    {
        id: 3,
        imgSrc: "/images/shop/shop3.jpg",
        name: "paper pouch",
        stars: 5,
        price: 27.00,
        isreducedPrice: false,
        reducedPrice: 27.00 
    },
    {
        id: 4,
        imgSrc: "/images/shop/shop4.jpg",
        name: "coffee pot",
        stars: 4,
        price: 71.00,
        isreducedPrice: true,
        reducedPrice: 71.00 
    },
    {
        id: 5,
        imgSrc: "/images/shop/shop5.jpg",
        name: "tea pot",
        stars: 4.5,
        price: 31.00,
        isreducedPrice: false,
        reducedPrice: 31.00 
    },
    {
        id: 6,
        imgSrc: "/images/shop/shop6.jpg",
        name: "paper cup",
        stars: 4,
        price: 31.00,
        isreducedPrice: false,
        reducedPrice: 31.00 
    },
    {
        id: 7,
        imgSrc: "/images/shop/shop7.jpg",
        name: "choco bites",
        stars: 4.5,
        price: 63.00,
        isreducedPrice: false,
        reducedPrice: 63.00 
    },
    {
        id: 8,
        imgSrc: "/images/shop/shop8.jpg",
        name: "ground coffee",
        stars: 3.5,
        price: 75.00,
        isreducedPrice: false,
        reducedPrice: 75.00 
    },
    {
        id: 9,
        imgSrc: "/images/shop/shop9.jpg",
        name: "moka pot",
        stars: 5,
        price: 32.00,
        isreducedPrice: true,
        reducedPrice: 18.00 
    },
    {
        id: 10,
        imgSrc: "/images/shop/shop10.jpg",
        name: "cafe bags",
        stars: 5,
        price: 29.00,
        isreducedPrice: false,
        reducedPrice: 29.00 
    },
    {
        id: 11,
        imgSrc: "/images/shop/shop11.jpg",
        name: "tea cup",
        stars: 3.5,
        price: 46.00,
        isreducedPrice: false,
        reducedPrice: 46.00 
    },
    {
        id: 12,
        imgSrc: "/images/shop/shop12.jpg",
        name: "recycled bags",
        stars: 4,
        price: 35.00,
        isreducedPrice: false,
        reducedPrice: 22.00 
    }
];
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
const shoppingSidebar = document.querySelector(".shopping-sidebar");
const shopCenterContainer = document.querySelector(".shop-center-container");
const shopShowMore = document.querySelector(".shop-show-more");

const alertMessage = document.getElementById("alert-message");
const input = document.getElementById("input");
const submitForm = document.getElementById('submit-form');

// quote btn functionality
let countForQuotes = 0;
let containerHeight = 0;
let countForShop = 0;

window.addEventListener("load", () => {
    if (alertMessage.textContent == "")
        alertMessage.style.display = "none";
    addShopItems();
})


submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
})
cartBtn.addEventListener("click", () => {
    console.log("btn clicked");
    shoppingSidebar.classList.toggle("show-sidebar");
    //closes links
    if (links.classList.contains("show-links") && shoppingSidebar.classList.contains("show-sidebar")) {
        links.style.height = "0px";
        containerHeight = 0;
        links.classList.remove("show-links");
    }
})
topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0
    });
})
quoteBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        quoteBtns.forEach((thatBtn) => {
            if (thatBtn != btn)
                thatBtn.classList.remove("clicked-btn")
            btn.classList.add("clicked-btn");
        })
        quoteText.textContent = quotes[index].text;
        quotePerson.textContent = quotes[index].name;
    })
})

setInterval(() => {
    countForQuotes++;
    if (countForQuotes > 2)
        countForQuotes = 0;
    changeQuote(countForQuotes);
}, 5000);

function changeQuote(x) {
    quoteText.textContent = quotes[x].text;
    quotePerson.textContent = quotes[x].name;
    quoteBtns.forEach((btn) => {
        btn.classList.remove("clicked-btn");
    })
    quoteBtns[x].classList.add("clicked-btn");
}
// end quote
//scroll fixed navbar
window.addEventListener("scroll", () => {
    let scrollLength = window.pageYOffset;
    let navbarHeight = navigation.getBoundingClientRect().height;
    if (scrollLength > navbarHeight)
        navigation.classList.add("fixed-nav");
    else
        navigation.classList.remove("fixed-nav");
    if (scrollLength > 500)
        topBtn.classList.add("show-btn");
    else
        topBtn.classList.remove("show-btn");
})
// end fixed navbar
//toggle navbar
document.querySelector(".toggle-btn").addEventListener("click", (e) => {
    // links.classList.toggle("show-links");
    allLinks.forEach(function (item) {
        containerHeight += item.getBoundingClientRect().height;
    })
    if (links.getBoundingClientRect().height === 0) {
        links.style.height = `${containerHeight}px`;
        links.classList.add("show-links");
    } else {
        links.style.height = `0px`;
        containerHeight = 0;
        links.classList.remove("show-links");
    }
    if (shoppingSidebar.classList.contains("show-sidebar"))
        shoppingSidebar.classList.remove("show-sidebar");
})

submitEmail.addEventListener("click", () => {
    const inputText = input.value;
    console.log(inputText)
    if (!input.value) {
        displayMessage("Email left empty!", "danger")
    } else
    if (inputText.search("@") === -1) {
        displayMessage("please include an `@` in the email", "danger")
    } else {
        const aPosition = inputText.search("@");
        const afterA = inputText.slice(aPosition);
        if (afterA == "")
            displayMessage(`please enter a part following '@', "${input.value}" is empty`, "danger");
        else {
            displayMessage(`email added`, "success");
        }
    }
})
shopShowMore.addEventListener("click",()=>{
    addShopItems();
})

allLinks.forEach(function (item) {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        if (element === null)
            return 0
        const navHeight = navigation.getBoundingClientRect().height;
        const linkContainerHeight = links.getBoundingClientRect().height;
        const fixedNav = navigation.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
            console.log("if statement entered");
            position = position - navHeight;
        }
        if (links.getBoundingClientRect().height > 80) {
            console.log("else if loop entered");
            position = position + linkContainerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position
        })
        links.style.height = `0px`;
        containerHeight = 0;
        isFirstClick = false;

    })
})

allLinks.forEach((item) => {
    item.addEventListener("click", () => {
        if (links.classList.contains("show-links") || links.style.height !== "0px") {
            links.style.height = `0px`;
            containerHeight = 0;
            links.classList.remove("show-links");

        }
    })
})

function displayMessage(message, type) {
    alertMessage.style.display = "inline";
    alertMessage.classList.add(`alert-${type}`)
    alertMessage.textContent = message;
    setTimeout(function () {
        alertMessage.textContent = "";
        alertMessage.classList.remove(`alert-${type}`);
        alertMessage.style.display = "none";
    }, 1000);
}
function addShopItems(){
    console.log("entered function")
    let tempArray = shopItemsArray.slice(countForShop,countForShop+4)
    tempArray.forEach((item)=>{
        const divEl = document.createElement("div")
        divEl.innerHTML = `  <div class="shop-img-container">
                                <img src=${item.imgSrc}>
                                <div class="add-to-cart-btn">
                                    <i class="fas fa-cart-plus shopping-cart"></i>
                                    <span>add to cart</span>
                                </div>
                            </div>
                            <div class="shop-text-container">
                                <h2>${item.name}</h2>
                                <div class="star-rating">
                                    ${calcStars(item.stars)}
                                </div>
                                    <p class="shop-price">$${item.price}</p>
                            </div>`
        divEl.classList.add("shop-item");
        shopCenterContainer.appendChild(divEl);
    })
    countForShop += 4;
    if(countForShop >= shopItemsArray.length)
        shopShowMore.style.display = "none";
}
function calcStars(stars){  
    let returnString = ``
    const completeStars = Math.floor(stars);
    const decimalstar = stars-completeStars;
    for(i=0;i<completeStars;i++)
    {
        returnString += `<span><i class="fas fa-star"></i></span>`
    }
    if(completeStars!=5)    
        if(decimalstar == 0.5)
        {
            returnString += `<span><i class="fas fa-star-half-alt"></i></span>`
        }
        else
            returnString += `<span><i class="far fa-star"></i></span>`
    while(true){
        noOfSpans = returnString.match(/<span>/g).length;
        if(noOfSpans<5)
            returnString += `<span><i class="far fa-star"></i></span>`
        else
            break;
    }
    return returnString;
}  
    // let itemCode = `<div class="shop-item">
                    //     <div class="shop-img-container">
                    //         <img src="/images/shop/shop1.jpg">
                    //         <div class="add-to-cart-btn">
                    //             <i class="fas fa-cart-plus shopping-cart"></i>
                    //             <span>add to cart</span>
                    //         </div>
                    //     </div>
                    //     <div class="shop-text-container">
                    //         <h2>paper brouch</h2>
                    //             <div class="star-rating">
                    //                 <span><i class="fas fa-star"></i></span>
                    //                 <span><i class="fas fa-star"></i></span>
                    //                 <span><i class="fas fa-star"></i></span>
                    //                 <span><i class="fas fa-star-half-alt"></i></span>
                    //                 <span><i class="far fa-star"></i></span>
                    //             </div>
                    //         <p class="shop-price">$46.00</p>
                    //     </div>
                    // </div>`
