# Nutrition Calculator

This package helps you calculate your Maintenance Calories and Macronutrient breakdown based on your activity level and caloric needs. 
The package provides an easy-to-use method for determining how many calories you need to maintain your current weight and how to distribute those calories across macronutrients (carbs, proteins, and fats).

## Installation

```bash
npm install nutrition-calculator
```

## Usage

Here’s how you can use the package to calculate your Maintenance Calories and the breakdown of macronutrients.

### Calculate Maintenance Calories

- `gender` options: `male` | `female`
- `height` in `cm`
- `weight` in `kg`
- `age` in `years`
- `activity` options: `sedentary`, `lightActivity`, `moderatelyActive`, `veryActive`, `extraActive`

```typescript
import { calculateMaintenanceCalories, Gender, ActivityFactor } from 'nutrition-calculator';

calculateMaintenanceCalories({ gender: 'male', height: 184, weight: 94.2, age: 32, activity: 'lightActivity' });
// -> 2841
```

### Calculate Macro Nutritions

- `calories` which the nutrition split is based on
- amount of `carbohydrates` in `%`
- amount of `fat` in `%`
- amount of `proteins` in `%`

```typescript
import { calculateMacroNutritions } from 'nutrition-calculator';

calculateMacroNutritions({ calories: 2841, percentageSplit: { carbohydrates: 50, fat: 30, protein: 20 } });
// -> { carbohydrates: 355, fat: 95, protein: 142 }
```

## Changelog

See [Changelog](./CHANGELOG.md).

## License

This package is open-source and available under the MIT License.
