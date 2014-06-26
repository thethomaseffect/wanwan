#!/usr/bin/env node

var ddg = require('ddg');
var heading = require('cli-color').blueBright.bold;
var _ = require('underscore');

var program = require('commander');

program.version('0.0.1')
  .option('-s, --search <anime>', 'Searches for the anime title on-line')
  .option('-a, --add <anime>', 'Adds an anime to your currently watching')
  .option('-r, --remove <anime>', 'Removes an anime from your list');

program
   .command('setup')
   .description('run remote setup commands')
   .action(function(){
     console.log('setup');
   });

program.parse(process.argv);

if(program.search){
    ddg.query(getFullArgValue(['-s','--search'],process.argv),
    {
        'useragent': 'Wanwan',
        'no_redirects': '1',
        'no_html': '1',
        'skip_disambig': '1',
        'format': 'json',
        'pretty': '0'

    }, function(err, data){
        if(err){
            console.log('Error: ' + err);
        }
        console.log(heading(data.Heading + '\n----------------------------------\n') +
            data.Abstract);
    });
}

/**
If the user provided a flag that expects a string and the string contains spaces,
only the first word will be available. This function parses the provided args and
joins any strings with a space that do not start with '-'

Example:

$ ./wanwan.js -s sword art online -f
=> "sword art online"

flags: The flag this value is expected for e.g. ['-s',['--search']]
args: The node process.argv array or something that looks like:
    ['node','wanwan.js','-s','attack','on','titan']

*/
function getFullArgValue(flags, args){
    var startIndex;
    for(var i = 0; i < args.length; i++){
        if(args[i] === flags[0] || args[i] === flags[1]){
            startIndex = i + 1;
            break;

        }
    }
    // Additional flags follow this one
    for(var i1 = startIndex; i1 < args.length; i1++){
        if(args[i1][0] === '-'){
            return args.slice(startIndex,i1).join(' ');
        }
    }
    // This is the only or last flag
    return args.slice(startIndex,args.length).join(' ');
}

