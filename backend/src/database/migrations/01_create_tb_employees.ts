import Knex from 'knex';

export async function up(knex: Knex) { 
    return knex.schema.createTable('tb_employees', table => {
        table.increments('id_employee').primary();
        table.string('fs_employee', 150).notNullable();
        table.string('sn_employee', 250).notNullable();
        table.string('nm_username', 16).unique().notNullable();
        table.string('pw_password', 16).notNullable();
        table.decimal('vl_salary', 10, 2).notNullable();
        table.string('ds_email', 200).unique().notNullable();
        table.date('dt_birth').notNullable();
        table.date('dt_admission').notNullable();
        table.string('aw_image');
        table.string('ds_genre', 1).notNullable();
        table.boolean('ds_active').notNullable();

        table.integer('id_office')
            .notNullable()
            .references('id_office')
            .inTable('tb_office')
        ;
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('tb_employees');
}