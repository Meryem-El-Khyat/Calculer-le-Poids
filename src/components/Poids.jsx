import React from 'react';
import {useState} from 'react';


const CalculPoids = () => {
    const[taille, setTaille]=useState(0);
    const[genre, setGenre]=useState('');
    const[image,setImage]=useState('');
    

    const Changer = (e) => {
        const selectedGenre = e.target.value;
        setGenre(selectedGenre);
        setImage(
          selectedGenre === 'femme' ? '/img/femme.jpeg' :
          selectedGenre === 'homme' ? '/img/homme.jpeg' :
          ''
        );
      };


    const Afficher = () => {
        // Logique pour calculer le poids idéal peut être ajoutée ici
        alert(`Taille: ${taille}, Genre: ${genre}`);
    };



    return(
        <div>
         <h1>Calculer le Poids</h1>
         <label htmlFor="">Taille en CM :</label><br />
         <input type="text"  value={taille} onChange={(e)=>{setTaille(e.target.value)}}/><br />

         <label htmlFor="">Genre :</label><br />
         <select value={genre} onChange={Changer}>
            <option value="select">Selection</option>
            <option value="femme">Femme</option>
            <option value="homme">Homme</option>
         </select>
         {image && <img src={image} alt={genre}/>} <br />

         <label htmlFor="">Poids idéal :</label><br />
         <input type="numbre"  onChange={taille}/><br />

         <button type='submit' onClick={Afficher}>Calculat</button>
        </div>
    )
}
export default CalculPoids;