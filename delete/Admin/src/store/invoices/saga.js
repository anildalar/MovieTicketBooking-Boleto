import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import { 
  GET_INVOICES,
  GET_INVOICE_DETAIL,
  ADD_NEW_INVOICE,
  UPDATE_INVOICE,
  DELETE_INVOICE
 } from "./actionTypes"
import {
  getInvoicesSuccess,
  getInvoicesFail,
  getInvoiceDetailSuccess,
  getInvoiceDetailFail,
  addInvoiceSuccess,
  addInvoiceFail,
  updateInvoiceSuccess,
  updateInvoiceFail,
  deleteInvoiceSuccess,
  deleteInvoiceFail
} from "./actions"

//Include Both Helper File with needed methods
import { 
  getInvoices,
  getInvoiceDetail,
  addNewInvoice,
  updateInvoice,
  deleteInvoice,
 } from "../../helpers/fakebackend_helper"

function* fetchInvoices() {
  try {
    const response = yield call(getInvoices)
    yield put(getInvoicesSuccess(response))
  } catch (error) {
    yield put(getInvoicesFail(error))
  }
}

function* onUpdateInvoice ({payload: invoice }) {
  try {
    const response = yield call(updateInvoice, invoice);
    yield put(updateInvoiceSuccess(response));
  } catch (error) {
    yield put(updateInvoiceFail(error));
  }
}

function* onDeleteInvoice ({payload: invoice}) {
  try {
    const response = yield call(deleteInvoice, invoice);
    yield put(deleteInvoiceSuccess(response));
  } catch (error) {
    yield put(deleteInvoiceFail(error));
  }
}

function* onAddNewInvoice ({ payload: invoice}) {
  try {
    const response = yield call(addNewInvoice, invoice);
    yield put(addInvoiceSuccess(response));
  } catch (error) {
    yield put(addInvoiceFail(error));
  }
}

function* fetchInvoiceDetail({ invoiceId }) {
  try {
    const response = yield call(getInvoiceDetail, invoiceId)
    yield put(getInvoiceDetailSuccess(response))
  } catch (error) {
    yield put(getInvoiceDetailFail(error))
  }
}

function* invoiceSaga() {
  yield takeEvery(GET_INVOICES, fetchInvoices)
  yield takeEvery(GET_INVOICE_DETAIL, fetchInvoiceDetail)
  yield takeEvery(ADD_NEW_INVOICE, onAddNewInvoice);
  yield takeEvery(UPDATE_INVOICE, onUpdateInvoice);
  yield takeEvery(DELETE_INVOICE, onDeleteInvoice);
}

export default invoiceSaga
