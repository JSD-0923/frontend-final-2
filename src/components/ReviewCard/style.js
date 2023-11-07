

export const MainReviewCardStyle = {

    Width: '290px',
    height: '290px',
    backgroundColor: 'primary.light',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '16px',
    position: 'relative',
    margin:'2rem',
    '@media (min-width: 320px) and (max-width: 375px)': {
        margin:'5px',
    },
    '@media (min-width: 376px) and (max-width: 425px)': {
        margin:'8px',
    },
    '@media (min-width: 426px) and (max-width: 768px)': {
        margin:'1rem',
    },
}

export const userInfoCardStyle = {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'centre',
    width: '75px',
    height: '75px',
    margin: '1rem',
    borderRadius: '8px',
    padding: '10px',
    position: 'absolute',
    top: '50%',
    left: '0',
}