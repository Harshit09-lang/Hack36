from flask import Flask,render_template,request
import pickle
from matplotlib import image
import numpy as np
from keras.preprocessing.image import load_img
from keras.preprocessing.image import img_to_array


app=Flask(__name__)
model=pickle.load(open('model.pkl','rb'))

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/predict',methods=['POST'])
def predict():
    
    image=load_img(image_path,target_size=(224,224))
    
    pred=model.predict(image)



    return (pred)

if __name__ == "__main__":
       app.run(debug=True)