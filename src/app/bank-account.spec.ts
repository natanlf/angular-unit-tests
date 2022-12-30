/*
  Test of class Bank Account and their methods
*/
import { BankAccount } from "./bank-account";

describe('BankAccount', () => {

  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount("Natan", 1000);
  });

  it('Should create an instance', () => {
    expect(new BankAccount()).toBeTruthy();
  });

  it('deposit works', () => {
    account.deposit(2000);
    expect(account.balance).toBe(3000);
  });

  it('widthdraw works', () => {
    account.withdraw(700);
    expect(account.balance).toBe(300);
  });

});
