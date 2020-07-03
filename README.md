## Description

This API contains patient data about COVID19 cases in Korea. The data was parsed from an excel file into the database from which it can be retreived using GET methods.

## Env

To get things working locally, in project root, create `.env` and add the following lines:

```bash
# port
PORT=3000

# db local
DATABASE_URL=postgres://rm:root@localhost:5432/covid19
```

**Note:** replace the variables below with your PostgreSQL user variables OR create the following in your PostgreSQL locally: 

```bash
rm - postgres username
root - postgres password
```

## Installation

```bash
$ npm install
$ npm run drop-db:local
```

## Running the app


```bash
$ npm run start:dev
```

## Data Source

[Kaggle](https://www.kaggle.com/kimjihoo/coronavirusdataset/data?select=PatientInfo.csv)

## License

  [MIT licensed](LICENSE).
