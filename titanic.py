import pandas as pd

df = pd.read_csv("titanic.csv")
df.drop(['PassengerId', 'Name', 'SibSp', 'Parch', 'Ticket', 'Cabin', 'Embarked'], axis='columns', inplace=True)
target = df.Survived
inputs = df.drop('Survived', axis='columns')
dummies = pd.get_dummies(inputs.Sex)
inputs = pd.concat([inputs, dummies], axis='columns')
inputs.drop('Sex', axis='columns', inplace=True)
inputs.Age = inputs.Age.fillna(inputs.Age.mean())
inputs.to_csv(r'titanic_modified.csv')