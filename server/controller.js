const database = []

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getRage: (req, res) => {
        const rage = ["AHHHHHHHHHHHHHH!", "RAAAAAAAAAAAAAAH!", "REEEEEEEEEEEEEEEEEEEEEEEEEE!","NAH NAH AHHHHHHHHHHHHH!","RAAAAAAAAGE CAAAAAAAAGE!"];
      
        
        let randomIndex = Math.floor(Math.random() * rage.length);
        let randomRage = rage[randomIndex];
      
        res.status(200).send(randomRage);
    },

    submitName: (req,res) => {
        const name = req.body.name
        
        const newObj = {
            name: name,
        }
        
        database.push(newObj)
        console.log(newObj);
        
        res.status(200).send(database)
    },

    getHelp: (req, res) => {
        const help = ['Im dying...help me.','Sorry, you\'re not getting help','have you tried listening to Nickelback?','There is nothing that i can do for you','we\'re in the same boat pal :)']
        let randomIndex = Math.floor(Math.random() * help.length);
        let randomHelp = help[randomIndex];
      
        res.status(200).send(randomHelp);
    },
    getBrandOpinion: (req,res) => {
        const kawasaki = ['YOU BLEED GREEN!?, i knew you were attractive!']
        let randomIndex = Math.floor(Math.random() * kawasaki.length);
        let randomkawasakiOp = kawasaki[randomIndex]
        res.status(200).send(randomkawasakiOp)
    }

}