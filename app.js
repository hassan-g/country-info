// let response = await fetch("https://api.jikan.moe/v4/anime/1000/full");

async function countryInfo() {

    let response = await fetch("https://restcountries.com/v3.1/all");
    let data = await response.json();

    // flag.src = data[0].flags.png;

    console.log(data);

    input.oninput = function () {

        if (input.value != "") {

        } else {
            document.querySelector('.container').innerHTML = "";
            countryInfo()
        }
    }

    createCountry(data)



}

countryInfo()


let input = document.getElementById("input")
let btn = document.querySelector("button")



btn.addEventListener("click", async function () {

    if (input.value === "Israel") {
        input.value = "Palestine"

    }

    let response = await fetch(`https://restcountries.com/v3.1/name/${input.value}`);
    let data = await response.json();

    document.querySelector('.container').innerHTML = "";

    document.querySelector('.container').style.justifyContent = "center"
    createCountry(data)


})





function createCountry(data) {
    for (let i = 0; i < data.length; i++) {

        if (data[i].name.common === "Israel") {
            continue
        }

        let box = document.createElement('div');
        box.className = "box";

        let imgFlag = document.createElement("img");
        imgFlag.src = data[i].flags.png;

        //create country info


        let country = document.createElement('div');
        country.className = "country";

        let countryName = document.createElement("h2");
        let countryText = document.createTextNode(data[i].name.common);
        countryName.append(countryText)
        country.append(countryName)




        let population = document.createElement("h4");
        population.className = "text"
        let popSpan = document.createElement("span");
        let popSpanText = document.createTextNode("population");
        let popSpanTextTow = document.createTextNode(data[i].population)
        popSpan.append(popSpanText);
        population.append(popSpan, popSpanTextTow)


        let region = document.createElement("h4");
        region.className = "text"
        let regionSpan = document.createElement("span");
        let regionSpanText = document.createTextNode("region");
        let regionSpanTextTow = document.createTextNode(data[i].region)
        regionSpan.append(regionSpanText);
        region.append(regionSpan, regionSpanTextTow)

        let capital = document.createElement("h4");
        capital.className = "text"

        let capitalSpan = document.createElement("span");
        let capitalSpanText = document.createTextNode("capital");
        let capitalSpanTextTow = document.createTextNode(data[i].capital)
        capitalSpan.append(capitalSpanText);
        capital.append(capitalSpan, capitalSpanTextTow)





        box.append(imgFlag, country, population, region, capital)

        document.querySelector('.container').append(box)



    }
}
