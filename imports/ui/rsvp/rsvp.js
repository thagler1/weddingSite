import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Bert } from 'meteor/themeteorchef:bert';
import './rsvp.html';




Template.rsvpTemplate.events({
    'submit #rsvpform'(event) {
        // Prevent default browser form submit
        event.preventDefault();
        // Get value from form element
        const target = event.target;
        const name = target.name.value;
        const phone = target.phone.value;
        const email = target.email.value;
        const msg = target.msg.value;
        console.log("Client side " + phone);
        Meteor.call('rsvp.insert', name,phone,email,msg);
        Bert.alert("Your response has been entered successfully",'success',"fixed-bottom");
        target.name.value = "";
        target.phone.value = "";
        target.email.value = "";
        target.msg.value = "";
    },
});