import { contactService } from "../../services/contact.service"
import { REMOVE_CONTACT, SET_FILTER_BY, SET_CONTACTS, GET_CONTACT, UPDATE_CONTACT } from "../reducers/contact.reducer"

export function loadContacts() {
    return async (dispatch, getState) => {
        try {
            const contacts = await contactService.getContacts(getState().contactModule.filterBy)
            const action = {
                type: SET_CONTACTS,
                contacts
            }
            dispatch(action)
        } catch (error) {
            console.log('error:', error)
        }
    }
}

export function loadContact(contactId) {
    return async (dispatch, getState) => {
        try {
            const contact = await contactService.getContactById(contactId)
            const action = {
                type: GET_CONTACT,
                contact
            }
            dispatch(action)
            return contact
        } catch (error) {
            console.log('error:', error)
        }
    }
}
export function saveCurrContact(contactToSave) {
    return async (dispatch, getState) => {
        try {
            const contact = await contactService.saveContact(contactToSave)
            const action = {
                type: UPDATE_CONTACT,
                contact
            }
            dispatch(action)
        } catch (error) {
            console.log('error:', error)
        }
    }
}

export function removeContact(contactId) {
    return async (dispatch) => {
        try {
            await contactService.deleteContact(contactId)
            const action = { type: REMOVE_CONTACT, contactId }
            dispatch(action)
            return 'Removed!'
        } catch (error) {
            console.log('error:', error)
        }
    }
}

export function setFilterBy(filterBy) {
    return (dispatch) => {
        dispatch({ type: SET_FILTER_BY, filterBy })
    }
}