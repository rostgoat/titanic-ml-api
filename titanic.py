import pandas as pd

df = pd.read_csv("titanic.csv")
df.drop(['PassengerId', 'Name', 'SibSp', 'Parch', 'Ticket', 'Cabin', 'Embarked'], axis='columns', inplace=True)
dummies = pd.get_dummies(df.Sex)
inputs = pd.concat([df, dummies], axis='columns')
inputs.drop('Sex', axis='columns', inplace=True)
inputs.Age = inputs.Age.fillna(inputs.Age.mean())
inputs.to_csv(r'titanic_modified.csv')