# Portfolio

![Portfolio Screenshot](https://www.mathieuchretien.com/assets/Portfolio-b18b4d6e.png)

Visit my website: [www.mathieuchretien.com](https://www.mathieuchretien.com)

This is my career portfolio built with React. I use AWS Amplify to host this website.

---

## Dependencies

### Frontend

- **@aws-amplify/ui-react**: `^5.0.4` *(Used for contact form input)*
- **aws-amplify**: `^5.3.3` *(AWS configuration)*
- **bootstrap**: `^5.3.0` *(CSS UI framework)*
- **i18next**: `^23.2.7` *(Translation framework and JSON file manager)*
- **lottie-react**: `^2.4.0` *(Animation framework)*
- **react**: `^18.2.0` *(React library)*
- **react-bootstrap**: `^2.8.0` *(UI framework)*
- **react-dom**: `^18.2.0` *(DOM rendering)*
- **react-i18next**: `^13.0.1` *(Translation framework and JSON file manager)*
- **react-lazy-load-image-component**: `^1.6.0` *(Lazy-load images with blur effect)*
- **react-pdf**: `^7.1.2` *(PDF reader framework)*

### Backend

- **aws-sdk**: `^2.1413.0` *(AWS services)*
- **nodemailer**: `^6.9.3` *(Simplifies email support with attachments)*

---

## Frontend Structure

All custom CSS is located in `App.css`.

### Main Components

- **NavBar**
- **Banner**
- **Skills**
- **Project**
- **ContactForm**
- **Footer**

### Modal Components

- **CV** (used in NavBar, ContactForm, Footer)
- **ESP** (used in Project)
- **Algo** (used in Project)
- **Portfolio** (used in Project)

### Animation Components

- **AnimationBanner** (Banner – Lottie animation)
- **AnimationContact** (ContactForm – Lottie animation)
- **TextBanner** (Banner – text animation)

**Note:** The animations in the NavBar and Footer use GIFs because Lottie was creating a DOM that was too large (over 12,000 elements).

---

## Backend

The only backend functionality required for my website is the contact form, which sends an email. This is implemented using a GraphQL mutation that triggers a Lambda function in AWS.

### GraphQL Schema

```graphql
type Sender @model @auth(rules: [{ allow: public, operations: [create] }]) {
  id: ID!
  name: String!
  email: String!
  phone: String!
  message: String!
}
```

### AWS Lambda Function
The following JavaScript function is triggered automatically when a GraphQL mutation is created. It uses AWS SES and Nodemailer to send an email with the contact form details.

```JavaScript
/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	SES_EMAIL
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const aws = require('aws-sdk');
const nodemailer = require('nodemailer');

const ses = new aws.SES()
let transporter = nodemailer.createTransport({SES: ses})

exports.handler = async(event) => {
  for (const streamedItem of event.Records) {
		if (streamedItem.eventName == 'INSERT') {
			//pull off items from stream
			const userName = streamedItem.dynamodb.NewImage.name.S
			const userEmail = streamedItem.dynamodb.NewImage.email.S
                        const userPhone = streamedItem.dynamodb.NewImage.phone.S
			const userMessage = streamedItem.dynamodb.NewImage.message.S


      try{
        const mailFormat = await transporter.sendMail({
          from: process.env.SES_EMAIL,
          to: process.env.SES_EMAIL,
          subject: 'Portfolio message ',
          html:`<p> Name: ${userName}<br /> Email: ${userEmail}<br /> Phone: ${userPhone}<br /> Message: ${userMessage}</p>`,
        })
        return mailFormat;
      } catch(e){
        console.error('ERROR', e)
      }
    }
  }
  return 'done';
}
```
> **Note:** The email used must be a verified address in AWS Simple Email Service (SES). (SES_EMAIL should be set to your chosen email address.)

## TO DO/FIX
- Improve the algorithm modal.
- Enhance the contact form UI (better alerts).
- Add email attachment support (requires an S3 bucket).
- Stop animations when they are off-screen.
