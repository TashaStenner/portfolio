const facts = [
  "I once met Michel Roux",
  "I enjoy coding and cooking",
  "I am 22",
  "I am from Bristol",
  "I used to work in Hospitality",
  "My first job was at Showcase Cinema De Lux",
  "I play Magic the Gathering",
  "I have met David Attenburough",
  "I have done a few 5K runs",
  "I was a member of a martial arts club for 10 years",
  "I want to go to travel more",
  "I used to be an Assistant Manager in a hotel and a cinema", 
  "I am a Personal License holder", 
  "I finished GCSE computing with 1/2 a mark away from an A*", 
  "I have worked fully remote for 5 weeks of my course", 
];
const totalFacts = facts.length;

const printFact = () => {
  const randomIndex = Math.floor(Math.random() * totalFacts);
  const randomFact = facts[randomIndex];

  return (
    console.log("I am Printing"),
    (document.getElementById("fact").innerHTML = ` ${randomFact}`)
  );
};

document
  .getElementById("randomBtn")
  .addEventListener("click", () => printFact());

