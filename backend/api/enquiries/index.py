from flask import Flask, request, jsonify
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
EMAIL_ADDRESS = os.getenv("EMAIL_ADDRESS")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")

def send_email(recipient_mail, subject, body):
    try:
        msg = MIMEMultipart()
        msg['From'] = EMAIL_ADDRESS
        msg["To"] = recipient_mail
        msg["Subject"] = subject

        msg.attach(MIMEText(body, 'plain'))

        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            server.sendmail(EMAIL_ADDRESS, recipient_mail, msg.as_string())

        print("Email sent successfully!")
        return True
    except Exception as e:
        print(f"Error sending mail: {e}")
        return False

@app.route('/api/enquiries', methods=['POST'])
def handle_enquiry():
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'email', 'phone', 'product_title', 'message']
        if not all(field in data for field in required_fields):
            return jsonify({"error": "Missing required fields"}), 400
        
        # Prepare email content
        recipient = "davfolio.participant@gmail.com"
        subject = f"New Enquiry for {data['product_title']}"
        body = f"""
        New product enquiry received:
        
        Name: {data['name']}
        Email: {data['email']}
        Phone: {data['phone']}
        Product: {data['product_title']}
        
        Message:
        {data['message']}
        """
        
        # Send email
        success = send_email(recipient, subject, body)
        
        if success:
            return jsonify({"message": "Enquiry submitted successfully"}), 200
        else:
            return jsonify({"error": "Failed to send email"}), 500
            
    except Exception as e:
        print(f"Error processing enquiry: {e}")
        return jsonify({"error": "Internal server error"}), 500

# This is needed for Vercel to discover your app
app = app