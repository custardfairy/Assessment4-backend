module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["Steady as you go", 42, "Here's looking at you, kid.", "May the Force be with you", "There's no place like home.", "Liberation is collective.", "Nobody puts Baby in the corner.", "You're just right, exactly as you are.", "We have two ears and one mouth so listen twice as often as you speak.", "Beauty is around and within you.", "If anyone is to do it, it is you.", "Kindness changes lives.", "Beware the Jabbawock my child."];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getInspo: (req, res) => {
        const quotes = ['"Love is an action, never simply a feeling."― bell hooks','"The one person who will never leave us, whom we will never lose, is ourself." - bell hooks', '"The moment we choose to love we begin to move towards freedom, to act in ways that liberate ourselves and others." - bell hooks', '"The function of art is to do more than tell it like it is - it`s to imagine what is possible." - bell hooks', '"What is easy is sustainable. Birds coast when they can." - Adrienne Maree Brown', '"Without positive obsession, there is nothing at all." — Octavia Butler', '"Kindness eases change / Love quiets fear” - Octavia Butler', '"There is no poetry where there are no mistakes." - Joy Harjo', '"“Caring for each other is a form of radical survival that we don`t always take into account." - Ada Limon', '"All I`ve been working on is napping, and maybe being kinder to others, to myself" - Ada Limon', '"we have been taught to fear the very things that have the potential to set us free." - Alok Vaid-Menon', '"When we liberate ourselves from the expectation that we must have all things figured out, we enter a sanctuary of empathy." - Sonya Renee Taylor'];
      
        // receive random inspiration
        let randomIndex = Math.floor(Math.random() * quotes.length);
        let randomQuote = quotes[randomIndex];
      
        res.status(200).send(randomQuote);
    },

}