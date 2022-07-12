"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          email: "admin.waysbooks@mail.com",
          password:
            "$2b$10$7ovHDrtaMe.FmutXxEhnWOo7rDOdTloUMgqms5RXYmL5/4dfM.OTm", //123456
          name: "Admin",
          status: "admin",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {},
};
