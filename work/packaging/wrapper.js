/*
 https://aws.amazon.com/blogs/compute/scripting-languages-for-aws-lambda-running-php-ruby-and-go/
*/

const exec = require('child_process').exec;

exports.handler = function(event, context) {
    const child = exec('./lib/ruby/bin/ruby ./lib/app/hello_world.rb ' + "'" + JSON.stringify(event) + "'", (result) => {
        // Resolve with result of process
        context.done(result);
    });

    // Log process stdout and stderr
    child.stdout.on('data', console.log);
    child.stderr.on('data', console.error);
}
