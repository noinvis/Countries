let selectEl = document.querySelector(".capital-choose")
let listCountryEl = document.querySelector(".list-country")
let searchEl = document.querySelector(".search-input")
let likeCountryEl = document.querySelector(".like-country")
let saveCountryEl = document.querySelector(".save-country")
let modalWrapperEl = document.querySelector(".modal-wrapper")
let modalInnerEl = document.querySelector(".modal-inner")

function createOption(arr, list){
    arr.forEach(item => {
        let optionEl = document.createElement("option")
        optionEl.value = item.capital.toLowerCase( )
        optionEl.textContent = item.capital
        list.appendChild(optionEl)
    })
}
createOption(countries, selectEl)

function showCountry(arr, list){
    list.innerHTML = ""
    arr.forEach(item => {
        let itemEl = document.createElement("li")
        itemEl.className = "w-[264px] shadow-md bg-white rounded-md"
        list.appendChild(itemEl)
        itemEl.innerHTML = `
            <li class="shadow-md rounded-md">
                <img class="h-[160px] object-cover" src="${item.flag}" alt="" width="100%">
                <div class="p-[24px]">
                    <strong class="text-[#111517] text-[18px] font-extrabold">${item.name}</strong>
                    <p class="text-[#111517] text-[14px] mt-[16px] font-bold">Population: <span class="font-normal">${item.population}</span></p>
                    <p class="text-[#111517] text-[14px] mt-[8px] font-bold">Region: <span class="font-normal">${item.name}</span></p>
                    <p class="text-[#111517] text-[14px] mt-[8px] font-bold">Capital: <span class="font-normal">${item.capital}</span></p>
                </div>
                <div class="flex justify-between p-[10px]">
                    <button onclick="likeBtn(${item.id})" class="${item.isLiked ? "bg-red-500 text-white" : ""}  w-[30%] py-[5px] border-[1px] border-slate-500 rounded-md">Like</button>
                    <button onclick="saveBtn(${item.id})" class="${item.isBasket ? "bg-blue-500 text-white" : ""} w-[30%] py-[5px] border-[1px] border-slate-500 rounded-md">Save</button>
                    <button onclick="moreBtn(${item.id})" class="w-[30%] py-[5px] border-[1px] border-slate-500 rounded-md">More</button>
                </div>
            </li>
        `
    })
}
showCountry(countries, listCountryEl)

selectEl.addEventListener("change", function(evt){
    let changeValue = evt.target.value;
        if(changeValue == "all"){
        showCountry(countries, listCountryEl)
    }
    else{
        let filterList = countries.filter(item => item.capital.toLowerCase() == changeValue)
        showCountry(filterList, listCountryEl)
    }
})
searchEl.addEventListener("input", function(e){
    let result = countries.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase())  ||  item.population.toString().includes(e.target.value) || item.capital.includes(e.target.value))
    showCountry(result, listCountryEl)
})
function likeBtn(id){
    let findObj = countries.find(item => item.id == id)
    findObj.isLiked = !findObj.isLiked
    showCountry(countries, listCountryEl)
    likeCountryEl.textContent = countries.filter(item => item.isLiked).length
}
function saveBtn(id){
    let findObj = countries.find(item => item.id == id)
    findObj.isBasket = !findObj.isBasket
    showCountry(countries, listCountryEl)
    saveCountryEl.textContent = countries.filter(item => item.isBasket).length
}
function likedCards(){
    let res = countries.filter(item => item.isLiked)
    showCountry(res, listCountryEl)
}
function savedCards(){
    let res = countries.filter(item => item.isBasket)
    showCountry(res, listCountryEl)
}
function moreBtn(id){
    let findObj = countries.find(item => item.id == id)
    modalWrapperEl.classList.remove("scale-0")
    modalInnerEl.innerHTML = `
        <div class="flex items-center dark:text-gray-400">
            <img class="h-[100%] object-cover" src="${findObj.flag}" alt="" width="350">
            <div class="p-[24px]">
                <strong class="text-[#111517] text-[18px] font-extrabold">${findObj.name}</strong>
                <p class="text-[#111517] text-[14px] mt-[16px] font-bold">Population: <span class="font-normal">${findObj.population}</span></p>
                <p class="text-[#111517] text-[14px] mt-[8px] font-bold">Region: <span class="font-normal">${findObj.name}</span></p>
                <p class="text-[#111517] text-[14px] mt-[8px] font-bold">Capital: <span class="font-normal">${findObj.capital}</span></p>
                <p class="text-[#111517] text-[14px] mt-[8px] font-bold">Info: <span class="font-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span></p>
            </div>
        </div>
    `
}
modalWrapperEl.addEventListener("click", (e) => e.target.id && modalWrapperEl.classList.add("scale-0"))
