import { CARBOHYDRATE_CALORIES_FACTOR, FAT_CALORIES_FACTOR, PROTEIN_CALORIES_FACTOR } from "./constants/calorie-factors.constants";
import { MacroNutritions, MacroNutritionSplit, MacroNutritionSplitSchema } from "./types/macros.type";

/**
 * calculate the macro nutritions for the given calories
 * @param calories amount of calories from which the macro nutritions should be calculated from
 * @param split macro nutrition split that decides how much of each macro nutrition should be calculated from calories
 */
export function calculateMacroNutritions(calories: number, split: MacroNutritionSplit): MacroNutritions {
    const { success, error } = MacroNutritionSplitSchema.safeParse(split);

    if (!success) {
        throw new Error(error.message);
    }

    if ((split.carbohydrates + split.fat + split.protein) !== 100) {
        throw new Error('macro nutrition split should be equal to 100%');
    }

    if (calories <= 0) {
        throw new Error('calories must be greater than 0');
    }

    const carbohydrates = calculateMacroNutrition(calories, split.carbohydrates, CARBOHYDRATE_CALORIES_FACTOR);
    const fat = calculateMacroNutrition(calories, split.fat, FAT_CALORIES_FACTOR);
    const protein = calculateMacroNutrition(calories, split.protein, PROTEIN_CALORIES_FACTOR);

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
