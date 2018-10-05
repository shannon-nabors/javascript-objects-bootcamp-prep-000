 function updateObjectWithKeyAndValue(obj, key, value) {
   console.log(Object.assign({}, obj, { [key]: value }));
 }
 
 const recipe = { eggs: 3 };
 
 updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup');
 
 console.log(recipe);
 
 var targetObject = {
   '16th': 'Nicaragua',
   '17th': 'Cuba',
   '18th': 'Groucho Marx',
   '19th': 'Mindanao'
 }
 
 function updateObjectWithObject(targetObject, updatesObject) {
   console.log(Object.assign({}, targetObject, updatesObject));
 }