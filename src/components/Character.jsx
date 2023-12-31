export default function Character({name,gender, origin, image}){

    return (
            <div className={"character-container"}>

                <h2>{name}</h2>
                <img src={image} alt={name}/>
                <h3>Origin: {origin}</h3>
                <p>Gender: {gender}</p>

            </div>

    );
}