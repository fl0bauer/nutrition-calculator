import { z } from "zod";

export const CalculateMacroNutritionsSchema = z.object({
    // amount of `calories` which the nutritions are based on
    calories: z.number().positive(),

    percentageSplit: z.object({
        // amount of `carbohydrates` in `%`
        carbohydrates: z.number().min(0).max(100),

        // amount of `fat` in `%`
        fat: z.number().min(0).max(100),

        // amount of `protein` in `%`
        protein: z.number().min(0).max(100)
    })
});

export type CalculateMacroNutritions = z.input<(typeof CalculateMacroNutritionsSchema)>;


export interface CalculatedMacroNutritionSplit {
    // `carbohydrates` in `g`
    carbohydrates: number,

    // `fat` in `g`
    fat: number,

    // `protein` in `g`
    protein: number
}
