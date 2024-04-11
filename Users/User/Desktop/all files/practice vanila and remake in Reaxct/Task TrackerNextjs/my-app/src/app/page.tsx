import Link from "next/link";

async function getPets() {
  const petsPromise = await fetch(
    "https://learnwebcode.github.io/bootcamp-pet-data/pets.json"
  );
  const data = await petsPromise.json();
  return data;
}

export default async function Home() {
  const pets = await getPets();
  return (
    <div>
      <h1>List of pets</h1>
      <ul>
        {pets.map((pet, index) => {
          return (
            <li key={index}>
              <Link href={"/pet/" + pet.name.toLowerCase()}>{pet.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
