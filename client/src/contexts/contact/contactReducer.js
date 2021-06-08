import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

export const contactReducer = (state, action) => {
    const { contacts } = state;
    switch(action.type) {

        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }

        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: contacts.map(contact => contact.id === action.payload.id ? action.payload: contact)
            }

        case DELETE_CONTACT:
            let newContacts = contacts.filter(contact => contact.id !== action.payload)
            return {
                ...state,
                contacts: newContacts
            }

        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }

        case CLEAR_CURRENT:
            return {
                ...state,
                current: action.payload
            }

        case FILTER_CONTACTS:
            return {
                ...state,
                filtered: state.contacts.filter(contact => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return contact.name.match(regex) || contact.email.match(regex);
                })
            }

        case CLEAR_FILTER:
            return {
                ...state,
                filtered: action.payload
            }

        default:
            return state;
    }
}