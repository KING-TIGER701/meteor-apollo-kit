import { Meteor } from 'meteor/meteor';
import extend from 'lodash/extend';

/**
 * @namespace Base
 * @summary In here we define common types and scalars used accross the app.
 */
const Base = {};

// Load client-side, both utilities
if (Meteor.isClient) {
  // TODO
}

// Load server-only utilities
if (Meteor.isServer) {
  import types from './server/types.graphql';
  import resolvers from './server/resolvers';

  extend(Base, { types, resolvers });
}

export default Base;
