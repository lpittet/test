//let v = d3.json('https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/date-range/2021-03-12/2021-03-12')
//.then(data =>{
//        console.log("toutes les données", data);
//        console.log("pays", data.countries[0]);
//        console.log("data", data.data["2021-03-12"]);
//        for (let d of data) {
//            d.population = +d.population;
//            d["land area"] = +d["land area"];
//        }
//        return data;
//    });

let x = d3.csv("https://cdn.rawgit.com/vlandham/js_data/master/data/cities.csv", d => ({
    city: d.city,
    state: d.state,
    population: +d.population,
    land_area: +d["land area"]  
}))