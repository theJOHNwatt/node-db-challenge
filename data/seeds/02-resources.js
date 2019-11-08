
exports.seed = function(knex) {
  return knex("resources").insert([
    { 
      name: "seed resource 1", 
      description: "resource test 1" 
    },
    { 
      name: "seed resource 2", 
      description: "resource test 2" 
    },
    { 
      name: "seed resource 3", 
      description: "resource test 3" 
    }
  ]);
};
