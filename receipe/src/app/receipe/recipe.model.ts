import { Ingredeient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imgPath: string;
  public ingredeients: Ingredeient[];

  constructor(
    name: string,
    description: string,
    imgPath: string,
    ingredeients: Ingredeient[]
  ) {
    this.name = name;
    this.description = description;
    this.imgPath = imgPath;
    this.ingredeients = ingredeients;
  }
}
