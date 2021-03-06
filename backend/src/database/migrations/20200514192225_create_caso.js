
exports.up = function(knex) {
    return knex.schema.createTable('casos', function(table){
      table.increments();
      table.string('title');
      table.string('description').notNullable();
      table.string('value').notNullable();
      table.string('ong_id').notNullable();

      table.foreign('ong_id').references('id').inTable('ongs');
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('casos');
};

/*
{
	"title":"Nomeww da ongoo",
	"description":"email@cxxxxom.brss",
	"value":"xxsxx"
}
*/