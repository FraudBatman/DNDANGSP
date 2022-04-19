using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using DNDANGSP.Models;

namespace DNDANGSP.Controllers;

[ApiController]
[Route("[controller]")]
public class DNDData : ControllerBase
{
    [HttpGet(Name = "GetExampleCharacter")]
    public string GetExampleCharacter()
    {
        var chara = new Character("Example");

        return JsonConvert.SerializeObject(chara);
    }
}