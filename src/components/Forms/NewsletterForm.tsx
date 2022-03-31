import * as yup from 'yup';

import { Button, Input, Text } from '../Ui';
import { SubmitHandler, useForm } from 'react-hook-form';

import { CSS } from '@stitches/react/types/css-util';
import { Email } from '../Ui/Icons';
import { hubspot } from '../../services/axios';
import { styled } from '../../styles/stitches.config';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

type NewsletterFormData = {
    email?: string;
};

const Form = styled('form');

const SuccessMessageStitches = styled('p', {
    position: 'relative',
    width: '100%',
    margin: 'auto',
    color: '$successColorStrong',
    backgroundColor: '$uiBackgroundBase',
    borderRadius: '$4',
    padding: '0 15px 0 46px',
    border: 'solid 1px $successColorStrong',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: '40px',
    '&:after': {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '40px',
        height: '100%',
        lineHeight: '47px',
        background: '$successColorStrong',
        content:
            'url(https://www.azion.com/static/images/icons/svg/icon-success.svg)'
    }
});

const newsletterFormSchema = yup.object().shape({
    email: yup.string().email('InvalidEmail').required('E-mail required')
});

export const NewsletterForm = (css: CSS) => {
    const [isSending, setIsSending] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(newsletterFormSchema)
    });

    const handleNewsletterSubmit: SubmitHandler<NewsletterFormData> = async (
        values
    ) => {
        try {
            setIsSending(true);
            const subscribeNewsletter = await hubspot.post(
                'submit/5759082/ef9973bd-9066-4ef9-93e1-0fd1393bf2be',
                {
                    fields: [
                        {
                            objectTypeId: '0-1',
                            name: 'email',
                            value: values.email
                        }
                    ],
                    context: {
                        pageUri: 'www.azion.com/en/blog/',
                        pageName: 'Blog'
                    }
                }
            );
            if (subscribeNewsletter.status === 200) {
                setIsSending(false);
                setSuccessMessage(subscribeNewsletter.data.inlineMessage);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return !successMessage ? (
        <Form
            onSubmit={handleSubmit(handleNewsletterSubmit)}
            css={{ alignItems: 'start', ...css }}
        >
            <>
                <Input
                    icon={<Email />}
                    name="email"
                    error={errors.email}
                    type="email"
                    placeholder="E-mail"
                    {...register('email')}
                />
                <Button primary={'light'} isLoading={isSending}>
                    Subscribe our newsletter
                </Button>
            </>
        </Form>
    ) : (
        <SuccessMessageStitches>{successMessage}</SuccessMessageStitches>
    );
};
