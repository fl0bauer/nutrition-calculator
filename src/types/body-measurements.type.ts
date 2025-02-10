import { z } from "zod";

export const BodyMeasurementsSchema = z.object({
    // `weight` in `kg`
    weight: z.number().positive(),

    // `height` in `cm`
    height: z.number().positive(),

    // `age` in `years`
    age: z.number().positive(),
});

export type BodyMeasurements = z.input<typeof BodyMeasurementsSchema>;
