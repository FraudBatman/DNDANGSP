namespace DNDANGSP.Models.CharacterModels;

public enum ContainerEnum
{
    NotContainer,
    Container,
    WeightlessContainer
}

public class Item
{
    public string itemName = "NO VALUE";
    public string itemDescription = "NO VALUE";
    public float itemWeight = -1f;
    public int itemAmount = -1;
    public ContainerEnum isContainer = ContainerEnum.NotContainer;
    public string[]? itemCalcs;
}