class Bank {
    #clientsAccounts = {};
    #totalAccounts = 0;

    createAccount() {
        let accountNumber = this.#totalAccounts;
        this.#totalAccounts++;
        this.#clientsAccounts[accountNumber] = 0;
        return accountNumber;
    }

    deposit(amount, account) {
        if (amount < 0) {
            console.log('no negative money');
            return false;
        }
        if (!(account in this.#clientsAccounts)) {
            console.log(`account ${account} not found`);
            return false;
        }
        this.#clientsAccounts[account] += amount;
        return true;
    }

    withdraw(amount, account) {
        if (amount < 0) {
            console.log('no negative money');
            return false;
        }
        if (amount > this.#clientsAccounts[account]) {
            console.log(`not enough balance in the account ${account}`);
            return false;
        }
        this.#clientsAccounts[account] -= amount;
        return true;
    }

    balance(account) {
        return this.#clientsAccounts[account];
    }
}

class Client {
    #ownMoney;
    #account;
    #bank;

    constructor(bank, ownMoney) {
        this.#bank = bank;
        this.#ownMoney = ownMoney;
        this.#account = bank.createAccount();
    }

    deposit(amount, account=this.#account) {
        if (this.#ownMoney < amount) { 
            console.log('not enough money');
        } else if (this.#bank.deposit(amount, account)) {
            this.#ownMoney -= amount;
        }
    }

    withdraw(amount) {
        if (this.#bank.withdraw(amount, this.#account)) {
            this.#ownMoney += amount;
        }
    }

    checkBalance() {
        console.log(`Balance in account ${this.account}: ${this.#bank.balance(this.#account)}`);
    }

    // Added these just to check results
    // get account() { return this.#account; }
    // get ownMoney() { return this.#ownMoney; }
}

// let bank = new Bank();
// let client0 = new Client(bank, 150);
// let client1 = new Client(bank, 200);

// client0.deposit(50); //0: 100
// client0.deposit(50, client1.account); // 0: 50, 1: 50
// client0.deposit(50, 8);
// client0.deposit(-100);
// client1.withdraw(25);
// client0.withdraw(-30);
// client0.withdraw(999);

// client0.checkBalance();
// client1.checkBalance();
// console.log(client0.ownMoney);
// console.log(client1.ownMoney);
