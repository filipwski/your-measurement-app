export class Measurement {
    public readonly date: Date
    public readonly temperature: string
    public readonly humidity: string

    constructor(date: Date, temperature: string, humidity: string) {
        this.date = date
        this.temperature = temperature
        this.humidity = humidity
    }
}
