// "Class" is a blueprint for creating objects with some fields(values) and methods(functions).


class Person {
    name: string;
    age: number;
    print(): void{
        console.log("This is a person.");
    }
}

// Class with inheritance

class Student extends Person{
    roll: number;

    constructor(name: string, age: number, roll: number) {
        super();  //✅ must be called before using 'this'
        this.name = name;
        this.age = age;
        this.roll = roll;
    }

    print(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Roll: ${this.roll}`);
    }

}

const student1 = new Student("Rahim", 20, 1);
student1.print(); // Name: Rahim, Age: 20, Roll: 1





// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//             Public, Private, Protected
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// public: this can be called anywhere, anytime
// private: this can be called by other methods(functions) only inside the class
// protected: this can be called by other methods(functions) inside the class and its child classes

class BankAccount {
    public accountHolder: string;   // anyone can see the name
    private balance: number;        // only the bank can see the balance
    protected branch: string;       // child classes like "StudentAccount" can access branch

    constructor(accountHolder: string, balance: number, branch: string) {
        this.accountHolder = accountHolder;
        this.balance = balance;
        this.branch = branch;
    }

    public deposit(amount: number): void {
        this.balance += amount;
        console.log(`${amount} Taka deposited. Current balance = ${this.balance}`);
    }

    private showBalance(): void {
        // only available inside the BankAccount class
        console.log(`Balance for ${this.accountHolder} = ${this.balance}`);
    }

    public checkBalance(): void {
        // using private method internally
        this.showBalance();
    }
}

// Child class using protected
class StudentAccount extends BankAccount {
    public printBranch(): void {
        console.log(`Branch of ${this.accountHolder}: ${this.branch}`); // ✅ branch is accessible here
    }
}

const rahimAccount = new BankAccount("Rahim", 5000, "Dhaka");
rahimAccount.deposit(2000);  // ✅ public method
rahimAccount.checkBalance(); // ✅ uses private method internally
// rahimAccount.showBalance(); // ❌ Error: private method

const karimAccount = new StudentAccount("Karim", 1000, "Rajshahi");
karimAccount.printBranch(); // ✅ can access protected branch

