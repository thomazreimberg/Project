import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('tb_office', table => {
        table.increments('id_office').primary();
        table.string('ds_office', 50).notNullable().unique();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('tb_office');
}