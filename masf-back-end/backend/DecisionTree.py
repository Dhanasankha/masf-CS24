import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Load the CSV file into a Pandas DataFrame
df = pd.read_csv("/Users/firefly0118/Documents/uni/L5 - second year/semester 1/SDGP/Implementation/masf-back-end/backend/googleplaystore.csv")

# Split the DataFrame into input features (X) and target variable (y)
X = df.drop("Installs", axis=1)  # Replace "target_variable_name" with the name of your target variable column
y = df["Installs"]  # Replace "target_variable_name" with the name of your target variable column

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Create a decision tree classifier object
clf = DecisionTreeClassifier()

# Train the model using the training data
clf.fit(X_train, y_train)

# Predict the class labels for the testing data
y_pred = clf.predict(X_test)

# Evaluate the accuracy of the model
accuracy = accuracy_score(y_test, y_pred)
print("Accuracy:", accuracy)
