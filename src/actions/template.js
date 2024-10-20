export default class TemplateClass
{
    constructor(options) 
    {   
        this.makeCommand(options)
    }

    makeCommand(options) 
    {
           switch(options.commandname) 
            {   
                case "one":
                      console.log(`one!`);
                break;
                case "two":
                      console.log(`two!`);  
                break;
                default:
                      console.log(`Default`);
            }
            
    }

    returnWriteOutput()
    {
      return 'out';
    }
}
