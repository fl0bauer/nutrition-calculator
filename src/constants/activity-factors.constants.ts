import { ActivityFactor } from "../enums/activity-factor.enum";

export const ACTIVITY_FACTORS: Record<ActivityFactor, number> = {
    [ActivityFactor.Sedentary]: 1.2,
    [ActivityFactor.LightActivity]: 1.375,
    [ActivityFactor.ModeratelyActive]: 1.55,
    [ActivityFactor.VeryActive]: 1.725,
    [ActivityFactor.ExtraActive]: 1.9
} as const
