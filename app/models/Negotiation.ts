export class Negotiation {
  constructor(
    private _date: Date,
    public readonly amount: number,
    public readonly value: number
  ) {}

  public get date(): Date {
    const newDate = new Date(new Date(this._date.getTime()));
    return newDate;
  }

  public get volume() {
    return this.value * this.amount;
  }
}
