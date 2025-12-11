import { Suspense, use } from 'react';
import { getAllSolarSystems } from '../../services/SolarSystem.service';

export default function SolarSystemList(){
    // appel de la fonction du service
    const promise = getAllSolarSystems();
    //utilisation de suspense pour fallback et promise
    return (
        <>
            <div>
                <Suspense fallback="Chargement ...">
                    <PromiseRequester myPromise={promise}/>
                </Suspense>
            </div>
        </>
    )
}

function PromiseRequester({myPromise}){
    const data = use(myPromise);

    return(

        <ul>
        {data.map(d =>(
            <li key={d.id}>{d.name}</li>
            ))}
        </ul>

    )
}