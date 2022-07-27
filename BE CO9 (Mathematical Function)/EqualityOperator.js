//When we compare two values using the equality operator, it will perform type coercion first and then perform comparison. If we are comparing number 1 and 1 non-number then non-number will be converted to number first and then comparison will take place.
//Example:
/*
10=="10" --> return true 
false==0 --> return true(false converted to zero here.)
