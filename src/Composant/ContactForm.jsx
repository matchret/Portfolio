import {
	Button,
	View,
	useTheme,
	TextField,
	TextAreaField } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import {createEmailMeassage} from "../graphql/mutations";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { lazy, Suspense, useState } from "react";
import AnimationContact from './Animation/AnimationContact';
import Coming from "./Pop-up/Coming";

//const AnimationContact = lazy(() => import('./Animation/AnimationContact'));

//Backend Send Email tuto
//https://dev.to/mtliendo/serverless-contact-form-using-aws-amplify-1e9m

export const ContactForm = () => {
	const [t]= useTranslation('translation');  //Translation i18next
	const { tokens } = useTheme()			   //Form
	const [OpenCV, setOpenCV] = useState(false)

const handleFormSubmit = async(e) => {
    e.preventDefault()                             //IMPORTANT EMPECHE FONCTION DEFAULT
		const name = e.target.name.value
		const email = e.target.email.value
		const message = e.target.message.value

		await API.graphql(graphqlOperation(createEmailMeassage, {input:{
			name,
			email,
			message,
		}}));
	}


    return (
    <section className="form-box" id="connect">
    <Container>
        <Row>
        <Col size={12}>
		<section>
			<h2>{t("Form.title")}</h2>
            <AnimationContact />
			<a onClick={()=> setOpenCV(true)}>Curriculum Vitae</a>
			<Coming open={OpenCV} onClose={()=> setOpenCV(false)}/>
		</section>
        </Col>
        <Col>
            <h3>{t("Form.form")}</h3>
            <form onSubmit={handleFormSubmit}>
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
							<TextAreaField
								required
								label="Message"
								name="message"
								placeholder={t("Form.message")}
							/>
							<View style={{ marginTop: tokens.space.medium }}>
								<Button type="submit" variation="primary">
								{t("Form.send")}
								</Button>
							</View>
						</form>
        </Col>
        </Row>
    </Container>
    </section>
    )
}