import { Box, Text } from '../Ui';
import { ForwardRefRenderFunction, forwardRef } from 'react';

import { CSS } from '@stitches/react/types/css-util';
import { FieldError } from 'react-hook-form';
import { styled } from '../../styles/stitches.config';

const InputStyle = styled('input', {
    backgroundColor: '$uiBackgroundAlt',
    border: '1px solid transparent',
    borderRadius: '$2',
    padding: '14px $s1',
    width: '100%',
    fontSize: 'max(min(1vw, 1rem), 0.875rem)',
    transition: 'border-color 200ms ease-in-out',
    '&:hover': {
        borderColor: '$borderColorWeak'
    },
    lineHeight: '100%',
    '::placeholder': {
        color: '$textColorMedium'
    },
    variants: {
        withIcon: {
            true: {
                paddingLeft: '$s35',
                '& + svg': {
                    position: 'absolute',
                    width: '$3',
                    height: 'auto',
                    top: '50%',
                    left: '$s1',
                    transform: 'translateY(-50%)'
                }
            }
        }
    }
});

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    css?: CSS;
    placeholder?: string;
    error?: FieldError;
    icon?: JSX.Element;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    { placeholder, css, type, icon = undefined, error = null, ...rest },
    ref
) => {
    return (
        <Box className={'input-container'}>
            <Box position={'relative'} css={{ ...css }}>
                <InputStyle
                    type={type}
                    ref={ref}
                    placeholder={placeholder}
                    {...rest}
                    withIcon={!!icon}
                />
                {icon ?? icon}
            </Box>
            {error?.message && (
                <Text as={'spam'} small css={{ color: '$textColorMedium' }}>
                    {error.message}
                </Text>
            )}
        </Box>
    );
};

export const Input = forwardRef(InputBase);
