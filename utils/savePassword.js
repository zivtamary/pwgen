const fs = require('fs');
const path = require('path');
const os = require('os');
const chalk = require('chalk');
const log = console.log;

const savePassword = (password) => {
    fs.open(path.join(__dirname, '../', 'passwords.txt'), 'a', 666, (_e, id) => {
        fs.write(id, password + os.EOL, null, 'utf-8', () => {
            fs.close(id, () => {
                log(chalk.green('Password saved to passwords.txt'));
            });
        });
    });
};

module.exports = savePassword;