const rangeInput = document.querySelector(".myrange");
const views = document.querySelector(".number");
const cost = document.querySelector(".amount");
const discount = document.querySelector(".discountNumber");


const data = [
    {
        pageViews:"10K",
        monthlycost:10,
        leftyuzde:20
    },
    {
        pageViews:"50K",
        monthlycost:20,
        leftyuzde:20
    },
    {
        pageViews:"100K",
        monthlycost:30,
        leftyuzde:20
    },
    {
        pageViews:"500K",
        monthlycost:40,
        leftyuzde:20
    },
    {
        pageViews:"1M",
        monthlycost:50,
        leftyuzde:20
    }
]

const getData = function(){
    const{pageViews,monthlycost,leftyuzde} =data[rangeInput.value -1];

    if(rangeInput.value == 1){
        rangeInput.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 0%,  hsl(174, 77%, 50%) 0%,  hsl(224, 65%, 95%) 0% ,  hsl(224, 65%, 100%) )"
    }else if (rangeInput.value == 2){
        rangeInput.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 0%,  hsl(174, 77%, 50%) 25%,  hsl(224, 65%, 95%) 0% ,  hsl(224, 65%, 100%) )"
    }else if (rangeInput.value == 3){
        rangeInput.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 0%,  hsl(174, 77%, 50%) 50%,  hsl(224, 65%, 95%) 0% ,  hsl(224, 65%, 100%) )"    
    }else if (rangeInput.value == 4){
        rangeInput.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 0%,  hsl(174, 77%, 50%) 75%,  hsl(224, 65%, 95%) 0% ,  hsl(224, 65%, 100%) )"    
    }else if (rangeInput.value == 5){
        rangeInput.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 0%,  hsl(174, 77%, 50%) 100%,  hsl(224, 65%, 95%) 0% ,  hsl(224, 65%, 100%) )"    
    }
    views.innerHTML = pageViews;
    cost.innerHTML =monthlycost.toFixed(2);
    discount.innerHTML = `${leftyuzde}%`
};

rangeInput.addEventListener("input", getData);