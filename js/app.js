let selectEl = document.querySelector(".capital-choose")
let listCountryEl = document.querySelector(".list-country")

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
            <li class="shadow-md bg-white rounded-md">
                <img class="h-[160px] object-cover" src="${item.flag}" alt="" width="100%">
                <div class="p-[24px]">
                    <strong class="text-[#111517] text-[18px] font-extrabold">${item.name}</strong>
                    <p class="text-[#111517] text-[14px] mt-[16px] font-bold">Population: <span class="font-normal">${item.population}</span></p>
                    <p class="text-[#111517] text-[14px] mt-[8px] font-bold">Region: <span class="font-normal">${item.name}</span></p>
                    <p class="text-[#111517] text-[14px] mt-[8px] font-bold">Capital: <span class="font-normal">${item.capital}</span></p>
                </div>
                <div class="flex justify-between p-[10px]">
                    <button class="w-[30%] py-[5px] border-[1px] border-slate-500 rounded-md">Like</button>
                    <button class="w-[30%] py-[5px] border-[1px] border-slate-500 rounded-md">Save</button>
                    <button class="w-[30%] py-[5px] border-[1px] border-slate-500 rounded-md">More</button>
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
