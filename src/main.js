import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'prismjs/themes/prism-coy.css';
import './assets/styles/layout.scss';
import './assets/demo/flags/flags.css';

import {createApp, reactive} from 'vue';
import router from './router';
import AppWrapper from './AppWrapper.vue';
import PrimeVue from 'primevue/config';
import AutoComplete from 'primevue/autocomplete';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Badge from 'primevue/badge';
import BadgeDirective from 'primevue/badgedirective';
import Button from 'primevue/button';
import Breadcrumb from 'primevue/breadcrumb';
import Calendar from 'primevue/calendar';
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';
import Chart from 'primevue/chart';
import Checkbox from 'primevue/checkbox';
import Chip from 'primevue/chip';
import Chips from 'primevue/chips';
import ColorPicker from 'primevue/colorpicker';
import Column from 'primevue/column';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmPopup from 'primevue/confirmpopup';
import ConfirmationService from 'primevue/confirmationservice';
import ContextMenu from 'primevue/contextmenu';
import DataTable from 'primevue/datatable';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import Dialog from 'primevue/dialog';
import Divider from 'primevue/divider';
import Dropdown from 'primevue/dropdown';
import Fieldset from 'primevue/fieldset';
import FileUpload from 'primevue/fileupload';
import Image from 'primevue/image';
import InlineMessage from 'primevue/inlinemessage';
import Inplace from 'primevue/inplace';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';
import Knob from 'primevue/knob';
import Galleria from 'primevue/galleria';
import Listbox from 'primevue/listbox';
import MegaMenu from 'primevue/megamenu';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import Message from 'primevue/message';
import MultiSelect from 'primevue/multiselect';
import OrderList from 'primevue/orderlist';
import OrganizationChart from 'primevue/organizationchart';
import OverlayPanel from 'primevue/overlaypanel';
import Paginator from 'primevue/paginator';
import Panel from 'primevue/panel';
import PanelMenu from 'primevue/panelmenu';
import Password from 'primevue/password';
import PickList from 'primevue/picklist';
import ProgressBar from 'primevue/progressbar';
import Rating from 'primevue/rating';
import RadioButton from 'primevue/radiobutton';
import Ripple from 'primevue/ripple';
import SelectButton from 'primevue/selectbutton';
import ScrollPanel from 'primevue/scrollpanel'
import ScrollTop from 'primevue/scrolltop';
import Slider from 'primevue/slider';
import Sidebar from 'primevue/sidebar';
import Skeleton from 'primevue/skeleton';
import SplitButton from 'primevue/splitbutton';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Steps from 'primevue/steps';
import StyleClass from 'primevue/styleclass';
import TabMenu from 'primevue/tabmenu';
import Tag from 'primevue/tag';
import TieredMenu from 'primevue/tieredmenu';
import Textarea from 'primevue/textarea';
import Timeline from 'primevue/timeline';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Toolbar from 'primevue/toolbar';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Tooltip from 'primevue/tooltip';
import ToggleButton from 'primevue/togglebutton';
import Tree from 'primevue/tree';
import TreeSelect from 'primevue/treeselect';
import TreeTable from 'primevue/treetable';
import TriStateCheckbox from 'primevue/tristatecheckbox';

import CodeHighlight from './AppCodeHighlight';
import BlockViewer from './BlockViewer';
import i18n from './language/i18n';
// import App from './App.vue'

// Vue.config.productionTip = flase;

// new Vue({
//     i18n,
//     render: h => h(App),
// }).mount('#app');

router.beforeEach(function(to, from, next) {
    window.scrollTo(0, 0);
    next();
});

const app = createApp(AppWrapper);


app.config.globalProperties.$appState = reactive({ theme: 'lara-light-indigo', darkTheme: false });

app.use(PrimeVue, { ripple: true, inputStyle: 'outlined' });
app.use(ConfirmationService);
app.use(ToastService);
app.use(router);
app.use(i18n);


app.directive('tooltip', Tooltip);
app.directive('ripple', Ripple);
app.directive('code', CodeHighlight);
app.directive('badge', BadgeDirective);
app.directive('styleclass', StyleClass);

app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('AutoComplete', AutoComplete);
app.component('Avatar', Avatar);
app.component('AvatarGroup', AvatarGroup);
app.component('Badge', Badge);
app.component('Breadcrumb', Breadcrumb);
app.component('Button', Button);
app.component('Calendar', Calendar);
app.component('Card', Card);
app.component('Carousel', Carousel);
app.component('Chart', Chart);
app.component('Checkbox', Checkbox);
app.component('Chip', Chip);
app.component('Chips', Chips);
app.component('ColorPicker', ColorPicker);
app.component('Column', Column);
app.component('ConfirmDialog', ConfirmDialog);
app.component('ConfirmPopup', ConfirmPopup);
app.component('ContextMenu', ContextMenu);
app.component('DataTable', DataTable);
app.component('DataView', DataView);
app.component('DataViewLayoutOptions', DataViewLayoutOptions);
app.component('Dialog', Dialog);
app.component('Divider', Divider);
app.component('Dropdown', Dropdown);
app.component('Fieldset', Fieldset);
app.component('FileUpload', FileUpload);
app.component('Image', Image);
app.component('InlineMessage', InlineMessage);
app.component('Inplace', Inplace);
app.component('InputMask', InputMask);
app.component('InputNumber', InputNumber);
app.component('InputSwitch', InputSwitch);
app.component('InputText', InputText);
app.component('Galleria', Galleria);
app.component('Knob', Knob);
app.component('Listbox', Listbox);
app.component('MegaMenu', MegaMenu);
app.component('Menu', Menu);
app.component('Menubar', Menubar);
app.component('Message', Message);
app.component('MultiSelect', MultiSelect);
app.component('OrderList', OrderList);
app.component('OrganizationChart', OrganizationChart);
app.component('OverlayPanel', OverlayPanel);
app.component('Paginator', Paginator);
app.component('Panel', Panel);
app.component('PanelMenu', PanelMenu);
app.component('Password', Password);
app.component('PickList', PickList);
app.component('ProgressBar', ProgressBar);
app.component('RadioButton', RadioButton);
app.component('Rating', Rating);
app.component('SelectButton', SelectButton);
app.component('ScrollPanel', ScrollPanel);
app.component('ScrollTop', ScrollTop);
app.component('Slider', Slider);
app.component('Sidebar', Sidebar);
app.component('Skeleton', Skeleton);
app.component('SplitButton', SplitButton);
app.component('Splitter', Splitter);
app.component('SplitterPanel', SplitterPanel);
app.component('Steps', Steps);
app.component('TabMenu', TabMenu);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('Tag', Tag);
app.component('Textarea', Textarea);
app.component('TieredMenu', TieredMenu);
app.component('Timeline', Timeline);
app.component('Toast', Toast);
app.component('Toolbar', Toolbar);
app.component('ToggleButton', ToggleButton);
app.component('Tree', Tree);
app.component('TreeSelect', TreeSelect);
app.component('TreeTable', TreeTable);
app.component('TriStateCheckbox', TriStateCheckbox);

app.component('BlockViewer', BlockViewer);



app.mount('#app');

// import 'primevue/resources/primevue.min.css';               //Style
// import 'primeflex/primeflex.css';                           //Style, icons.code
// import 'primeicons/primeicons.css';                         //Style
// import 'prismjs/themes/prism-coy.css'                       //Style, icons.code
// import './assets/styles/layout.scss';                       //Style
// import './assets/demo/flags/flags.css';
// import { createApp, reactive } from 'vue';                  //Chung
// import router from './router';                              //Chung
// import AppWrapper from './AppWrapper.vue';                  //Chung
// import PrimeVue from 'primevue/config';                     //Chung
// import AutoComplete from 'primevue/autocomplete';
// import InputText from 'primevue/inputtext';
// import Checkbox from 'primevue/checkbox';
// import Button from 'primevue/button';
// import Password from 'primevue/password';
//
// import TriStateCheckbox from 'primevue/tristatecheckbox';
// import CodeHighlight from './AppCodeHighlight';
// import Ripple from 'primevue/ripple';
// import Chip from 'primevue/chip';
// // import Chips from 'primevue/chips';
// import Timeline from 'primevue/timeline';
// import Badge from 'primevue/badge';
// import BadgeDirective from 'primevue/badgedirective';
// import Tag from 'primevue/tag';
// import Chips from 'primevue/chips';
// import Avatar from 'primevue/avatar';
// // import AvatarGroup from 'primevue/avatargroup';
// import Skeleton from 'primevue/skeleton';
// import Chart from 'primevue/chart';
// // import OrganizationChart from 'primevue/organizationchart';
// import FileUpload from 'primevue/fileupload';
// import InlineMessage from 'primevue/inlinemessage';
// import Breadcrumb from 'primevue/breadcrumb';
// import Menubar from 'primevue/menubar';
// import TabMenu from 'primevue/tabmenu';
// import Steps from 'primevue/steps';
// import TieredMenu from 'primevue/tieredmenu';                               //menu
// import Menu from 'primevue/menu';                                           //menu
// import MegaMenu from 'primevue/megamenu';
// import Toolbar from 'primevue/toolbar';
// import Accordion from 'primevue/accordion';
// import AccordionTab from 'primevue/accordiontab';
// import TabView from 'primevue/tabview';
// import TabPanel from 'primevue/tabpanel';
// import Panel from 'primevue/panel';
// import Fieldset from 'primevue/fieldset';
// import Card from 'primevue/card';
// import Divider from 'primevue/divider';
// import Splitter from 'primevue/splitter';
// import SplitterPanel from 'primevue/splitterpanel';
// import Tree from 'primevue/tree';
// import TreeSelect from 'primevue/treeselect';
// import TreeTable from 'primevue/treetable';
// import Column from 'primevue/column';
// import DataView from 'primevue/dataview';
// import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
// import Dropdown from 'primevue/dropdown';
// import PickList from 'primevue/picklist';
// import OrderList from 'primevue/orderlist';
// import DataTable from 'primevue/datatable';
// import SplitButton from 'primevue/splitbutton';
// import Sidebar from 'primevue/sidebar';
// import Tooltip from 'primevue/tooltip';                                     //Block     //Overlay
// import BlockViewer from './BlockViewer';                                    //Block
// import PanelMenu from 'primevue/panelmenu';                                 //Menu
// import Galleria from 'primevue/galleria';
// import Image from 'primevue/image';
// import Carousel from 'primevue/carousel';
// import Dialog from 'primevue/dialog';
// import OverlayPanel from 'primevue/overlaypanel';
// import ConfirmPopup from 'primevue/confirmpopup';
// import ConfirmationService from 'primevue/confirmationservice';
// import ToggleButton from 'primevue/togglebutton';
// import Calendar from 'primevue/calendar';
// import InputMask from 'primevue/inputmask';
// import InputNumber from 'primevue/inputnumber';
// import MultiSelect from 'primevue/multiselect';
// import Textarea from 'primevue/textarea';
//
// router.beforeEach(function(to, from, next) {
//     window.scrollTo(0, 0);
//     next();
// });
//
// const app = createApp(AppWrapper);
// app.config.globalProperties.$appState = reactive({ theme: 'lara-light-indigo', darkTheme: false });
// app.use(PrimeVue, { ripple: true, inputStyle: 'outlined' });
// app.use(ConfirmationService);                                 //overlay.comfirmation
// app.use(router);
// app.use(PrimeVue);
// app.mount('#app');                                 //Chung
// app.component('AutoComplete', AutoComplete);
// app.component('InputText', InputText);
// app.directive('code', CodeHighlight);                   //icons.hoghtlightcode
// app.component('Checkbox', Checkbox);
// app.component('Button', Button);
// app.component('Password', Password);
// app.component('TriStateCheckbox', TriStateCheckbox);
// // app.use(PrimeVue, { ripple: true, inputStyle: 'outlined' });
// app.directive('ripple', Ripple);
// app.component('Chip', Chip);
// app.component('Chips', Chips);
// app.component('Timeline', Timeline);
// app.component('Badge', Badge);
// app.directive('badge', BadgeDirective);
// app.component('Tag', Tag);
// app.component('Avatar', Avatar);
// // app.component('AvatarGroup', AvatarGroup);
// app.component('Skeleton', Skeleton);
// app.component('Chart', Chart);
// // app.component('OrganizationChart', OrganizationChart);
// app.component('FileUpload', FileUpload);
// app.component('InlineMessage', InlineMessage);
// app.component('Breadcrumb', Breadcrumb);
// app.component('Menubar', Menubar);
// app.component('TabMenu', TabMenu);
// app.component('Steps', Steps);
// app.component('TieredMenu', TieredMenu);
// app.component('Menu', Menu);
// app.component('MegaMenu', MegaMenu);
// app.component('Toolbar', Toolbar);
// app.component('Accordion', Accordion);
// app.component('AccordionTab', AccordionTab);
// app.component('TabView', TabView);
// app.component('TabPanel', TabPanel);
// app.component('Panel', Panel);
// app.component('Fieldset', Fieldset);
// app.component('Card', Card);
// app.component('Divider', Divider);
// app.component('Splitter', Splitter);
// app.component('SplitterPanel', SplitterPanel);
// app.component('Tree', Tree);
// app.component('TreeSelect', TreeSelect);
// app.component('TreeTable', TreeTable);
// app.component('Column', Column);
// app.component('DataView', DataView);
// app.component('DataViewLayoutOptions', DataViewLayoutOptions);
// app.component('Dropdown', Dropdown);
// app.component('PickList', PickList);
// app.component('OrderList', OrderList);
// app.component('DataTable', DataTable);
// app.component('SplitButton', SplitButton);
// app.component('Sidebar', Sidebar);
// app.component('BlockViewer', BlockViewer);
// app.component('PanelMenu', PanelMenu);                      //menu
// app.component('Galleria', Galleria);                        //media
// app.component('Image', Image);                              //media
// app.component('Carousel', Carousel);                        //media
// app.component('Dialog', Dialog);                            //overlay
// app.component('OverlayPanel', OverlayPanel);                //overlay
// app.component('ConfirmPopup', ConfirmPopup);                //overlay
// app.directive('tooltip', Tooltip);                          //overlay
// app.component('ToggleButton', ToggleButton);                //table
// app.component('Calendar', Calendar);                        //invalidstate
// app.component('InputMask', InputMask);                      //invalidstate
// app.component('InputNumber', InputNumber);                  //invalidstate
// app.component('MultiSelect', MultiSelect);                  //invalidstate
// app.component('Textarea', Textarea);                        //invalidstate

