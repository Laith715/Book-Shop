export class FilterModel {
    public maxPrice!: number;
    public minPrice!: number;
    public queryString!: string;

    constructor() {
        this.maxPrice = 0;
        this.minPrice = 0;
    }
}
