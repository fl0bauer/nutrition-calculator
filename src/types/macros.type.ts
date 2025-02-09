export interface MacroNutritions {
    // `carbohydrates` in `g`
    carbohydrates: number,

    // `fat` in `g`
    fat: number,

    // `protein` in `g`
    protein: number
}

export interface MacroNutritionSplit {
    // amount of `carbohydrates` in `%`
    carbohydrates: number,

    // amount of `fat` in `%`
    fat: number,

    // amount of `protein` in `%`
    protein: number,
}
