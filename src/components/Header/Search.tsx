import { styled } from '../../styles/stitches.config';

const SearchButtonStyle = styled('button', {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: 'none',
    paddingTop: 0,
    paddingLeft: '14px',
    paddingRight: 0,
    paddingBottom: 0,
    '@md': {
        paddingRight: '$s1'
    }
});

const SearchIcon = styled('svg', {
    fill: '$white',
    cursor: 'pointer',
    '&:hover': {
        fill: '$primaryColorBase'
    }
});

const SearchFormStyle = styled('form', {
    display: 'none'
});

export const SearchButton = () => {
    return (
        <SearchButtonStyle
            aria-label="Search"
            className="btn btn-tertiary-dark btn-search"
        >
            <SearchIcon
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.3905 12.5786H14.2939L20 18.2962L18.2962 20L12.5786 14.2939V13.3905L12.2699 13.0703C10.9663 14.191 9.27387 14.8656 7.43282 14.8656C3.32762 14.8656 0 11.538 0 7.43282C0 3.32762 3.32762 0 7.43282 0C11.538 0 14.8656 3.32762 14.8656 7.43282C14.8656 9.27387 14.191 10.9663 13.0703 12.2699L13.3905 12.5786ZM2.2869 7.43305C2.2869 10.2804 4.58536 12.5788 7.4327 12.5788C10.28 12.5788 12.5785 10.2804 12.5785 7.43305C12.5785 4.5857 10.28 2.28725 7.4327 2.28725C4.58536 2.28725 2.2869 4.5857 2.2869 7.43305Z"
                />
            </SearchIcon>
        </SearchButtonStyle>
    );
};

export const SearchForm = () => {
    return (
        <SearchFormStyle action="{% tl search-result %}">
            <div className="wrap-input input-transparent">
                <input
                    type="text"
                    name="q"
                    id="searchHeaderInput"
                    required
                    placeholder="{{ site.data.menu.[site.lang].form.placeholder }}"
                />
            </div>
        </SearchFormStyle>
    );
};
