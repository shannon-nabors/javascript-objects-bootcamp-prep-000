var meals = {
  breakfast: 'oatmeal',
  lunch: 'burrito',
  dinner: 'steak'
}

console.log(meals);

meals.snack = 'yogurt';

console.log(meals);

console.log(meals.dinner);

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

const recipe = { eggs: 3 }