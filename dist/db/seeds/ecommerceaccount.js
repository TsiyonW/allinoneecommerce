"use strict";
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function () {
        // Inserts seed entries
        return knex('users').insert([
            { phoneNo: '09222222222' },
            { phoneNo: '0922222222' },
            { phoneNo: '0922222222' }
        ]);
    });
};
