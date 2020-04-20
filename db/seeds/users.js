
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ecommerceaccounts').del()
    .then(function () {
      // Inserts seed entries
      return knex('ecommerceaccounts').insert([
        {email: 'tsi@tsi.com', username:'tsiyon', site:'http://ll.ll',password:'1234', user_id:'1'},
        {email: 'ori@ori.com', username:'oromia', site:'http://ll.ll',password:'1234', user_id:'2'},
        {email: 'samri@samri.com', username:'samri', site:'http://ll.ll',password:'1234', user_id:'3'}
        
      ]);
    });
};
