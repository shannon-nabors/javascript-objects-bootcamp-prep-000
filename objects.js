 function updateObjectWithKeyAndValue(obj, key, value) {
   return Object.assign({}, obj, { [key]: value });
 }
 
 const recipe = { eggs: 3 };
 
 updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup');