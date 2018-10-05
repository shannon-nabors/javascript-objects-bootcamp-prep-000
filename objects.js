 function updateObjectWithKeyAndValue(obj, key, value) {
   console.log(Object.assign(obj, { [key]: value }));
 }
 
 const recipe = { eggs: 3 };
 
 updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup');
 
 console.log(recipe);