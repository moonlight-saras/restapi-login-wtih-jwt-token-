# Client Monitoring Software Api

## Purpose

Api for Client Monitoring Application for web and mobile

## Installing

- Clone [this](/#) git library.
- Install [nodejs](https://nodejs.org)
- Open project folder in command line
  `$ cd /path/to/project`
- Run [npm](https://www.npmjs.com) to install all dependencies

  `$ [sudo] npm install`

- Run application by :  
   **1.** Using [nodemon](https://www.npmjs.com/package/nodemon)

        `$ [sudo] npm install -g nodemon`

        `$ nodemon`

---

# For Developers

#### **Config**

Exact config.js file has not been attached in this repo hence follow the following pattern to generate a config.js file.

```js
const mysql = require("mysql");

var dbConfigMySql = {
  host: "127.0.0.1",
  user: "root",
  password: "your-root-password",
  port: "3306",
  database: "your-database-name",
  connectionLimit: 15,
  queueLimit: 30,
  acquireTimeout: 1000000,
  multipleStatements: true,
};

exports.dbConfigMySql = dbConfigMySql;
var pool = mysql.createPool(dbConfigMySql);

exports.pool = pool;
```

#### **Status Codes**

    200 - Ok
    500 - Internal Server Error
    404 - File not found
    401 - Unauthorized
    403 - Forbidden
    ER_ROW_IS_REFERENCED_2 - Row is being used in other table
    ER_NO_REFERENCED_ROW_2 - Foreign key doesnot exist

#### Keep in mind

**For all requests (except login)**

[Header]
headerauth: [token]
Content-Type:application/x-www-form-urlencoded

## **App.js**

    - dbConfigMySql contains the details of the server which contains the database
    - limiter used to limit the number of requests from a single user
    - server runs on port 5555

## User

[_/api/user_](/routes/user.js)

Supported Method Types :

1.  _POST [body]_

    Purpose : Create new User

    Params to be passed in body :

        username : [string]
        email : [string]
        password : [string]
        firstName : [string]
        lastName : [string]
        roleId : [int]
        contact : [string]
        address : [string]
        panNo : [string]
        salary: [decimal]
        allowance: [decimal]
        dasaiAllowance:[decimal]

2.  _GET [query]_

    Purpose : Get list of User

    Params to be passed in query :

        userId : [int] (optional)

3.  _PATCH [body]_

    Purpose : Update existing User

    Params to be passed in query :

        userId : [int] (id of User to be updated)
        username : [string]
        email : [string]
        password : [string]
        firstName : [string]
        lastName : [string]
        roleId : [int]
        contact : [string]
        address : [string]
        panNo : [string]
        salary: [decimal]
        allowance: [decimal]
        dasaiAllowance:[decimal]

4.  _DELETE [params]_

    Purpose : Delete existing User

    Params to be passed in query :

        userId : [int] (id of User to be deleted)

## Client

[_/api/client_](/routes/client.js)

Supported Method Types :

1.  _POST [body]_

    Purpose : Create new Client

    Params to be passed in body :

        firstName : [string]
        lastName : [string]
        annualOcrReport : [string]
        registeredDate : [string]
        panNo : [string]
        contact : [string]
        address : [string]
        registeredWith : [string]
        registeredCapital : [string]
        irdPassword: [string]
        ocrEmail: [string]
        ocrPassword:[string]
        licenObtainFrom:[string]
        licenExpDate:[string]
        companyContactPersonName: [string]
        taxOfficeAddress: [string]
        taxClearance: [string]
        latestShareLagatDate: [date]
        boardMember: [string]
        issue: [string]
        vatDetail:[string]
        fullAuditAmount: [decimal]
        createdBy:[int]

2.  _GET [query]_

    Purpose : Get list of Client

    Params to be passed in query :

        clientId : [int] (optional)

3.  _PATCH [body]_

    Purpose : Update existing Client

    Params to be passed in query :

        clientId : [int] (id of Client to be updated)
        firstName : [string]
        lastName : [string]
        annualOcrReport : [string]
        registeredDate : [string]
        panNo : [string]
        contact : [string]
        address : [string]
        registeredWith : [string]
        registeredCapital : [string]
        irdPassword: [string]
        ocrEmail: [string]
        ocrPassword:[string]
        licenObtainFrom:[string]
        licenExpDate:[string]
        companyContactPersonName: [string]
        taxOfficeAddress: [string]
        taxClearance: [string]
        latestShareLagatDate: [date]
        boardMember: [string]
        issue: [string]
        vatDetail:[string]
        fullAuditAmount: [decimal]
        createdBy:[int]

4.  _DELETE [params]_

    Purpose : Delete existing Client

    Params to be passed in query :

        clientId : [int] (id of Client to be deleted)

## Transaction

[_/api/transaction_](/routes/transaction.js)

Supported Method Types :

1.  _POST [body]_

    Purpose : Create new Transaction

    Params to be passed in body :
    natureOfBussinessId: [int]
    companyName: [string]
    taxableSale: [decimal]
    exemptSale: [decimal]
    exportTransaction: [decimal]
    totalSales: [decimal]
    taxablePurchase: [decimal]
    exemptPurchase: [decimal]
    taxableImport: [decimal]
    exemptImport: [decimal]
    totalPurchase: [decimal]
    openingStock: [decimal]
    closingStock: [decimal]
    grossProfit: [decimal]
    grossLoss: [decimal]
    year: [int]
    month: [int]
    createdBy: [int]

2.  _GET [query]_

    Purpose : Get list of Transaction

    Params to be passed in query :

        transactionSheetsId : [int] (optional)

3.  _PATCH [body]_

    Purpose : Update existing Transaction

    Params to be passed in query :

        transactionSheetsId:[int] (id of Transaction to be updated)
        natureOfBussinessId: [int]
        companyName: [string]
        taxableSale: [decimal]
        exemptSale: [decimal]
        exportTransaction: [decimal]
        totalSales: [decimal]
        taxablePurchase: [decimal]
        exemptPurchase: [decimal]
        taxableImport: [decimal]
        exemptImport: [decimal]
        totalPurchase: [decimal]
        openingStock: [decimal]
        closingStock: [decimal]
        grossProfit: [decimal]
        grossLoss: [decimal]
        year: [int]
        month: [int]
        createdBy: [int]

4.  _DELETE [params]_

    Purpose : Delete existing Transaction

    Params to be passed in query :

        transactionSheetsId : [int] (id of Transaction to be deleted)

## OtherIncome

[_/api/otherIncome_](/routes/otherIncome.js)

Supported Method Types :

1.  _POST [body]_

    Purpose : Create new OtherIncome

    Params to be passed in body :

        interestIncome : [decimal]
        incentiveIncome: [decimal]
        other: [decimal]
        createdBy: [int]

2.  _GET [query]_

    Purpose : Get list of OtherIncome

    Params to be passed in query :

        otherIncomeId : [int] (optional)

3.  _PATCH [body]_

    Purpose : Update existing OtherIncome

    Params to be passed in query :

        otherIncomeId: [int] (id of OtherIncome to be updated)
        interestIncome : [decimal]
        incentiveIncome: [decimal]
        other: [decimal]
        createdBy: [int]

4.  _DELETE [params]_

    Purpose : Delete existing OtherIncome

    Params to be passed in query :

        otherIncomeId : [int] (id of OtherIncome to be deleted)

## OtherExpenses

[_/api/OtherExpenses_](/routes/OtherExpenses.js)

Supported Method Types :

1.  _POST [body]_

    Purpose : Create new OtherExpenses

    Params to be passed in body :

        salary: [decimal]
        rent: [decimal]
        advertisement: [decimal]
        stationary: [decimal]
        telephone: [decimal]
        waterElectricity: [decimal]
        staffWelfare: [decimal]
        internet: [decimal]
        depreciation: [decimal]
        travelling: [decimal]
        miscellaneous: [decimal]
        createdBy: [int]

2.  _GET [query]_

    Purpose : Get list of OtherExpenses

    Params to be passed in query :

        otherExpensesId : [int] (optional)

3.  _PATCH [body]_

    Purpose : Update existing OtherExpenses

    Params to be passed in query :

        otherExpensesId: [int] (id of OtherExpenses to be updated)
        salary: [decimal]
        rent: [decimal]
        advertisement: [decimal]
        stationary: [decimal]
        telephone: [decimal]
        waterElectricity: [decimal]
        staffWelfare: [decimal]
        internet: [decimal]
        depreciation: [decimal]
        travelling: [decimal]
        miscellaneous: [decimal]
        createdBy: [int]

4.  _DELETE [params]_

    Purpose : Delete existing OtherExpenses

    Params to be passed in query :

        otherExpensesId : [int] (id of OtheExpenses to be deleted)

## FixedAssetNote

[_/api/fixedAssets_](/routes/fixedAssetNote.js)

Supported Method Types :

1.  _POST [body]_

    Purpose : Create new fixedAssets

    Params to be passed in body :

        assetName: [string]
        assetCode: [string]
        location: [string]
        supplierName [string]
        amount: [decimal]
        purchaseDate: [date]
        createdBy: [int]

2.  _GET [query]_

    Purpose : Get list of fixedAssets

    Params to be passed in query :

        fixedAssetId : [int] (optional)

3.  _PATCH [body]_

    Purpose : Update existing fixedAssets

    Params to be passed in query :

        fixedAssetId: [int] (id of fixedAssets to be updated)
        assetName: [string]
        assetCode: [string]
        location: [string]
        supplierName [string]
        amount: [decimal]
        purchaseDate: [date]
        createdBy: [int]

4.  _DELETE [params]_

    Purpose : Delete existing fixedAssets

    Params to be passed in query :

        fixedAssetId : [int] (id of fixedAssets to be deleted)

## WorkingNotes

[_/api/workingNotes_](/routes/workingNotes_.js)

Supported Method Types :

1.  _POST [body]_

    Purpose : Create new workingNote

    Params to be passed in body :

        recentAssignmentByClient: [string]
        statusOfAssignment: [string]
        deadline: [date]
        pendingWorks: [string]
        assignStaff: [int]
        createdBy: [int]

2.  _GET [query]_

    Purpose : Get list of workingNote

    Params to be passed in query :

        workingNotesId : [int] (optional)

3.  _PATCH [body]_

    Purpose : Update existing workingNote

    Params to be passed in query :

        workingNotesId: [int] (id of workingNote to be updated)
        recentAssignmentByClient: [string]
        statusOfAssignment: [string]
        deadline: [date]
        pendingWorks: [string]
        assignStaff: [int]
        createdBy: [int]

4.  _DELETE [params]_

    Purpose : Delete existing workingNote

    Params to be passed in query :

        workingNotesId : [int] (id of workingNote to be deleted)

## NetProfit

[_/api/netProfit_](/routes/netProfit.js)

Supported Method Types :

1.  _POST [body]_

    Purpose : Create new netProfit

    Params to be passed in body :

        transactionSheetId: [int]
        otherExpensesId: [int]
        otherIncomeId: [int]
        netProfit: [int]
        createdBy: [int]

2.  _GET [query]_

    Purpose : Get list of netProfit

    Params to be passed in query :

        netProfitId : [int] (optional)

3.  _PATCH [body]_

    Purpose : Update existing netProfit

    Params to be passed in query :

        netProfitId: [int] (id of netProfit to be updated)
        transactionSheetId: [int]
        otherExpensesId: [int]
        otherIncomeId: [int]
        netProfit: [int]
        createdBy: [int]

4.  _DELETE [params]_

    Purpose : Delete existing netProfit

    Params to be passed in query :

        netProfitId : [int] (id of netProfit to be deleted)

## Report (Bargraph)

[_/api/bargraph_](/routes/bargraph.js)

Supported Method Types :

1.  _GET [query]_

    Purpose : Get list of bargraph

    Params to be passed in query :

        year : [int]
        month: [int]
