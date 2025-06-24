from flask import Flask, request, jsonify
from flask_cors import CORS

from transformers import pipeline, BertForSequenceClassification, BertTokenizerFast

# Load the model and tokenizer
# Model 1
# model_path = "../legal_document-classification-model"
# Model 2
model_path = "../legal_document_classification_model2"
model = BertForSequenceClassification.from_pretrained(model_path)
tokenizer = BertTokenizerFast.from_pretrained(model_path)
nlp = pipeline("sentiment-analysis", model=model, tokenizer=tokenizer)

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Define a route for the API
@app.route('/predict', methods=['POST'])
def predict():
    # Get the text input from the request
    data = request.get_json()
    # Extract JSON data and check if 'text' is present
    if 'text' not in data:
        return jsonify({'error': 'No text field provided'}), 400

    text = data['text']

    # Use the model to make a prediction
    try:
        prediction = nlp(text)
        label_value = prediction[0]['label']
        result = convert_label(label_value)
        return jsonify({'prediction': result}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

def convert_label(label_value):
    label_mapping = {
        "CA": "Contract Agreement",
        "RA": "Rent Agreement",
        "MoU": "Memorandum of Understanding",
        "PD": "Partnership Deed",
        "OT": "Inconclusive or Insufficient Info"
    }
    return label_mapping.get(label_value, "Unknown Label")

# Run the app
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
