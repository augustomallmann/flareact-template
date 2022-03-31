import { Box, Button, Col, Label } from '../Ui';
import { SearchButton, SearchForm } from './Search';

import { Burger } from './Burger';
import { Dropdown } from './Dropdown';
import { headerContent } from './content';
import { styled } from '../../styles/stitches.config';

export const MenuLink = styled('a', {
    zIndex: 2,
    display: 'block',
    marginRight: '2.56rem',
    color: '$white',
    fontSize: '1rem',
    lineHeight: '5.8125rem',
    borderBottom: ' solid 2px transparent',
    '&:last-child ': {
        marginRight: 'none'
    }
});

export const MenuLinkArrow = styled('svg', {
    marginLeft: '0.5rem',
    transition: 'all .4s ease',
    '& path': {
        fill: '$white'
    }
});

export const MenuList = styled('ul', {
    display: 'none',
    '@lg': {
        display: 'flex',
        justifyContent: 'space-between',
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
});

export const MenuListItem = styled('li', {
    position: 'inherit',
    transition: 'all 0.2s',
    '&::before': {
        display: 'none'
    },
    '&:hover': {
        [`& ${MenuLink}`]: {
            color: '$primaryColorBase',
            borderBottom: 'solid 2px $primaryColorBase'
        },
        ['& div']: {
            display: 'block',
            visibility: 'visible',
            opacity: '1'
        },
        '& svg': {
            transform: 'rotateZ(180deg) translateY(50%)',
            '& path': {
                fill: '$primaryColorBase'
            }
        }
    }
});

export const DropdownUl = styled('ul', {
    listStyle: 'none',
    padding: 0
});

export const DropdownLi = styled('li', {
    '&:last-of-type': {
        marginBottom: '4rem'
    }
});

export const DropdownGridStitches = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1.5fr) 2.5fr'
});

export const DropdownLink = styled('a', {
    fontSize: '1rem',
    lineHeight: '150%',
    transition: 'all .2s ease',
    color: '$gray700',
    variant: {
        category: {
            true: {
                fontWeight: '600'
            }
        }
    }
});

export const DropdownIconStitches = styled('img', {
    height: '24px',
    width: 'auto',
    verticalAlign: 'middle'
});

export const Highlight = styled('a', {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '4vw',
    backgroundColor: '$white',
    borderTop: '1px solid $uiBackgroundAlt',
    borderRight: '2px solid $uiBackgroundAlt',
    borderBottom: '1px solid $uiBackgroundAlt',
    borderLeft: '2px solid transparent',
    transition: 'all .2s ease',
    '&:hover': {
        borderLeft: '2px solid $primaryColorBase'
    }
});
export const HighlightLi = styled('li', {
    display: 'flex',
    alignItems: 'center'
});
export const HighlightIconWrap = styled('i', {
    display: 'flex',
    width: '5.5rem'
});
export const HighlightText = styled('div', {
    padding: '2.359375rem .5rem 2.03625rem',
    '& span': {
        fontSize: '1.25rem',
        lineHeight: '1.5rem',
        color: '$grey800'
    },
    '&:hover': {
        '& span': {
            color: '$primaryColorBase',
            fontWeight: '$medium'
        }
    }
});

export function Nav() {
    return (
        <>
            <Col
                as={'nav'}
                col={{ '@sm': 3, '@md': 8, '@lg': 18 }}
                css={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    '@lg': {
                        position: 'inherit',
                        justifyContent: 'space-between'
                    }
                }}
            >
                <MenuList>
                    {headerContent.head.nav.map(
                        ({ href, text, dropdown, highlights }, index) => (
                            <MenuListItem key={index}>
                                <MenuLink href={href} title={text}>
                                    {text}
                                    {dropdown && (
                                        <MenuLinkArrow
                                            width="11"
                                            height="7"
                                            viewBox="0 0 11 7"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M5.32947 4.36843L8.86501 0.832901C9.25553 0.442377 9.8887 0.442376 10.2792 0.832899C10.6697 1.22342 10.6697 1.85658 10.2792 2.24711L6.0377 6.48862C6.03733 6.489 6.03695 6.48937 6.03658 6.48975C5.64605 6.88027 5.01289 6.88028 4.62236 6.48975L0.379716 2.24712C-0.0108092 1.85659 -0.0108091 1.22343 0.379715 0.832903C0.77024 0.442377 1.40341 0.442376 1.79393 0.8329L5.32947 4.36843Z"
                                                fill="white"
                                            />
                                        </MenuLinkArrow>
                                    )}
                                </MenuLink>
                                {dropdown ? (
                                    <Dropdown>
                                        <DropdownGridStitches>
                                            {dropdown.map(
                                                (
                                                    { icon, links, title },
                                                    index
                                                ) => {
                                                    return (
                                                        <DropdownUl key={index}>
                                                            <li
                                                                style={{
                                                                    padding:
                                                                        '2rem 0'
                                                                }}
                                                            >
                                                                <Label
                                                                    css={{
                                                                        marginRight:
                                                                            '0.5rem'
                                                                    }}
                                                                    small
                                                                >
                                                                    {title}
                                                                </Label>
                                                                <i>
                                                                    <DropdownIconStitches
                                                                        src={`https://www.azion.com${icon}`}
                                                                        alt={
                                                                            title
                                                                        }
                                                                    />
                                                                </i>
                                                            </li>
                                                            {links.map(
                                                                (
                                                                    item,
                                                                    index
                                                                ) => (
                                                                    <DropdownLi
                                                                        style={{
                                                                            padding:
                                                                                '0.5rem 0'
                                                                        }}
                                                                        key={
                                                                            index
                                                                        }
                                                                    >
                                                                        <DropdownLink
                                                                            href={
                                                                                item.href
                                                                            }
                                                                            category={
                                                                                item.class
                                                                                    ? true
                                                                                    : false
                                                                            }
                                                                        >
                                                                            {
                                                                                item.text
                                                                            }
                                                                        </DropdownLink>
                                                                    </DropdownLi>
                                                                )
                                                            )}
                                                        </DropdownUl>
                                                    );
                                                }
                                            )}
                                            <DropdownUl
                                                css={{
                                                    display: 'grid',
                                                    gridTemplateRows:
                                                        'repeat(3, 1fr)'
                                                }}
                                            >
                                                {highlights.map(
                                                    (
                                                        { title, href, icon },
                                                        index
                                                    ) => (
                                                        <Highlight
                                                            href={href}
                                                            key={index}
                                                        >
                                                            <HighlightLi>
                                                                <HighlightIconWrap>
                                                                    <img
                                                                        src={`https://www.azion.com${icon}`}
                                                                        alt={
                                                                            title
                                                                        }
                                                                    />
                                                                </HighlightIconWrap>
                                                                <HighlightText>
                                                                    {title}
                                                                </HighlightText>
                                                            </HighlightLi>
                                                        </Highlight>
                                                    )
                                                )}
                                            </DropdownUl>
                                        </DropdownGridStitches>
                                    </Dropdown>
                                ) : null}
                            </MenuListItem>
                        )
                    )}
                </MenuList>
                <Box flex>
                    <MenuList>
                        {headerContent.head.navRight.map(
                            ({ href, text }, index) => (
                                <MenuListItem key={index}>
                                    <MenuLink href={href} title={text}>
                                        {text}
                                    </MenuLink>
                                </MenuListItem>
                            )
                        )}
                        {headerContent.head.buttons.map((btn, index) => (
                            <Button
                                secondary={'dark'}
                                arrow
                                key={index}
                                css={{ margin: 'auto' }}
                            >
                                {btn.text}
                            </Button>
                        ))}
                    </MenuList>
                    <SearchButton />
                </Box>
                <SearchForm />
                <Burger />
            </Col>
        </>
    );
}
