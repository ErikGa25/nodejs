const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('SELECT * FROM customer', (error, customers) => {
            if(error) {
                res.json(error);
            }
            console.log(customers);
            res.render('customers', {
                data: customers
            });
        });
    });
};

controller.save = (req, res) => {

};

module.exports = controller;