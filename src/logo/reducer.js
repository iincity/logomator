import * as actionTypes from './actionTypes';
import logoInspiration from '../assets/images/logo-inspirations/GunarBolf.png';

const defaultState = {
    companyName: '',
    tagline: '',
    industry: '',
    companyDescription: '',
    isFetching: false,
    icons: [],
    inspirations: [ // This data will fetched by an API call.
        {
            img: logoInspiration,
            isSelected: false,
            fontFamily: 'Foo Family'
        },
        {
            img: logoInspiration,
            isSelected: false,
            fontFamily: 'Bar Family'
        },
        {
            img: logoInspiration,
            isSelected: false,
            fontFamily: 'Bar Family'
        },
        {
            img: logoInspiration,
            isSelected: false,
            fontFamily: 'Bar Family'
        },
        {
            img: logoInspiration,
            isSelected: false,
            fontFamily: 'Bar Family'
        },
        {
            img: logoInspiration,
            isSelected: false,
            fontFamily: 'Bar Family'
        }

    ]
};

export function logoReducer (state, action) {
    switch (action.type) {

        case actionTypes.SET_COMPANY_NAME:
            return Object.assign({}, state, {
                companyName: action.name
            });

        case actionTypes.SET_TAGLINE_TEXT:
            return Object.assign({}, state, {
                tagline: action.tagline
            });

        case actionTypes.SET_INDUSTRY_NAME:
            return Object.assign({}, state, {
                industry: action.industry
            });

        case actionTypes.SET_COMPANY_DESCRIPTION:
            return Object.assign({}, state, {
                companyDescription: action.description
            });

        case actionTypes.REQUEST_ICONS:
            return Object.assign({}, state, {
                isFetching: true
            });

        case actionTypes.RECEIVE_ICONS:
            return Object.assign({}, state, {
                isFetching: false,
                icons: action.icons
            });

        default:
            return defaultState;
    }
}

export default logoReducer;