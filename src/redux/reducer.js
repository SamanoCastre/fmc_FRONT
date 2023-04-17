import { createSlice } from '@reduxjs/toolkit';
import { fmcValueActions } from './actions/fmc-values-actions';
import { commonActions } from './actions/common-actions';
import { carouselActions } from './actions/carousel-actions';
import { contentActions } from './actions/content-actions';
import { contactActions } from './actions/contact-actions';
import { visitorActions } from './actions/visitor-actions';
import { userActions } from './actions/user-actions';
import { modalActions } from './actions/modal-actions';

export const commonSlice = createSlice({
    name: "common_state",
    initialState: {
        onlineUser : null,
        visitedContents : [],
        page : "home",
        dropdownStatus : "close",
        menu : [],
    },
    reducers: commonActions
});

export const carouselSlice = createSlice({
    name: "carousel_state",
    initialState: {
        carouselItems : [],
    },
    reducers: carouselActions
});

export const fmcValueSlice = createSlice({
    name: "fmc_value_state",
    initialState: {
        fmcValues : []
    },
    reducers: fmcValueActions
});

export const contentSlice = createSlice({
    name: "content_state",
    initialState: {
        contents : []
    },
    reducers: contentActions
});

export const contactSlice = createSlice({
    name: "contact_state",
    initialState: {
        contacts : []
    },
    reducers: contactActions
});


export const visitorSlice = createSlice({
    name: "visitor_state",
    initialState: {
        visitors : []
    },
    reducers: visitorActions
});

export const userSlice = createSlice({
    name: "user_state",
    initialState: {
        users : []
    },
    reducers: userActions
});

export const modalSlice = createSlice({
    name: "modal_state",
    initialState: {
        title : null,
        content : null
    },
    reducers: modalActions
});

export const { setOnlineUser, setPage, setCurrentDashboardItem, closeDropdown, openDropdown, initMenu, updateMenu, setVisitedContent, resetCommons} = commonSlice.actions;
export const { initFmcValues, deleteFmcValue, updateFmcValue, addFmcValue, deleteListFmcValues, updateListFmcValues, addListFmcValues, updateFmcValues } = fmcValueSlice.actions;
export const { initCarousel, initCarouselImages, deleteCarousel, updateCarousel, addCarousel } = carouselSlice.actions;
export const { initContents, deleteContent, updateContent, addContent } = contentSlice.actions;
export const { initContacts, deleteContact, updateContact, addContact, resetContacts } = contactSlice.actions;
export const { initVisitors, deleteVisitor, updateVisitor, addVisitor } = visitorSlice.actions;
export const { initUsers, deleteUser, updateUser, addUser } = userSlice.actions;
export const { addTitle, addModalContent, initModal, resetModal} = modalSlice.actions;
//export const { setEmployee, openModal, closeModal } = employeeSlice.actions;