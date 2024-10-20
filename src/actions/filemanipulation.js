export default class FileManipulation
{
    constructor(options) 
    {   
        this.makefileCommand(options)
    }

    makefileCommand(options) 
    {
           switch(options.commandname) 
            {   
                case "getComponentFileMap":
                      console.log(`getComponentFileMap!`);
                break;
                case "getFilesNames":
                      console.log(`getFilesNames!`);  
                break;
                default:
                      console.log(`Default`);
            }
            
    }

    returnWriteOutput()
    {
      return [1,2,3,4];
    }
}
