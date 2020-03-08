export class Movie {
    name: string;
    id: number;
    image: string;
    releasedDate: string;
    plot: string;
    code: string;
    constructor(name: string, id: number, image: string, releaseDate: string, plot: string, code: string) {
        this.name = name;
        this.id = id;
        this.image = image;
        this.releasedDate = releaseDate;
        this.plot = plot;
        this.code = code;
    }
}