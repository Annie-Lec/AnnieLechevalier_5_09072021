const meubles = document.getElementById("meubles");

/*const fetchMeuble = async() => {
    jsonMeubles = await fetch('http://localhost:3000/api/furniture')
        .then((resp) => resp.json())
        console.log(jsonMeubles);
        console.log(jsonMeubles[0]);

        meubles.innerHTML = (

            jsonMeubles.map(jsonMeuble => (
                `
                    <h2>Meuble : ${jsonMeuble.name}</h2>
                    <img src="${jsonMeuble.imageURL}" />
                    <img src="http://localhost:3000/images/oak_1.jpg"/>
                    <p>${jsonMeuble.description}</p>

                `
            )).join('')
        )
};

 
fetchMeuble();*/

const fetchMeuble = async() => {
    jsonMeubles = await fetch('http://localhost:3000/api/furniture')
        .then((resp) => resp.json())
        console.log(jsonMeubles);
        console.log(jsonMeubles[0]);

        meubles.innerHTML = (

            jsonMeubles.map(jsonMeuble => (
                `
                    <h2>Meuble : ${jsonMeuble.name}</h2>
                    <img src="${jsonMeuble.imageURL}" />
                    <img src="http://localhost:3000/images/oak_1.jpg"/>
                    <p>${jsonMeuble.description}</p>

                `
            ))
        )
};

 
fetchMeuble();
    
//<img src='$(jsonMeuble.imageURL)' />