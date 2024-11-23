// Array of fun facts about Sri Lanka cricket
const funFacts = [
    { "fact": "Sri Lanka won their first and only ICC Cricket World Cup in 1996." },
    { "fact": "Muttiah Muralitharan, a Sri Lankan cricketer, holds the record for the most wickets in Test cricket with 800 wickets." },
    { "fact": "Sanath Jayasuriya, a former Sri Lankan cricketer, is known for revolutionizing one-day international cricket with his aggressive batting style." },
    { "fact": "Sri Lanka's Kumar Sangakkara is one of the few players to have scored over 12,000 runs in both Test and ODI formats." },
    { "fact": "Lasith Malinga, known for his distinctive round-arm action, is the only bowler to have taken four wickets in four consecutive balls in international cricket." },
    { "fact": "Sri Lanka's cricket team is known for its strong spin bowling attack, with legendary spinners like Muttiah Muralitharan and Rangana Herath." },
    { "fact": "Arjuna Ranatunga was the captain of the Sri Lankan team that won the 1996 World Cup, leading them to victory against Australia in the final." },
    { "fact": "Sri Lanka played their first Test match in 1982 against England." },
    { "fact": "The Sri Lankan cricket team is known for its colorful and passionate fans, who are famous for their vibrant support during matches." },
    { "fact": "Sri Lanka's Mahela Jayawardene and Kumar Sangakkara hold the record for the highest partnership in Test cricket, with 624 runs against South Africa in 2006." },
    { "fact": "Sri Lanka's first Test victory came in 1985 against India at the P. Sara Oval in Colombo." },
    { "fact": "Chaminda Vaas is the only bowler to take a hat-trick with the first three balls of a One Day International match, achieving this feat against Bangladesh in the 2003 World Cup." },
    { "fact": "Sri Lanka's cricket team was awarded Test status in 1981, becoming the eighth Test-playing nation." },
    { "fact": "Sri Lanka's victory in the 1996 World Cup was the first time a host nation had won the tournament." },
    { "fact": "Sri Lanka's cricket team is known for its unique and vibrant team colors, often featuring bright blue and yellow." }
];

// Function to generate a random fun fact
function generateRandomFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    const randomFact = funFacts[randomIndex].fact;
    document.getElementById('fact').innerText = randomFact;
}