import { Calculation } from "./calculation";

export enum containerEnum {
    NotContainer,
    Container,
    WeightlessContainer
}

export interface ICharacter {
    name: string;
    picture?: string //url that points to the picture
    race: string;
    classes: [{
        name: string;
        level: number;
        feats?: [{
            name: string;
            description: string;
            modifiers?: [{
                stat: string;
                value: string //treat like a calculation string
            }]
        }]
    }],
    profBonus: number,
    abilities: [{
        name: string;
        value: number;
        savingThrowProficiency: boolean;
    }]
    hitPoint: {
        current: number;
        temporary: number;
        maximum: number;
    }
    skills?: [{
        name: string;
        ability: string;
        proficiency: boolean;
    }]
    inventory?: [{
        itemName: string;
        itemDescription: string;
        itemWeight: number;
        itemAmount: number;
        isContainer: containerEnum;
        itemCalcs?: Calculation[];
    }]
    spellAbility: string;
    spells?: [{
        name: string;
        description: string;
        calcs?: Calculation[];
    }]
    attacks?: [{
        name: string;
        toHitCalc?: Calculation;
        damageCalc?: Calculation;
        damageType: string;
    }]
    feats?: [{
        name: string;
        description: string;
        modifiers?: [{
            stat: string;
            value: string; //treat like a calculation string
        }]
    }]
    notes?: [{
        name: string;
        description: string;
    }]
}