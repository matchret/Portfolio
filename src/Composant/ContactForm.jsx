import {
	Button,
	TextField,
	PhoneNumberField,
	TextAreaField } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import {createSender} from '../graphql/mutations'
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import AnimationContact from './Animation/AnimationContact';
import CV from "./Pop-up/CV";

//const AnimationContact = lazy(() => import('./Animation/AnimationContact'));

//Backend Send Email tuto
//https://dev.to/mtliendo/serverless-contact-form-using-aws-amplify-1e9m

export const ContactForm = () => {
	const [t]= useTranslation('translation');  //Translation i18next			   
	const [OpenCV, setOpenCV] = useState(false)
	OpenCV?document.body.style.overflow = "hidden":document.body.style.overflow = "auto"

const handleFormSubmit = async(e) => {
    e.preventDefault()                             //IMPORTANT EMPECHE FONCTION DEFAULT
	const name = e.target.name.value
	const email = e.target.email.value
	const phone = e.target.phone_number.value
	const message = e.target.message.value
	

try{
	await API.graphql({
		query: createSender,
		variables: {
			input: {
				name,
				email,
				phone,
				message,
			},
		},
	})
	document.getElementById("form").reset();
	alert("Message sended!!!")
}catch(e){
	console.error('ERROR', e)
	alert("message fail!!!")
  }
}


    return (
    <section className="form-box" id="connect">
    <Container>
        <Row>
        <Col xs={12} md={5} xl={5}>
		<section>
			<h2>{t("Form.title")}</h2>
            <AnimationContact />
			<a onClick={() => setOpenCV(true)}>Curriculum Vitae</a>
		</section>
        </Col>

        <Col xs={12} md={7} xl={7}>
            <h3>{t("Form.form")}</h3>
            <form id="form" onSubmit={handleFormSubmit}>
				<TextField
					required
					label={t("Form.name")}
					name="name"
					placeholder={t("Form.firstlast")}
				/>
				<TextField
					label="Email"
					name="email"
					placeholder={t("Form.youemail")}
					type={'email'}
					required
				/>
				<PhoneNumberField
  					defaultDialCode="+1"
  			        label="Phone number"
					  name="phone_number"
  					placeholder="123-456-7890"
				/>
				<TextAreaField
					required
					label="Message"
					name="message"
					placeholder={t("Form.message")}
				/>

				<Button type="submit" variation="primary">
					{t("Form.send")}
				</Button>
			</form>
        </Col>
        </Row>
    </Container>
	<CV open={OpenCV} onClose={()=> setOpenCV(false)}/>
    </section>
    )
}
