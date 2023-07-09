/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	SES_EMAIL
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const aws = require('aws-sdk')

const ses = new aws.SES()

exports.handler = async(event) => {
  for (const streamedItem of event.Records) {
		if (streamedItem.eventName === 'INSERT') {
			//pull off items from stream
			const userName = streamedItem.dynamodb.NewImage.name.S
			const userEmail = streamedItem.dynamodb.NewImage.email.S
      const userPhone = streamedItem.dynamodb.NewImage.phone.S
			const userMessage = streamedItem.dynamodb.NewImage.message.S
      const userIdentity = streamedItem.dynamodb.NewImage.userIdentity.S

      try{
        const mailFormat = {
          from: process.env.SES_EMAIL,
          subject: 'Portfolio message ',
          html:`<p> Name:${userName} Email:${userEmail} Phone:${userPhone} Message:${userMessage} ${userIdentity}</p>`,
          to: process.env.SES_EMAIL,
        }
        await ses.sendEmail(mailFormat)

      } catch(e){
        console.error('ERROR', e)
      }
    }
  }
  
  return { status: 'done' };
}