const orbSubjects = []
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["you will become an exact copy of Seth Rogan!","you will have the same fate as Thanos!","the next tree you sit next to will kill you!","you get asthma!","you will be teleported to shiganshina!(outside of wall-Maria)"]
        
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
       
        res.status(200).send(randomFortune);
    },
    postNameInOrb: (req, res) => {
        const name = req.body.name
        
        const newName = {
            name: name,
        }
        
        orbSubjects.push(newName)

        res.status(200).send(orbSubjects)

    }

}