
console.log("Do you believe in magic?");
console.log("------------------------");

const GetAllSpells =() => {
    const Spells = [
        {
            Name: "Turn enemy into a newt",
            IsEvil: true,
            EnergyRequired: 5.1
        },
        {
            Name: "Conjure some gold for a local charity",
            IsEvil: false,
            EnergyRequired: 2.99
        },
        {
            Name: "Give a deaf person the ability to heal",
            IsEvil: false,
            EnergyRequired: 12.2
        },
        {
            Name: "Make yourself emperor of the universe",
            IsEvil: true,
            EnergyRequired: 100.0
        },
        {
            Name: "Convince your relatives your political views are correct",
            IsEvil: false,
            EnergyRequired: 2921.5
        }
    ];

    return Spells;
}

let AllSpells = GetAllSpells()

const MakeEvilSpellBook = (AllSpells) => {
    const evilBook = {
        Title: "Evil Book",
        Spells: AllSpells.filter(spell => spell.IsEvil)
    }
    return evilBook
}

const MakeGoodSpellBook = (AllSpells) => {
    const goodBook = {
        Title: "Good Book",
        Spells: AllSpells.filter(spell => !spell.IsEvil)
    }
    return goodBook
}

const DisplaySpellBook = (book) => {
    console.log(book.Title)

    book.Spells.forEach(spell => {console.log(spell.Name)}) 
    
}

let goodBook = MakeGoodSpellBook(AllSpells)
let evilBook = MakeEvilSpellBook(AllSpells)

DisplaySpellBook(goodBook)
console.log("")
DisplaySpellBook(evilBook)
