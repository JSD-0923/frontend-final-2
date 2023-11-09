
export const RatingBoxStyle = {
    display: 'flex',
    alignItems: 'center',
    margin: '1rem',
    '@media (min-width: 320px) and (max-width: 768px)': {

    },
}

export const QuantityContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    margin: '1rem',
    '@media (min-width: 320px) and (max-width: 768px)': {
        margin: '0',
        gap: '5px',
    },
}

export const QuantityActionBoxStyle = {
    display:'flex',
    justifyContent:'space-around',
    marginTop: '4rem',
    maxWidth:'600px',
    '@media (min-width: 320px) and (max-width: 425px)': {
        marginTop: '2rem',
    },
}

export const QuantityActionButtonsStyle = {
    width: '11rem',
    '@media (min-width: 320px) and (max-width: 375px)': {
        width: '115px',
        fontSize: '20px',
    },
    '@media (min-width: 376px) and (max-width: 599px)': {
        width: '140px',
        fontSize: '20px',
    },
}