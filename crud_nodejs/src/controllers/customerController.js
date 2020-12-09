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
    let data = req.body;

    req.getConnection((error, conn) => {
        conn.query('INSERT INTO customer set ?', [data], (error, customer) => {
            res.redirect('/');
        });
    });
};

controller.edit = (req, res) => {
    let {id} = req.params;

    req.getConnection((error, conn) => {
        conn.query('SELECT * FROM customer WHERE id = ?', [id], (error, customer) => {
            if(customer.length == 0){
                res.redirect('/');
            } else {
                res.render('customer_edit', {
                    data: customer[0] 
                });
            }
        });
    });
};

controller.update = (req, res) => {
    let {id} = req.params;
    let newCustomer = req.body;

    req.getConnection((error, conn) => {
        conn.query('UPDATE customer set ? WHERE id = ?', [newCustomer, id], (error, customer) => {
            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
    let {id} = req.params;

    req.getConnection((error, conn) => {
        conn.query('DELETE FROM customer WHERE id = ?', [id], (error, customer) => {
            res.redirect('/');
        });
    });
};

module.exports = controller;