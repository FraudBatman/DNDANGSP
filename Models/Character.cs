using DNDANGSP.Models.CharacterModels;
using Newtonsoft.Json;

namespace DNDANGSP.Models;

public class Character
{
    /*PROPERTIES*/
    public string name { get; set; }
    public string? picture { get; set; }
    public string race { get; set; }
    public CharacterClass[] classes { get; set; }
    public int profBonus { get; set; }
    public Ability[] abilities { get; set; }
    public HitPoint hitPoint { get; set; }
    public Skill[]? skills { get; set; }
    public Item[]? inventory { get; set; }
    public string spellAbility { get; set; }
    public Spell[]? spells { get; set; }
    public Attack[]? attacks { get; set; }
    public Feat[]? feats { get; set; }
    public Note[]? notes { get; set; }

    /*CONSTRUCTORS*/
    public Character()
    {
        name = "NO NAME";
        race = "NO RACE";
        classes = new CharacterClass[1];
        classes[0] = new CharacterClass();
        profBonus = -1;
        abilities = Ability.GetDefaultAbilities();
        hitPoint = new HitPoint();
        spellAbility = "NO SPELL ABILITY";
    }

    public Character(string charID)
    {
        Character? copy = null;
        if (charID == "Example")
        {
            copy = ExampleCharacter();
        }
        if (charID == "Yosuke")
        {
            copy = Yosuke();
        }


        if (copy != null)
        {
            this.name = copy.name;
            this.picture = copy.picture;
            this.race = copy.race;
            this.classes = copy.classes;
            this.profBonus = copy.profBonus;
            this.abilities = copy.abilities;
            this.hitPoint = copy.hitPoint;
            this.skills = copy.skills;
            this.inventory = copy.inventory;
            this.spellAbility = copy.spellAbility;
            this.spells = copy.spells;
            this.attacks = copy.attacks;
            this.feats = copy.feats;
            this.notes = copy.notes;
        }
    }

    /*STATIC METHODS*/
    private static Character ExampleCharacter()
    {
        var fs = new FileStream("assets/exampleCharacter.json", FileMode.Open);
        var sr = new StreamReader(fs);
        var character = JsonConvert.DeserializeObject<Character>(sr.ReadToEnd());
        fs.Close();
        if (character == null)
            throw new NullReferenceException("Example Character deserialized to null");
        else
            return character;
    }

    private static Character Yosuke()
    {
        var fs = new FileStream("assets/yosuke.json", FileMode.Open);
        var sr = new StreamReader(fs);
        var character = JsonConvert.DeserializeObject<Character>(sr.ReadToEnd());
        fs.Close();
        if (character == null)
            throw new NullReferenceException("Example Character deserialized to null");
        else
            return character;
    }
}