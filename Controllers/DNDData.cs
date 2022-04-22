using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using DNDANGSP.Models;

namespace DNDANGSP.Controllers;

[ApiController]
[Route("[controller]")]
public class DNDData : ControllerBase
{
    [HttpGet("{id}")]
    public string GetCharacterById(string id)
    {
        if (id.ToLowerInvariant() == "example")
        {
            return JsonConvert.SerializeObject(new Character("Example"));
        }
        if (id.ToLowerInvariant() == "yosuke")
        {
            return JsonConvert.SerializeObject(new Character("Yosuke"));
        }
        return null;
    }
}