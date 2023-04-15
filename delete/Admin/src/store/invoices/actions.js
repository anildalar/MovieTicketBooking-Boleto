import {
  GET_INVOICES,
  GET_INVOICES_FAIL,
  GET_INVOICES_SUCCESS,
  GET_INVOICE_DETAIL,
  GET_INVOICE_DETAIL_FAIL,
  GET_INVOICE_DETAIL_SUCCESS,
  ADD_NEW_INVOICE,
  ADD_INVOICE_SUCCESS,
  ADD_INVOICE_FAIL,
  UPDATE_INVOICE,
  UPDATE_INVOICE_SUCCESS,
  UPDATE_INVOICE_FAIL,
  DELETE_INVOICE,
  DELETE_INVOICE_SUCCESS,
  DELETE_INVOICE_FAIL,
} from "./actionTypes"

export const getInvoices = () => ({
  type: GET_INVOICES,
})

export const getInvoicesSuccess = invoices => ({
  type: GET_INVOICES_SUCCESS,
  payload: invoices,
})

export const getInvoicesFail = error => ({
  type: GET_INVOICES_FAIL,
  payload: error,
})

export const addNewInvoice = invoice => ({
  type: ADD_NEW_INVOICE,
  payload: invoice,
})

export const addInvoiceSuccess = invoice => ({
  type: ADD_INVOICE_SUCCESS,
  payload: invoice,
})  

export const addInvoiceFail = error => ({
  type: ADD_INVOICE_FAIL,
  payload: error,
})

export const updateInvoice = invoice => ({
  type: UPDATE_INVOICE,
  payload: invoice,
})

export const updateInvoiceSuccess = invoice => ({
  type: UPDATE_INVOICE_SUCCESS,
  payload: invoice,
})

export const updateInvoiceFail = error => ({
  type: UPDATE_INVOICE_FAIL,
  payload: error,
})

export const deleteInvoice = invoice => ({
  type: DELETE_INVOICE,
  payload: invoice,
})

export const deleteInvoiceSuccess = invoice => ({
  type: DELETE_INVOICE_SUCCESS,
  payload: invoice,
})

export const deleteInvoiceFail = error => ({
  type: DELETE_INVOICE_FAIL,
  payload: error,
})

export const getInvoiceDetail = invoiceId => ({
  type: GET_INVOICE_DETAIL,
  invoiceId,
})

export const getInvoiceDetailSuccess = invoices => ({
  type: GET_INVOICE_DETAIL_SUCCESS,
  payload: invoices,
})

export const getInvoiceDetailFail = error => ({
  type: GET_INVOICE_DETAIL_FAIL,
  payload: error,
})
