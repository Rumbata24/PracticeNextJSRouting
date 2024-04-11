import Link from "next/link";

async function getPet(name) {
  const allPetPromise = await fetch(
    "https://learnwebcode.github.io/bootcamp-pet-data/pets.json"
  );
  const allPet = await allPetPromise.json();

  const pet = allPet.filter((pet) => {
    return name.toUpperCase() === pet.name.toUpperCase();
  })[0];

  return pet;
}

export default async function Pet({ params }) {
  const pet = await getPet(params.name);
  return (
    <>
      <h2>{pet.name}</h2>
      <h2>{pet.birthYear}</h2>
      <p>{pet.description}</p>
      {pet.photo && <img src={pet.photo} alt={pet.name}></img>}
    </>
  );
}
