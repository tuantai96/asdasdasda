<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <div class="content">
            <Accordion  class="mb-4">
              <AccordionTab :header="t('advancedSearch')">
                  <div class="p-fluid">
                    <div class="formgrid grid">
                      <div class="field col">
                        <label for="searchUsername">{{ this.$t("user.properties.username") }}</label>
                        <inputText id="searchUsername" type="text"/>
                      </div>
                      <div class="field col">
                        <label for="fullname">{{ this.$t("user.properties.fullname") }}</label>
                        <inputText id="fullname" type="text"/>
                      </div>
                    </div>
                    <div class="formgrid grid">
                      <div class="field col">
                        <label for="email">{{ this.$t("user.properties.email") }}</label>
                        <inputText id="email" type="text"/>
                      </div>
                      <div class="field col">
                        <label for="searchStatus">{{ this.$t("user.properties.status") }}</label>
                        <Dropdown
                            id="searchStatus"
                            v-model="statusOption"
                            optionLabel="status"
                            :options="statusOptions"
                            :placeholder="t('select')"></Dropdown>
                      </div>
                    </div>
                  </div>
                  <div class="grid justify-content-center mt-5">
                    <Button type="button" @click="filters['global'].value" class="ml-3" :label="t('search')" icon="pi pi-search"/>
                  </div>
              </AccordionTab>
            </Accordion>
          <Toast/>
          <Toolbar class="mb-4">
            <template v-slot:start>
              <div class="my-2">
                <Button :label="t('create')" icon="pi pi-plus" class="p-button-success mr-2" @click="openNew" />
                <Button :label="t('delete')" icon="pi pi-trash" class="p-button-danger" @click="confirmDeleteSelected" :disabled="!selectedUsers || !selectedUsers.length" />
              </div>
            </template>

            <template v-slot:end>
              <FileUpload :label="t('import')" mode="basic" accept="image/*" :maxFileSize="1000000" chooseLabel="Import" class="mr-2 inline-block" />
              <Button type="button" :label="t('export')" icon="pi pi-upload" class="p-button-help" @click="exportCSV($event)"  />
            </template>
          </Toolbar>
          </div>

        <DataTable ref="dt" :value="users" v-model:selection="selectedUsers" dataKey="id" :paginator="true" :rows="10" :filters="filters"
                   paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                   currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" responsiveLayout="scroll">
          <template #header>
            <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
              <h5 class="m-0">{{ $t('components.UserManagement') }}</h5>
              <span class="block mt-2 md:mt-0 p-input-icon-left">
                                <i class="pi pi-search" />
                                <InputText v-model="filters['global'].value" placeholder="Search..." />
                            </span>
            </div>
          </template>
          <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
          <Column field="fullname" :header="t('user.properties.fullname')" :sortable="true" headerStyle="min-width:12rem;">
            <template #body="slotProps">
              <span class="p-column-title">fullname</span>
              {{slotProps.data.fullname}}
            </template>
          </Column>
          <Column field="username" :header="t('user.properties.username')" :sortable="true" headerStyle="min-width:12rem;">
            <template #body="slotProps">
              <span class="p-column-title">username</span>
              {{slotProps.data.username}}
            </template>
          </Column>
          <Column field="email" :header="t('user.properties.email')" :sortable="true" headerStyle="min-width:12rem;">
            <template #body="slotProps">
              <span class="p-column-title">email</span>
              {{formatCurrency(slotProps.data.email)}}
            </template>
          </Column>
          <Column field="status" :header="t('user.properties.status')" :sortable="true" headerStyle="min-width:8rem;">
            <template #body="slotProps">
              <span class="p-column-title">Status</span>
              {{slotProps.data.status}}
            </template>
          </Column>
          <Column headerStyle="min-width:4rem;">
            <template #body="slotProps">
              <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" @click="editUser(slotProps.data)" />
              <Button icon="pi pi-trash" class="p-button-rounded p-button-warning mt-2" @click="confirmDeleteUser(slotProps.data)" />
            </template>
          </Column>
        </DataTable>

        <!--        Sua-->
        <Dialog v-model:visible="userDialog" :style="{width: '450px'}" :header="t('userDetail.userInformation')" :modal="true" class="p-fluid">
          <!--          <img :src="'images/product/' + product.image" :alt="product.image" v-if="product.image" width="150" class="mt-0 mx-auto mb-5 block shadow-2" />-->
          <div class="field">
            <label for="fullname">{{ this.$t('user.properties.fullname') }}</label>
            <InputText id="fullname" v-model.trim="user.fullname" required="true" />
          </div>
          <div class="field">
            <label for="username">{{ this.$t('user.properties.username') }}</label>
            <InputText id="username" v-model.trim="user.username" required="true" />
          </div>
          <div class="formgrid grid">
            <div class="field col">
              <label for="email">{{ this.$t('user.properties.email') }}</label>
              <InputText id="email" v-model.trim="user.email" />
            </div>
          </div>
          <div class="field">
            <label for="status" class="mb-3">{{ this.$t('user.properties.status') }}</label>
            <Dropdown id="status" v-model="statusOption" :options="statusOptions" optionLabel="status" placeholder="Select a Status">
            </Dropdown>
          </div>
          <template #footer>
            <Button :label="t('cancel')" icon="pi pi-times" class="p-button-text" @click="hideDialog"/>
            <Button :label="t('save')" icon="pi pi-check" class="p-button-text" @click="saveUser" />
          </template>
        </Dialog>

        <!--        Xoa-->
        <Dialog v-model:visible="deleteUserDialog" :style="{width: '450px'}" :header="t('confirm')" :modal="true">
          <div class="flex align-items-center justify-content-center">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
            <span v-if="user">{{ this.$t('userDelete.thisUserDelete') }}<b>{{user.name}}</b>?</span>
          </div>
          <template #footer>
            <Button :label="t('no')" icon="pi pi-times" class="p-button-text" @click="deleteUserDialog = false"/>
            <Button :label="t('yes')" icon="pi pi-check" class="p-button-text" @click="deleteUser" />
          </template>
        </Dialog>

        <!--        Delete Users, that are selected-->
        <Dialog v-model:visible="deleteUsersDialog" :style="{width: '450px'}" :header="t('confirm')" :modal="true">
          <div class="flex align-items-center justify-content-center">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
            <span v-if="user">{{ this.$t('userDelete.selectedUsersDelete') }}</span>
          </div>
          <template #footer>
            <Button :label="t('no')" icon="pi pi-times" class="p-button-text" @click="deleteUsersDialog = false"/>
            <Button :label="t('yes')" icon="pi pi-check" class="p-button-text" @click="deleteSelectedUsers" />
          </template>
        </Dialog>
         <h1>hsakdgasi</h1>
      </div>
    </div>
  </div>

</template>

<script>
import {useI18n} from 'vue-i18n';
import {FilterMatchMode} from 'primevue/api';
import UserService from '../../../service/UsersService';


export default {
  setup() {
      const {t} = useI18n();
      return {t}
  },
  data() {
    return {
      users: null,
      userDialog: false,
      deleteUserDialog: false,
      deleteUsersDialog: false,
      user: {},
      selectedUsers: null,
      filters: {},
      submittedUser: false,
      statusOptions: [
        {status: 'Đang hoạt động', value: 'active', code: '1'},
        {status: 'Không hoạt động', value: 'unactive', code: '2'}
      ],
      statusOption: null,
      statusesUser: [
        {label: 'INSTOCK', value: 'instock'},
        {label: 'LOWSTOCK', value: 'lowstock'},
        {label: 'OUTOFSTOCK', value: 'outofstock'}
      ],

    }
  },
  userService: null,
  created() {
    this.userService = new UserService();
    this.initFilters();
  },
  mounted() {
    this.userService.getUser().then(data => this.users = data);
  },
  methods: {
    formatCurrency(value) {
      if(value)
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
      return;
    },
    openNew() {
      this.user = {};
      this.submitted = false;
      this.userDialog = true;
    },
    hideDialog() {
      this.userDialog = false;
      this.submitted = false;
    },
    saveUser() {
      this.submitted = true;
      if (this.user.fullname.trim()) {
        if (this.user.id) {
          this.user.inventoryStatus = this.user.inventoryStatus.value ? this.user.inventoryStatus.value: this.user.inventoryStatus;
          this.users[this.findIndexById(this.user.id)] = this.user;
          this.$toast.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
        }
        else {
          this.user.id = this.createId();
          this.user.code = this.createId();
          this.user.image = 'product-placeholder.svg';
          this.user.inventoryStatus = this.user.inventoryStatus ? this.user.inventoryStatus.value : 'INSTOCK';
          this.users.push(this.user);
          this.$toast.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
        }
        this.userDialog = false;
        this.user = {};
      }
    },
    editUser(user) {
      this.user = {...user};
      this.userDialog = true;
    },
    confirmDeleteUser(user) {
      this.user = user;
      this.deleteUserDialog = true;
    },
    deleteUser() {
      this.users = this.users.filter(val => val.id !== this.user.id);
      this.deleteUserDialog = false;
      this.user = {};
      this.$toast.add({severity:'success', summary: 'Successful', detail: 'User Deleted', life: 3000});
    },
    findIndexById(id) {
      let index = -1;
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id === id) {
          index = i;
          break;
        }
      }
      return index;
    },
    createId() {
      let id = '';
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for ( var i = 0; i < 5; i++ ) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
    },
    exportCSV() {
      this.$refs.dt.exportCSV();
    },
    confirmDeleteSelected() {
      this.deleteUsersDialog = true;
    },
    deleteSelectedUsers() {
      this.users = this.users.filter(val => !this.selectedUsers.includes(val));
      this.deleteUsersDialog = false;
      this.selectedUsers = null;
      this.$toast.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
    },
    initFilters() {
      this.filters = {
        'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../assets/demo/badges';
</style>
