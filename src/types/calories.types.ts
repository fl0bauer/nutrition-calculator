import { z } from "zod";

export const CalculateMaintenanceCaloriesSchema = z.object({
    gender: z.enum(['male', 'female']),

    // `weight` in `kg`
    weight: z.number().positive(),

    // `height` in `cm`
    height: z.number().positive(),

    // `age` in `years`
    age: z.number().positive(),

    /**
     * sedentary = little to no exercise
     * lightActivity = light exercise/sports 1-3 days/week
     * moderatelyActive= moderate exercise/sports 3-5 days/week
     * veryActive = hard exercise/sports 6-7 days/week
     * extraActive = very hard daily exercise/sports & physical job or 2X day training
     */
    activity: z.enum(['sedentary', 'lightActivity', 'moderatelyActive', 'veryActive', 'extraActive']),
});

export type CalculateMaintenanceCalories = z.input<typeof CalculateMaintenanceCaloriesSchema>;
