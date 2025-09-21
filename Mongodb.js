//group,match,unwind,out,lookup,skip
//limit,sort,project,count,addFields,merge
//bucket,facet,replaceRoot,bulk write
//capped collection,create index,count document,type 10


//PATTERN MATCHING FOR NAMES
//-------------------------------------------------------------------

// Find students whose name starts with 'A'
db.students.find({ name: { $regex: /^A/i } })

// Ends with 'a'
db.students.find({ name: { $regex: /a$/i } })

// Contains 'ee' (case insensitive)
db.students.find({ name: { $regex: /ee/i } })

//Find people who have vowels in their names
db.students.find({
    name: { $regex: /[aeiou]/i }
  })

//Find persons with exactly 5 letters in their names
  db.students.find({
    name: { $regex: /^.{5}$/ }
  })


  //person with 5 letters , sterting with 'a' and ending with 'a' and has 'a' in it
  db.students.find({
    $and: [
      { name: { $regex: /^.{5}$/ } },       // exactly 5 letters
      { name: { $regex: /^a/i } },          // starts with 'a'
      { name: { $regex: /a$/i } },          // ends with 'a'
      { name: { $regex: /a/i } }            // contains 'a'
    ]
  })
  
  