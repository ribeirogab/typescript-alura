import { DaysOfWeek } from "../enums/DaysOfWeek.js";

export class Negotiation {
  private _date: Date;
  constructor(
    _date: Date,
    public readonly amount: number,
    public readonly value: number
  ) {
    if (!this.isBusinessDay(_date)) {
      throw new Error("Só é possível criar negociações em dias úteis.");
    }

    this._date = _date;
  }

  private isBusinessDay(date: Date): boolean {
    const dayNumber = date.getDay();

    return dayNumber !== DaysOfWeek.SUNDAY && dayNumber !== DaysOfWeek.SATURDAY;
  }

  public get date(): Date {
    const newDate = new Date(new Date(this._date.getTime()));
    return newDate;
  }

  public get volume() {
    return this.value * this.amount;
  }
}
