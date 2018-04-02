import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import winston from 'winston';

export const RSVPs = new Mongo.Collection('rsvps');

Meteor.methods({
    'rsvp.insert'(name,phone,email,msg,attending, count) {
        const doc = {
            name: name,
            phone: phone,
            email: email,
            msg: msg,
            attending: attending,
            count: count,
        };
        winston.warn(doc);
        RSVPs.insert(doc);
    }
});
