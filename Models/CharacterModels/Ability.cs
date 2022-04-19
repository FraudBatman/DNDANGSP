namespace DNDANGSP.Models.CharacterModels;

public class Ability
{
    /*CONSTANTS*/
    private static readonly string[] DEFAULT_ABILITY_NAMES = { "strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma" };
    private const int DEFAULT_ABILITY_VALUE = 10;

    /*PROPERTIES*/
    public string name { get; set; }
    public int value { get; set; }
    public bool savingThrowProficiency { get; set; }

    /*CONSTRUCTORS*/
    public Ability()
    {
        name = "NO NAME";
    }

    /*STATIC METHODS*/
    public static Ability[] GetDefaultAbilities()
    {
        var returnValue = new Ability[DEFAULT_ABILITY_NAMES.Length];

        for (int i = 0; i < DEFAULT_ABILITY_NAMES.Length; i++)
        {
            returnValue[i] = new Ability();
            returnValue[i].name = DEFAULT_ABILITY_NAMES[i];
            returnValue[i].value = DEFAULT_ABILITY_VALUE;
            returnValue[i].savingThrowProficiency = false;
        }

        return returnValue;
    }
}