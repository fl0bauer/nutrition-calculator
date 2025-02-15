import { CARBOHYDRATE_CALORIES_FACTOR, FAT_CALORIES_FACTOR, PROTEIN_CALORIES_FACTOR } from "./constants/calorie-factors.constants";
import { CalculatedMacroNutritionSplit, CalculateMacroNutritions, CalculateMacroNutritionsSchema } from "./types/macros.types";

/**
 * calculate the macro nutritions for the given calories
 * @param calories amount of calories from which the macro nutritions should be calculated from
 * @param percentageSplit macro nutrition split that decides how much of each macro nutrition should be calculated from calories
 */
export function calculateMacroNutritions({ calories, percentageSplit }: CalculateMacroNutritions): CalculatedMacroNutritionSplit {
    const { success, error } = CalculateMacroNutritionsSchema.safeParse({ calories, percentageSplit });

    if (!success) {
        throw new Error(error.message);
    }

    if ((percentageSplit.carbohydrates + percentageSplit.fat + percentageSplit.protein) !== 100) {
        throw new Error('macro nutrition split should be equal to 100%');
    }

    const carbohydrates = calculateMacroNutrition(calories, percentageSplit.carbohydrates, CARBOHYDRATE_CALORIES_FACTOR);
    const fat = calculateMacroNutrition(calories, percentageSplit.fat, FAT_CALORIES_FACTOR);
    const protein = calculateMacroNutrition(calories, percentageSplit.protein, PROTEIN_CALORIES_FACTOR);

    return { carbohydrates, fat, protein };
}

/**
 * calculate macro nutrition from an overall amount of calories
 * @param calories overall amount of calories which the macro should be split of
 * @param percentage amount of the part that macro nutrition should split from the overall calories
 * @param factor calories factor for the specific macro nutrition
 */
function calculateMacroNutrition(calories: number, percentage: number, factor: number): number {
    return Math.round((calories * (percentage / 100)) / factor);
}
