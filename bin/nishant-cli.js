#!/usr/bin/env node
import { program,Option } from "commander";
import FileManipulation  from "../src/actions/filemanipulation.js";
//import TemplateClass from "../src/actions/template.js";

  program
    .name("nishant-cli")
    .command("gen-sfdx")
    .version("1.0.0")
    .description("Nishant ClI for customizations")
    .addOption(new Option("-ct, --commandtype <string>", "Add command type").choices(['file', 'custom']).makeOptionMandatory())
    .addOption(new Option("-cn, --commandname <string>", "Add command name").makeOptionMandatory())
    .addOption(new Option("-it, --inputArray [value]", "Add Input array"))
    .addOption(new Option("-is, --inputString", "Add Input String"))
    .action((options) =>{ 
              switch(options.commandtype) 
              {         
                case "file":
                      var Instance= new FileManipulation(options);
                      var out=Instance.returnWriteOutput();
                      console.log(`[OUT] ${out}`);
                  break;
                case "custom":
                      console.log(`CustomTypes!`)
                  break;
                default:
                  program.showHelpAfterError('(add --help for additional information)');
              }
     
    });

  program.parse(process.argv);
  

