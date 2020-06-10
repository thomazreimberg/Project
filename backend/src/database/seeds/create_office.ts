import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('tb_office').insert([
        {ds_office: 'Manager'},
        {ds_office: 'Software Engineer'},
        {ds_office: 'UX/UI Designer'},
        {ds_office: 'Systems Analyst'}
    ]);
};