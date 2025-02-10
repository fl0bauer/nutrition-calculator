import { Gender } from "./enums/gender.enum";
import { ActivityFactor } from "./enums/activity-factor.enum";
import { BodyMeasurements, BodyMeasurementsSchema } from "./types/body-measurements.type";
import { ACTIVITY_FACTORS } from "./constants/activity-factors.constants";

/**
 * calculate the maintenance calories based on gender, weight, height, age and activity
 * @param gender male or female to decide which formula should be used
 * @param bodyMeasurements measurements such as weight, height and age
 * @param activityFactor factor that considers the daily activity
 */
export function calculateMaintenanceCalories(gender: Gender, bodyMeasurements: BodyMeasurements, activityFactor: ActivityFactor): number {
    const { success, error } = BodyMeasurementsSchema.safeParse(bodyMeasurements);

    if (!success) {
        throw new Error(error.message);
    }

    const baseMetabolicRate = calculateBasalMetabolicRate(gender, bodyMeasurements);
    const factor = ACTIVITY_FACTORS[activityFactor];

    return Math.round(baseMetabolicRate * factor);
}

/**
 * calculate the basal metabolic rate depending on the gender
 * @param gender male or female to decide which formula should be used
 * @param bodyMeasurements measurements such as weight, height and age
 */
function calculateBasalMetabolicRate(gender: Gender, bodyMeasurements: BodyMeasurements): number {
    return gender === 'male' ? calculateBasalMetabolicRateMale(bodyMeasurements) : calculateBasalMetabolicRateFemale(bodyMeasurements);
}

/**
 * calculate the basal metabolic rate for males
 * @param bodyMeasurements measurements such as weight, height and age
 */
function calculateBasalMetabolicRateMale(bodyMeasurements: BodyMeasurements): number {
    const { weight, height, age } = bodyMeasurements;
    return Math.round(66.5 + (13.75 * weight) + (5 * height) - (6.75 * age));
}

/**
 * calculate the basal metabolic rate for females
 * @param bodyMeasurements measurements such as weight, height and age
 */
function calculateBasalMetabolicRateFemale(bodyMeasurements: BodyMeasurements): number {
    const { weight, height, age } = bodyMeasurements;
    return Math.round(655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age));
}
