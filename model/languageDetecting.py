#importing required module
import sys
import joblib
import numpy as np

#loading save model and countvectorizer to transform our input to predict the language
model = joblib.load('./model/languageDetectingModel.pkl')
cv = joblib.load('./model/cv.pkl')


if len(sys.argv)>1:
  #accessing the input
  data = sys.argv[1]
  #returning output
  print(model.predict(cv.transform(np.array([data])))[0])
else:
  print("Please Give Input!!")