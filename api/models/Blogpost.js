/**
 * Blogpost.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    subject: {
      type: 'string',
      required: true
    },

    content: {
      type: 'text'
    },

    deletedAt: {
      type: 'datetime'
    },

    creator: {
      model: 'user'
    },
  }
};

