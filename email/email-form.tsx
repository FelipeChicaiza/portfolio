import React from 'react'
import { 
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Link,
    Preview,
    Section,
    Container,
    Text,
} from '@react-email/components'
import { Tailwind } from '@react-email/components'

type EmailFormProps = {
    message: string
    senderEmail: string
}

export default function EmailForm({message, senderEmail}: EmailFormProps) {
  return <Html>
    <Head>
    <Preview>New message from your portafolio site</Preview>
    <Tailwind>
            <Body>
                <Container>
                    <Section>
                        <Heading>You received a new message from your contact form
                        </Heading>
                        <Text>{message}</Text>
                        <Hr/>
                        <Text>The sender email is: {senderEmail}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Head>
  </Html>
}

