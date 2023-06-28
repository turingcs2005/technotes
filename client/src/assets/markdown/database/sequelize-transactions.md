# Sequelize Transactions
Unlike MongoDB where hierarchic data are often stored in a single document, a SQL database stores hierarchic data in 
multiple tables. While data are being saved to multiple tables, errors may occur, producing data stubs in a database (e.g. table 1 got saved but table 2 failed). 

Consequently, we should definitely configure Sequelize to use transactions.

The preferred transaction type is managed transactions, which uses automatic rollback.