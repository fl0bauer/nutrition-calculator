import { CalculateMaintenanceCalories } from "../types/calories.types";

export const ACTIVITY_FACTORS: Record<CalculateMaintenanceCalories['activity'], number> = {
    sedentary: 1.2,
    lightActivity: 1.375,
    moderatelyActive: 1.55,
    veryActive: 1.725,
    extraActive: 1.9
}
