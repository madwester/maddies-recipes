//export makes it available for other moduls
/*export class Recipe{
    constructor( public title:string, public image:string, public notes:string, public ingredients:string, public id:number = 0 ){
        this.title = title;
        this.image = image;
        this.notes = notes;
        this.ingredients = ingredients; 
        this.id = new Date().getTime();
    }
}*/

export class Recipe {
    $key: string;
    image: string;
    title: string;
    notes: string;
    ingredients: string;
}