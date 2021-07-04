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
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis explicabo id distinctio quis voluptatum hic corporis tempora officia molestiae doloribus, cum dolore voluptatem porro dignissimos adipisci autem consequuntur minima! Quis."
    }
]
const quoteBtns = document.querySelectorAll(".quote-btn"); 
quoteBtns.forEach((btn) =>{
    btn.addEventListener("click",()=>{
        console.log("btn-clicked!");
        btn.classList.add("clicked-btn");
    } )
})


