export class Quote {
    showDetails: boolean;
    date: Date;
    un: number;
    dn: number;
    constructor(public quote: string, public author: string, public uploader: string) {
        this.showDetails = false;
        this.date = new Date();
        this.un = 0;
        this.dn = 0;
    }
}
