/**
 * CustomerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    //Returns "New Customer"
    'new': function (req, res) {
        res.view();
    },

    //Returns "Customer Addded" message
    created: function (req, res) {
        res.view();
    },

    //Returns "Delete Customer" page
    'delete': function(req, res){
        res.view()
    },
    
    //Searches Customer model and returns as an array of 'customers'
    list: function (req, res, next){
        Customer.find(function foundCustomers(err, customers){
            if(err) return next(err);

        res.view({ 
            customers: customers 
            });
        });
    },

    //Action to create new customer and return 'okay'
    create: function(req, res, next) {
        Customer.create( req.allParams(), function customerCreated(err, customer) {
            if(err) return next(err);

            res.redirect('customer/created')
        });
    },
    
    //Action to create new customer and return 'okay'
    destroy: function(req, res, next) {
        Customer.destroy( req.allParams(), function customerDeleted(err, customer) {
            if(err) return next(err);
            res.redirect('customer/deleted')
        });
    }
}
