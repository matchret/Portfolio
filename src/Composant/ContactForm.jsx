import { ButtonGroup,
	Button,
	Flex,
	View,
	useTheme,
	TextField,
	TextAreaField,
	FieldGroupIcon } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import {createEmailMeassage} from "../graphql/mutations";
import { Col, Container, Row } from "react-bootstrap";
import AnimationContact from "./Animation/AnimationContact";

//Backend Send Email tuto
//https://dev.to/mtliendo/serverless-contact-form-using-aws-amplify-1e9m

export const ContactForm = () => {
	const { tokens } = useTheme()

const handleFormSubmit = async(e) => {
    ce.preventDefault()
		const name = e.target.name.value
		const email = e.target.email.value
		const message = e.target.message.value

		await API.graphql({
			query: createEmailMeassage,
			variables: {
				input: {
					name,
					email,
					message,
				},
			},
		})
}

    return (
    <section className="form-box" id="connect">
    <Container>
        <Row>
        <Col className="animation" size={12}>
            <AnimationContact />
        </Col>
        <Col>
            <h2>in Touch</h2>
            <form onSubmit={handleFormSubmit}>
							<TextField
								required
								label="Your Name"
								name="name"
								placeholder="Focus Otter"
							/>
							<TextField
								label="Email"
								name="email"
								placeholder="you@email.com"
								type={'email'}
								required

							/>
							<TextAreaField
								required
								label="Message"
								name="message"
								placeholder="Enter your message"
							/>
							<View style={{ marginTop: tokens.space.medium }}>
								<Button type="submit" variation="primary">
									Send Message
								</Button>
							</View>
						</form>
        </Col>
        </Row>
    </Container>
    </section>
    )
}