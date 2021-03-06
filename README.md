## Description

This API contains data about Titanic passengers. The data was parsed from an excel file into the database from which it can be retreived using GET methods.

## Env

To get things working locally, in project root, create `.env` and add the following lines:

```bash
# port
PORT=3000

# db local
DATABASE_URL=postgres://rm:root@localhost:5432/titanic
```

**Note:** replace the variables below with your PostgreSQL user variables OR create the following in your PostgreSQL locally: 

```bash
rm - postgres username
root - postgres password
```

## Installation

```bash
$ yarn
$ yarn db:drop-local
```

## Running the app


```bash
$ yarn start:dev
```

The above script will start the app and initialize the database models. After it runs, execute the following to add data into the database:

```bash
$ yarn db:import-excel
```

## Data Source

[Kaggle](https://www.kaggle.com/c/titanic/overview)

## Notes

- `titanic.py` parses the `titanic.csv` file from Kaggle and modifies all values to be number types.
- I ran `titanic.py` which exported a filed called `titanic_modified.csv` which is the file that the excel utility function imports.
- NaN age columns were provided the average of all ages in the dataset.

## License

  [MIT licensed](LICENSE).
