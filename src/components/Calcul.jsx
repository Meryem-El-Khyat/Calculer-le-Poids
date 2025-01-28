import React, { useState } from 'react'


function FormPoids() {

    const [taille, setTaille] = useState(0)
    const [genre, setGenre] = useState("")
    const [imageSrc, setImageSrc] = useState('');
    const [poids, setPoids] = useState("")
    const [message,setMessage] = useState("")

    const changeGenre = (e) =>{
    
        const selectedGenre = e.target.value
        setGenre(selectedGenre)

       if (selectedGenre === "Femme"){
        setImageSrc('/img/femme.png')
       }
       else if (selectedGenre === "Homme"){
        setImageSrc('/img/homme.png')
       }
       else {
        setImageSrc("")
       }
    }

    const changeTaille = (e) =>{

        const InputTaille = e.target.value
        setTaille(InputTaille)

        if(isNaN(InputTaille)){
            setMessage("Saisir un nombre entier valide")
        }    
        else if (InputTaille < 150){
            setMessage("Veuillez saisir un taille superieur a 150 cm")
            
        }
        else{
            setMessage("")
            
        }
    }

    const changePoids = (e) => {
        setPoids(e.target.value)
    }

    const CalculatePoids = () => {


        const tailleInMeters = parseFloat(taille) / 100; 
        let poids = 0;
        if (genre === 'Femme') {
        poids = 22 * Math.pow(tailleInMeters, 2); 
        } else if (genre === 'Homme') {
        poids = 23 * Math.pow(tailleInMeters, 2); 
        }

        setPoids(`${poids.toFixed(0)} kg`);

    } 

  return (
    <div>

        <form action="">
            <label htmlFor="">Taille en CM : </label><br />
            <input type="text" value={taille} onChange={changeTaille} />
            {message && <p style={{ color: 'red' }}>{message}</p>}
            <br />
            <label htmlFor="">Genre : </label><br />
            <select value={genre} onChange={changeGenre}>
                <option value="Femme" >Femme </option>
                <option value="Homme" >Homme </option>
            </select>
            {imageSrc && <img src={imageSrc} alt={genre} style={{ width: '50px' }} />}<br />
        
            <label htmlFor="">Poids ideal: </label><br />
            <input type="text" value={poids} onChange={changePoids} /><br />
            <button onClick={CalculatePoids}>Calculer</button>
            
        </form>
      
    </div>
  )
}

export default FormPoids
