import ToastEventBus from 'primevue/toasteventbus';
import {ToastSeverity} from "primevue/api";
import i18n from "../i18n";

const {t} = i18n.global;

export function toastInfo({title = t("result.title.info"), message, life = 3000}) {
    ToastEventBus.emit('add', {severity: ToastSeverity.INFO, summary: title, detail: message, life})
};

export function toastError({
                               title = t("result.title.error"),
                               message = t("result.message.somethingWrong"),
                               life = 3000
                           }) {
    ToastEventBus.emit('add', {severity: ToastSeverity.ERROR, summary: title, detail: message, life})
};

export function toastWarn({title = t("result.title.warn"), message, life = 3000}) {
    ToastEventBus.emit('add', {severity: ToastSeverity.WARN, summary: title, detail: message, life})
};

export function toastSuccess({title = t("result.title.success"), message = t("result.message.success"), life = 3000}) {
    ToastEventBus.emit('add', {severity: ToastSeverity.SUCCESS, summary: title, detail: message, life})
};