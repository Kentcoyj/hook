const readline = require('readline');
const {
    Webhook,
    MessageBuilder
} = require('discord-webhook-node');
var Bg = require('prompt-sync')();

const webhook = Bg("Your Webhook URL= ")
const webhook_username = Bg("Your Webhook Username= ")
const webhook_avatar = Bg("Avatar Webhook= ")


function main() {
    return new Promise(function(resolve, reject) {
        let rl = readline.createInterface(process.stdin, process.stdout)
        console.log("Super Simple webhook executor written on NodeJS (C)\n")

        rl.setPrompt(`SendMessage@${webhook_username}: `);
        rl.prompt();
        rl.on('line', function(command, error) {
            if (command === "!exit" || command === "!quit" || command == '!q') {
                console.log('bye')
                process.exit(1)
            }
            if (command == "!clear") {
                console.clear();
            } else {
                if (!command) {
                    console.log(`please enter the message`)
                } else {
                    try {
                        webhook.send(command)
                    } catch (err) {
                        return console.log("error goblog");
                    }
                }
            }
            rl.prompt()

        })
    })
}

function run() {
    try {
        main()
    } catch (err) {
        return console.log("Something went wrong.");
    }
}
run()
