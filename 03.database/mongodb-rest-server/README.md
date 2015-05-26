# mongodb-rest-server

## Introduction
A rest service server that use mongodb as backend storage service

## MongoDB simple command line tutorial

To enter the mongodb command line

```
$ mongo
```

To list all the databases

```
$ show dbs
```

Before querying collections inside the database, you need to use it

```
$ use <database>
```
To query everything inside the collection

```
$ db.<collection>.find()
```
ex: db.products.find()

To insert a document into the collection

```
$ db.<collection>.insert(<JSON>)
```
ex: db.products.insert({name: 'iphone6', price: '25000TWD'})

To remove all documents matched in the collection

```
$ db.<collection>.remove(<query>, {justOnce: <boolean>, writeConcern: <document>})
```
ex: db.products.remove({name:'iphone6'})

To drop a database

```
$ use <database>
$ db.dropDatabase()
```

To drop a collection

```
$ db.<colleciton>.drop()
```
