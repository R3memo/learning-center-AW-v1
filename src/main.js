import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import PrimeVue from 'primevue/config';
import Material from '@primeuix/themes/material';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import {
    Button,
    Card,
    Checkbox,
    Column,
    ConfirmationService,
    ConfirmDialog, DataTable, Dialog,
    DialogService,
    Drawer, FileUpload, FloatLabel, IconField, InputIcon, InputNumber, Menu, Rating, Row, Select, SelectButton, Tag,
    Textarea, Toast,
    ToastService, Toolbar, Tooltip
} from "primevue";
import i18n from "./i18n.js";
import router from "./router.js";

createApp(App)
    .use(router)
    .use(i18n)
    .use(PrimeVue, { theme: { preset: Material},ripple:true})
    .use(ConfirmationService)
    .use(DialogService)
    .use(ToastService)
    .component( 'pv-button', Button)
    .component('pv-card', Card)
    .component('pv-column', Column)
    .component( 'pv-confirm-dialog', ConfirmDialog)
    .component('pv-checkbox', Checkbox)
    .component('pv-data-table', DataTable)
    .component('pv-dialog', Dialog)
    .component('pv-drawer', Drawer)
    .component('pv-file-upload', FileUpload)
    .component('pv-float-field',FloatLabel)
    .component('pv-icon-field', IconField)
    .component('pv-input-icon', InputIcon)
    .component('pv-input-number', InputNumber)
    .component('pv-menu', Menu)
    .component('pv-rating', Rating)
    .component('pv-row', Row)
    .component('pv-select', Select)
    .component('pv-select-button', SelectButton)
    .component('pv-tag',Tag)
    .component('pv-textarea', Textarea)
    .component('pv-toolbar', Toolbar)
    .component('pv-toast', Toast)
    .component('tooltip', Tooltip)
    .mount('#app')
