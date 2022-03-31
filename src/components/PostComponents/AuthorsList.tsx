import * as Collapsible from '@radix-ui/react-collapsible';

import { Avatar, AvatarGroup, Box, Text } from '../Ui';
import { keyframes, styled } from '../../styles/stitches.config';

import { AuthorsListProps } from '../../types/post';

const open = keyframes({
    from: { height: 0 },
    to: { height: 'var(--radix-collapsible-content-height)' }
});

const close = keyframes({
    from: { height: 'var(--radix-collapsible-content-height)' },
    to: { height: 0 }
});

const CollapsibleContent = styled(Collapsible.Content, {
    overflow: 'hidden',
    '&[data-state="open"]': { animation: `${open} 300ms ease-out` },
    '&[data-state="closed"]': { animation: `${close} 300ms ease-out` },
    display: 'inline'
});

const CollapsibleTrigger = styled(Collapsible.Trigger, {
    background: 'transparent',
    border: '$none',
    color: '$textColorMedium',
    '& span': {
        textDecoration: 'underline'
    },
    '@desktop': {
        visibility: 'hidden',
        display: 'none'
    }
});

export const AuthorsList = ({ css, authors }: AuthorsListProps) => {
    return (
        <Box
            css={{
                '@desktop': { marginBottom: '$s5' },
                ...css
            }}
        >
            <Collapsible.Root
                defaultOpen={window.innerWidth >= 960 ? true : false}
            >
                <AvatarGroup
                    css={{
                        display: 'inline',
                        position: 'relative',
                        top: '5px',
                        marginRight: '$s05'
                    }}
                >
                    {authors.map((author, index) => (
                        <Avatar key={index} src={author.avatar} />
                    ))}
                </AvatarGroup>
                <Text as={'p'} margin={false} css={{ display: 'inline' }}>
                    Written by {authors[0].name} ({authors[0].role['en']})
                    {authors.length > 1 && (
                        <>
                            {window.innerWidth >= 960 ? ', and ' : ''}
                            <CollapsibleContent>
                                {authors
                                    .slice(1)
                                    .map(({ name, role }, index) => (
                                        <Text key={index} as={'span'}>
                                            {name} ({role['en']})
                                            {index < authors.length - 2
                                                ? ', and '
                                                : ''}
                                        </Text>
                                    ))}
                            </CollapsibleContent>
                            <CollapsibleTrigger>
                                <span>{authors.length - 1} more</span>.
                            </CollapsibleTrigger>
                        </>
                    )}
                </Text>
            </Collapsible.Root>
        </Box>
    );
};
