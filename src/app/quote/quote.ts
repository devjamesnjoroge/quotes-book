export class Quote {
    showDetails: boolean;
    date: Date;
    constructor(public quote: string, public author: string, public uploader: string) {
        this.showDetails = false;
        this.date = new Date();
    }
}
