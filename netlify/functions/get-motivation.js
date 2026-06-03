exports.handler = async function(event, context) {
    const mood = event.queryStringParameters.mood || 'happy';

    const quotes = {
        sad: [
            "Difficult moments do not last forever. Better days are waiting for you.",
            "This feeling is temporary. You are stronger than you think.",
            "Do not lose hope. Hard times always lead to something beautiful.",
            "Be proud of how you are handling these heavy days.",
            "It's okay to feel down. Healing takes time, be gentle with yourself."
        ],
        stressed: [
            "You survived every difficult day so far. Take a deep breath.",
            "Inhale peace, exhale stress. One step at a time.",
            "You don't have to figure it all out today. Just focus on now.",
            "Your strength is greater than any challenge in front of you.",
            "Slow down. You are doing the best you can, and that is enough."
        ],
        tired: [
            "Taking rest is part of growth. Pause, recharge, and continue stronger.",
            "Give yourself permission to pause. Tomorrow is a fresh start.",
            "You've worked hard. It's okay to take a break and rest well.",
            "Rest your mind, clear your thoughts. The world can wait.",
            "An empty tank cannot drive you forward. It's time to recharge."
        ],
        happy: [
            "Keep spreading your positive energy. Your happiness can inspire others around you.",
            "Celebrate this moment. You deserve all the happiness.",
            "Focus on the good, and the good will get better.",
            "Life is beautiful when you choose to appreciate the little moments.",
            "Your joy is powerful. Keep glowing and growing."
        ]
    };

    const moodQuotes = quotes[mood.toLowerCase()] || quotes['happy'];
    
    const randomQuote = moodQuotes[Math.floor(Math.random() * moodQuotes.length)];

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            status: "success",
            mood: mood,
            quote: randomQuote 
        })
    };
};