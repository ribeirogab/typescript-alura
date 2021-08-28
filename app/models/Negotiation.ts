export class Negotiation {
  private _date: Date;
  private _amount: number;
  private _value: number;

  constructor(date: Date, amount: number, value: number) {
    this._date = date;
    this._amount = amount;
    this._value = value;
  }

  public get date() {
    return this._date;
  }

  public get amount() {
    return this._amount;
  }

  public get value() {
    return this._value;
  }

  public get volume() {
    return this._value * this._amount;
  }
}
