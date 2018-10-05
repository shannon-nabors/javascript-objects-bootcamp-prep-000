 function updateObjectWithKeyAndValue(obj, key, value) {
   console.log(Object.assign({}, obj, { [key]: value }));
 }
 
 const recipe = { eggs: 3 };
 
 //updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup');
 
 //console.log(recipe);
 
 var targetObject = {
   '16th': 'Nicaragua',
   '17th': 'Cuba',
   '18th': 'Groucho Marx',
   '19th': 'Mindanao'
 }
 
 var updatesObject = {
   '18th': 'Iceland',
   '20th': 'Ireland'
 }
 
 function updateObjectWithObject(targetObject, updatesObject) {
   console.log(Object.assign({}, targetObject, updatesObject));
 }