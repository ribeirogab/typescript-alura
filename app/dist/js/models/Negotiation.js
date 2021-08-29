import { DaysOfWeek } from "../enums/DaysOfWeek.js";
export class Negotiation {
    constructor(_date, amount, value) {
        this.amount = amount;
        this.value = value;
        if (!this.isBusinessDay(_date)) {
            throw new Error("Só é possível criar negociações em dias úteis.");
        }
        this._date = _date;
    }
    isBusinessDay(date) {
        const dayNumber = date.getDay();
        return dayNumber !== DaysOfWeek.SUNDAY && dayNumber !== DaysOfWeek.SATURDAY;
    }
    get date() {
        const newDate = new Date(new Date(this._date.getTime()));
        return newDate;
    }
    get volume() {
        return this.value * this.amount;
    }
    static create(dateString, amountString, valueString) {
        const date = new Date(dateString.replace(/-/g, ","));
        const amount = parseInt(amountString);
        const value = Number(valueString);
        return new Negotiation(date, amount, value);
    }
}
