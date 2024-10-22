'use strict';

/**
 * authorized-person service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::authorized-person.authorized-person');
