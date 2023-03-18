import pandas as pd

data = pd.read_csv(r'f:\Documents\IIT\SEM2\SDGP\masf-CS24\masf-CS24\masf-back-end\user\AppleStore.csv')


data.rename(columns={'user_rating': 'ratings', 'prime_genre': 'catergory'}, inplace=True)


from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression 
from sklearn.metrics import mean_squared_error 

#cleaning columns
columns_to_drop = ['id', 'user_rating_ver', 'ver', 'ipadSc_urls.num', 'vpp_lic', 'ipadSc_urls.num']
data.drop(columns=columns_to_drop, inplace=True)


data.rename(columns={

    'track_name': 'appName',
    'size_bytes': 'size', 
    'rating_count_tot': 'noOfRatings', 
    'user_rating': 'ratings', 
    'cont_rating' : 'totalRating', 
    'sup_devices.num': 'supportedDevices' , 
    'lang.num' : 'noOfLanguages',
    'prime_genre': 'catergory'
    },
     
    inplace=True
    )

# Processing Data - Replacing with values
replace_dict = {'17+': 17, '9+': 9, '4+': 4, '12+': 12}
data['totalRating'] = data['totalRating'].replace(replace_dict)
# Convert column to float
data['totalRating'] = data['totalRating'].astype(float)

#defining target varibles - Only For Testing
target_variable = 'totalRating'

# Split data into training, validation, and test sets
train_data, test_data = train_test_split(data, test_size=0.2, random_state=42)
train_data, val_data = train_test_split(train_data, test_size=0.2, random_state=42)



# selecting what measure the target variable
features = ['ratings', 'size', 'noOfRatings','supportedDevices', 'noOfLanguages']
X_train = train_data[features]
y_train = train_data[target_variable]
X_val = val_data[features]
y_val = val_data[target_variable]
X_test = test_data[features]
y_test = test_data[target_variable]

model = LinearRegression()
model.fit(X_train, y_train)

#testing 
new_app = {
    'ratings': 3.5,
    'size': 65921024,
    'noOfRatings': 2974676,
    'supportedDevices': 3,
    'noOfLanguages': 7,
}

# Create new DataFrame with features of new mobile application
new_app = pd.DataFrame(new_app, index=[0])

# Make prediction on revenue of new mobile application
totalratings = model.predict(new_app)[0]

print(f"The predicted totalRatings of the new mobile application is +{totalratings:.2f}")