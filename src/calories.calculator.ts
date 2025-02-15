import { ACTIVITY_FACTORS } from "./constants/activity-factors.constants";
import { CalculateMaintenanceCalories, CalculateMaintenanceCaloriesSchema } from "./types/calories.types";

/**
 * calculate the maintenance calories based on gender, weight, height, age and activity
 * @param gender male or female
 * @param weight in kilograms
 * @param height in centimeters
 * @param age in years
 * @param activity factor based on daily activity
 */
export function calculateMaintenanceCalories({ gender, weight, height, age, activity }: CalculateMaintenanceCalories): number {
    const { success, error } = CalculateMaintenanceCaloriesSchema.safeParse({ gender, weight, height, age, activity });

    if (!success) {
        throw new Error(error.message);
    }

    const baseMetabolicRate = calculateBasalMetabolicRate({ gender, weight, height, age });
    const activityFactor = ACTIVITY_FACTORS[activity];

    return Math.round(baseMetabolicRate * activityFactor);
}

/**
 * calculate the basal metabolic rate depending on the gender
 * @param gender male or female to decide which formula should be used
 * @param bodyMeasurements measurements such as weight, height and age
 */
function calculateBasalMetabolicRate({ gender, weight, height, age }: Pick<CalculateMaintenanceCalories, 'gender' | 'weight' | 'height' | 'age'>): number {
    if (gender === 'male') {
        return calculateBasalMetabolicRateMale({ weight,  height, age});
    }

    if (gender === 'female') {
        return calculateBasalMetabolicRateFemale({ weight,  height, age});
    }

    throw new Error('Unknown gender');
}

/**
 * calculate the basal metabolic rate for males
 * @param weight in kilograms
 * @param height in centimeters
 * @param age in years
 */
function calculateBasalMetabolicRateMale({ weight, height, age }: Pick<CalculateMaintenanceCalories, 'weight' | 'height' | 'age'>): number {
    return Math.round(66.5 + (13.75 * weight) + (5 * height) - (6.75 * age));
}

/**
 * calculate the basal metabolic rate for females
 * @param weight in kilograms
 * @param height in centimeters
 * @param age in years
 */
function calculateBasalMetabolicRateFemale({ weight, height, age }: Pick<CalculateMaintenanceCalories, 'weight' | 'height' | 'age'>): number {
    return Math.round(655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age));
}
