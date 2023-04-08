import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
import re
from sklearn.neighbors import KNeighborsRegressor
from sklearn.metrics import r2_score, mean_absolute_error, mean_squared_error
import warnings


data = pd.read_csv('/Users/firefly0118/Documents/uni/L5 - second year/semester 1/SDGP/Implementation/masf-back-end/user/googleplaystore.csv') 

columns_to_drop = ['Type', 'Content Rating', 'Genres','Last Updated','Current Ver','Android Ver', 'Rating','Reviews']
data.drop(columns=columns_to_drop, inplace=True)

# Rename columns in place >>>>>This code will already be exectued
data.rename(columns={'Size':'Size Bytes','Price':'Price Dollars'}, inplace=True)
data['Price Dollars'] = data['Price Dollars'].astype(str)
data['Price Dollars'] = data['Price Dollars'].str.replace('$', '')
data['Price Dollars'] = data['Price Dollars'].replace('Everyone',np.nan)
print(data['Price Dollars'].dtype)
print(data['Price Dollars'])
data['Price Dollars'] = data['Price Dollars'].astype(float)

# Convert column to string
data['Installs'] = data['Installs'].astype(str)

# Remove "+" and "," characters from "Installs" column
data['Installs'] = data['Installs'].str.replace('+', '').str.replace(',', '')

# Replace "Free" values with NaN
data['Installs'] = data['Installs'].replace('Free', np.nan)

# Convert column to float
data['Installs'] = data['Installs'].astype(float)
# Drop rows with NaN aka not a number values in "Installs" and "Price Dollars" columns
data.dropna(subset=['Installs'], inplace=True)
data.dropna(subset=['Price Dollars'], inplace=True)



# Define a function to convert size to bytes
def convert_size(size_str):
    if size_str == 'Varies with device':
        return np.nan

    size, unit = re.match(r"^([\d\.]+)([a-zA-Z]*)$", size_str).groups()
    size = float(size)

    if unit == 'K':
        return size * 1024
    elif unit == 'M':
        return size * 1024 * 1024
    elif unit == 'G':
        return size * 1024 * 1024 * 1024
    else:
        return size

# Apply the conversion function to the 'Size Bytes' column
data['Size Bytes'] = data['Size Bytes'].apply(convert_size)

# Drop rows with missing values in the 'Size Bytes' column
data = data.dropna(subset=['Size Bytes'])

available_categories = data['Category'].unique()

# encode categorical variables
encoder = LabelEncoder()
data['Category'] = encoder.fit_transform(data['Category'])


# select the relevant features and target variable
X = data[['Category','Size Bytes', 'Price Dollars']]
y = data['Installs']

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

print(f"The r2-score of the model is {r2:.2f}")
print(f"The mean absolute error of the model is {mae:.2f}")
print(f"The root mean squared error of the model is {rmse:.2f}")