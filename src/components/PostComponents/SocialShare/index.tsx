import { Facebook, Linkedin, Twitter } from '../../ui/Icons';

import { CSS } from '@stitches/react';
import { CssGrid } from '../../Ui';
import { styled } from '../../../styles/stitches.config';

type SocialShareProps = {
    lang: string;
    slug: string;
    css?: CSS;
};

const StyledAnchor = styled('a', {
    cursor: 'pointer',
    '&:hover svg': {
        fill: '$primaryColorBase'
    }
});

export const SocialShare = ({ lang, slug, css }: SocialShareProps) => {
    return (
        <CssGrid
            flow={'column'}
            gapX={'1'}
            css={{
                '@mobile': {
                    margin: '$s15 -$s1',
                    padding: '0 $s1',
                    justifyContent: 'space-between'
                },
                '@md': {
                    width: 'max-content'
                },
                '@desktop': {
                    margin: '0 0 $s25'
                },
                ...css
            }}
        >
            <StyledAnchor
                href={`https://www.facebook.com/sharer.php?u=https://www.azion.com/${lang}/blog/${slug}`}
                target="_blank"
            >
                <Facebook color={'$iconColorActive'} size={'$5'} />
            </StyledAnchor>
            <StyledAnchor
                href={`https://twitter.com/intent/tweet?via=https://www.azion.com/${lang}/blog/${slug}`}
                target="_blank"
            >
                <Twitter
                    color={'$iconColorActive'}
                    size={'$5'}
                    css={{
                        ':hover': {
                            fill: '$primaryColorBase'
                        }
                    }}
                />
            </StyledAnchor>
            <StyledAnchor
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.azion.com/${lang}/blog/${slug}`}
                target="_blank"
            >
                <Linkedin
                    color={'$iconColorActive'}
                    size={'$5'}
                    css={{
                        ':hover': {
                            fill: '$primaryColorBase'
                        }
                    }}
                />
            </StyledAnchor>
        </CssGrid>
    );
};
