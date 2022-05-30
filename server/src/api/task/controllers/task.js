"use strict";

/**
 *  task controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::task.task", ({ strapi }) => ({
  // Method 3: Replacing a core action
  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.db.query("api::task.task").findOne({
      where: { slug },
    });
    const sanitizedEntity = await this.sanitizeOutput(entity);

    return this.transformResponse(sanitizedEntity);
  },
}));
