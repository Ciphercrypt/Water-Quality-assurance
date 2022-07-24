import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import pickle
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from sklearn.naive_bayes import GaussianNB
from sklearn.neighbors import KNeighborsClassifier
from sklearn.ensemble import RandomForestClassifier

df1 = pd.read_csv(r'D:\avi\webdev\node-react\water\ML\data\water_potability.csv')

df=df1.drop(['Hardness','Solids','Chloramines','Sulfate','Organic_carbon','Trihalomethanes'],axis=1)


ph_mean = df[df['Potability'] == 0]['ph'].mean(skipna=True)
df.loc[(df['Potability'] == 0) & (df['ph'].isna()), 'ph'] = ph_mean



ph_mean_1 = df[df['Potability'] == 1]['ph'].mean(skipna=True)
df.loc[(df['Potability'] == 1) & (df['ph'].isna()), 'ph'] = ph_mean_1


X = df.iloc[:, :-1]
Y = df.iloc[:, -1]

X_train, X_test, y_train, y_test = train_test_split(X, Y, test_size=0.15, random_state=0)

sc = StandardScaler()
X_train = sc.fit_transform(X_train)
X_test = sc.transform(X_test)



model=RandomForestClassifier()
model.fit(X_train,y_train)
pred=model.predict(X_test)
print(accuracy_score(y_test, pred))
pickle.dump(model, open('model.pkl','wb'))

model1 = pickle.load(open('D:/avi/webdev/node-react/water/model.pkl','rb'))
pred=model1.predict([[ 5.126763,	402.883113,	4.708658	]])
print(pred)

pred=model.predict([[ 5.126763,	402.883113,	4.708658		]])
print(pred)