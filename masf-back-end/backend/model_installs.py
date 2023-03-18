# -*- coding: utf-8 -*-
"""model_installs

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1l7DtMoqPpKVECxl6fagb3E5vwgi55d_z
"""

import pandas as pd
import numpy as np

data = pd.read_csv('googleplaystore.csv')

data.tail()
data.head()

columns_to_drop = ['Type', 'Content Rating', 'Genres','Last Updated','Current Ver','Android Ver']
data.drop(columns=columns_to_drop, inplace=True)
data.head()

# Rename columns in place >>>>>This code will already be exectued
data.rename(columns={'Size':'Size Bytes','Price':'Price Dollars'}, inplace=True)
data.head()

data['Price Dollars'] = data['Price Dollars'].astype(str)
data['Price Dollars'] = data['Price Dollars'].str.replace('$', '')
data['Price Dollars'] = data['Price Dollars'].replace('Everyone',np.nan)
print(data['Price Dollars'].dtype)
print(data['Price Dollars'])
data.tail()

data['Price Dollars'] = data['Price Dollars'].astype(float)

# Convert column to string
data['Installs'] = data['Installs'].astype(str)

# Remove "+" and "," characters from "Installs" column
data['Installs'] = data['Installs'].str.replace('+', '').str.replace(',', '')


# Replace "Free" values with NaN
data['Installs'] = data['Installs'].replace('Free', np.nan)



# Convert column to float
data['Installs'] = data['Installs'].astype(float)

# Drop rows with NaN values in "Installs" and "Price Dollars" columns
data.dropna(subset=['Installs'], inplace=True)
data.dropna(subset=['Price Dollars'], inplace=True)


# Check data type of column
print(data['Installs'].dtype)
print(data['Installs'])
data.tail()

import re

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

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression 
from sklearn.metrics import mean_squared_error 


#defining target varibles - Only For Testing
target_variable = 'Installs'

# Split data into training, validation, and test sets
train_data, test_data = train_test_split(data, test_size=0.2, random_state=42)
train_data, val_data = train_test_split(train_data, test_size=0.2, random_state=42)

# selecting what measure the target variable

features = ['Price Dollars','Rating', 'Reviews','Size Bytes']
X_train = train_data[features]
y_train = train_data[target_variable]
X_val = val_data[features]
y_val = val_data[target_variable]
X_test = test_data[features]
y_test = test_data[target_variable]

# Train a linear regression model
model = LinearRegression()
X_train = X_train.dropna()
y_train = y_train[X_train.index]  # Only keep the corresponding rows in y
model.fit(X_train, y_train)

new_app = {
    'Price Dollars':55,
    'Rating':3.5, 
    'Reviews':10,
    'Size Bytes':1126.4,
}

# Create new DataFrame with features of new mobile application
new_app = pd.DataFrame(new_app, index=[0])

# Make prediction on installs of new mobile application
Installs = model.predict(new_app)[0]

# Display predicted number of installs

print(f"The predicted installs of the new mobile application is +{Installs:.2f}")