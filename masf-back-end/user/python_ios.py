import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.neighbors import KNeighborsRegressor
from sklearn.metrics import r2_score, mean_absolute_error, mean_squared_error
import warnings

data = pd.read_csv('/Users/firefly0118/Documents/uni/L5 - second year/semester 1/SDGP/Implementation/masf-back-end/user/AppleStore.csv') 
columns_to_drop = ['id', 'currency', 'rating_count_tot','rating_count_ver','user_rating_ver','ver','cont_rating', 'sup_devices.num','ipadSc_urls.num','vpp_lic']
data.drop(columns=columns_to_drop, inplace=True)

# Rename columns in place >>>>>This code will already be exectued
data.rename(columns={'price':'price_dollars'}, inplace=True)
available_categories = data['prime_genre'].unique()

# encode categorical variables
encoder = LabelEncoder()
data['prime_genre'] = encoder.fit_transform(data['prime_genre'])

# select the relevant features and target variable
X = data[['size_bytes','price_dollars','prime_genre','lang.num']]
y = data['user_rating']

# select the relevant features and target variable
X = data[['size_bytes', 'price_dollars','prime_genre', 'lang.num']]
y = data['user_rating']

# split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# train the model on the training set
model = KNeighborsRegressor(n_neighbors=100)
model.fit(X_train, y_train)

# predict the target variable for the test set
y_pred = model.predict(X_test)

# calculate r2-score, mean absolute error, and root mean squared error
r2 = r2_score(y_test, y_pred)
mae = mean_absolute_error(y_test, y_pred)
rmse = np.sqrt(mean_squared_error(y_test, y_pred))


warnings.filterwarnings("ignore") # to avoid the printing of a warning which does not affect the code

# define the bins and labels
bins = [0, 1, 2, 3, 4, 5] # the bins are based on the rating scale from 1 to 5
labels = ['Low', 'Medium-Low', 'Medium', 'Medium-High', 'High']

# get user inputs
print("Available app genres are : ")
for i in available_categories:
    print(i)

while True:
  user_category = input('Enter the genre of the app : ')
  if user_category in available_categories:
     break
  else :
      print(f"{user_category} is not a valid genre. Please enter a valid genre.")

while True:
  try:
    price = float(input('Enter the price of the app in dollars : '))
    if price<0:
      raise ValueError
    break
  except ValueError:
    print("Price should be a positive number.Please enter a valid price")

while True:
  try:
    size = float(input('Enter the size of the app in bytes : '))
    if size<0:
      raise ValueError
    break
  except ValueError:
        print("Size should be a positive number.Please enter a valid size")

while True:
  try:
    lang_num = float(input('Enter the number of supported languages : '))
    if lang_num<0:
      raise ValueError
    break
  except ValueError:
        print("Language number should be a positive number.Please enter a valid number")

# encode user input category
user_category = encoder.transform([user_category])[0]

# predict the user rating
rating = model.predict([[size,price,user_category,lang_num]])[0]

# categorize the success rate
success_category = pd.cut([rating], bins=bins, labels=labels)[0]

# print the result
print(f"The predicted rating of the app will be around {rating}, which falls under the {success_category} success category.")