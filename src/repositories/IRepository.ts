import { Entreprises } from "@prisma/client";

export interface IRepository <T>{ 
    // findAll():Promise<T[]>
    findById(id:number) : Promise<T|null>
    create(data:Omit<T,"id">) : Promise<T>
    // update(id:number,data:Partial<T>): Promise<T>
    //  delete(id:number) :Promise<void>

    // Methods for Entreprises
    createEntreprise(data: Omit<Entreprises, "id">): Promise<Entreprises>
    findAllEntreprises(): Promise<Entreprises[]>
    findEntrepriseById(id: number): Promise<Entreprises | null>
}
