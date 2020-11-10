import { Ingredeient } from '../shared/ingredient.model';

export class Recipe {
  id: string;
  name: string;
  description: string;
  imagePath: string;
  ingredeients: Ingredeient[];
}

// export class Recipe {
//   public id: string;
//   public name: string;
//   public description: string;
//   public imgPath: string;
//   public ingredeients: Ingredeient[];

//   constructor(
//     id: string,
//     name: string,
//     description: string,
//     imgPath: string,
//     ingredeients: Ingredeient[]
//   ) {
//     this.id = id;
//     this.name = name;
//     this.description = description;
//     this.imgPath = imgPath;
//     this.ingredeients = ingredeients;
//   }
// }
