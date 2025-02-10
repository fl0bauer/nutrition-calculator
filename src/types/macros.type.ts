import { z } from "zod";

export interface MacroNutritions {
    // `carbohydrates` in `g`
    carbohydrates: number,

    // `fat` in `g`
    fat: number,

    // `protein` in `g`
    protein: number
}

export const MacroNutritionSplitSchema = z.object({
    // amount of `carbohydrates` in `%`
    carbohydrates: z.number().min(0).max(100),

    // amount of `fat` in `%`
    fat: z.number().min(0).max(100),

    // amount of `protein` in `%`
    protein: z.number().min(0).max(100)
})

export type MacroNutritionSplit = z.infer<typeof MacroNutritionSplitSchema>;
