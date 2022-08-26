<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <Toast/>
        <Toolbar class="mb-4">
          <template v-slot:start>
            <div class="my-2">
              <Button label="New" icon="pi pi-plus" class="p-button-success mr-2" @click="openNew" />
              <Button label="Delete" icon="pi pi-trash" class="p-button-danger" @click="confirmDeleteSelected" :disabled="!selectedUsers || !selectedUsers.length" />
            </div>
          </template>

          <template v-slot:end>
            <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="mr-2 inline-block" />
            <Button label="Export" icon="pi pi-upload" class="p-button-help" @click="exportCSV($event)"  />
          </template>
        </Toolbar>

<!--        UserTable-->

        <DataTable ref="dt" :value="users" v-model:selection="selectedUsers" dataKey="id" :paginator="true" :rows="10" :filters="filters"
                   paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                   currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" responsiveLayout="scroll">
          <template #header>
            <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
              <h5 class="m-0">Manage Users</h5>
              <span class="block mt-2 md:mt-0 p-input-icon-left">
                                <i class="pi pi-search" />
                                <InputText v-model="filters['global'].value" placeholder="Search..." />
                            </span>
            </div>
          </template>
          <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
          <Column field="code" header="Code" :sortable="true" headerStyle="min-width:10rem;">
            <template #body="slotProps">
              <span class="p-column-title">Code</span>
              {{slotProps.data.code}}
            </template>
          </Column>
          <Column field="name" header="Name" :sortable="true" headerStyle="min-width:10rem;">
            <template #body="slotProps">
              <span class="p-column-title">Name</span>
              {{slotProps.data.name}}
            </template>
          </Column>
          <Column field="price" header="Price" :sortable="true" headerStyle="min-width:8rem;">
            <template #body="slotProps">
              <span class="p-column-title">Price</span>
              {{formatCurrency(slotProps.data.price)}}
            </template>
          </Column>
          <Column field="inventoryStatus" header="Status" :sortable="true" headerStyle="min-width:10rem;">
            <template #body="slotProps">
              <span class="p-column-title">Status</span>
              <span :class="'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')">{{slotProps.data.inventoryStatus}}</span>
            </template>
          </Column>
          <Column headerStyle="min-width:10rem;">
            <template #body="slotProps">
              <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" @click="editUser(slotProps.data)" />
              <Button icon="pi pi-trash" class="p-button-rounded p-button-warning mt-2" @click="confirmDeleteUser(slotProps.data)" />
            </template>
          </Column>
        </DataTable>

        <!--        Sua-->
        <Dialog v-model:visible="userDialog" :style="{width: '450px'}" header="User Details" :modal="true" class="p-fluid">
<!--          <img :src="'images/product/' + product.image" :alt="product.image" v-if="product.image" width="150" class="mt-0 mx-auto mb-5 block shadow-2" />-->
          <div class="field">
            <label for="name">Name</label>
            <InputText id="name" v-model.trim="user.name" required="true" autofocus :class="{'p-invalid': submitted && !user.name}" />
            <small class="p-invalid" v-if="submitted && !user.name">Name is required.</small>
          </div>
          <div class="field">
            <label for="description">Description</label>
            <Textarea id="description" v-model="user.description" required="true" rows="3" cols="20" />
          </div>

          <div class="field">
            <label for="inventoryStatus" class="mb-3">Inventory Status</label>
            <Dropdown id="inventoryStatus" v-model="user.inventoryStatus" :options="statuses" optionLabel="label" placeholder="Select a Status">
              <template #value="slotProps">
                <div v-if="slotProps.value && slotProps.value.value">
                  <span :class="'product-badge status-' +slotProps.value.value">{{slotProps.value.label}}</span>
                </div>
                <div v-else-if="slotProps.value && !slotProps.value.value">
                  <span :class="'product-badge status-' +slotProps.value.toLowerCase()">{{slotProps.value}}</span>
                </div>
                <span v-else>
									{{slotProps.placeholder}}
								</span>
              </template>
            </Dropdown>
          </div>
          <div class="formgrid grid">
            <div class="field col">
              <label for="price">Price</label>
              <InputNumber id="price" v-model="user.price" mode="currency" currency="USD" locale="en-US" />
            </div>
          </div>
          <template #footer>
            <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog"/>
            <Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveUser" />
          </template>
        </Dialog>

        <!--        Xoa-->
        <Dialog v-model:visible="deleteUserDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
          <div class="flex align-items-center justify-content-center">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
            <span v-if="user">Are you want to delete??? <b>{{user.name}}</b>?</span>
          </div>
          <template #footer>
            <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteUserDialog = false"/>
            <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteUser" />
          </template>
        </Dialog>

<!--        Delete Users, that are selected-->
        <Dialog v-model:visible="deleteUsersDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
          <div class="flex align-items-center justify-content-center">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
            <span v-if="user">Are you sure you want to delete the selected users?</span>
          </div>
          <template #footer>
            <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteUsersDialog = false"/>
            <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteSelectedUsers" />
          </template>
        </Dialog>

      </div>
    </div>
  </div>

</template>

<script>
import {FilterMatchMode} from 'primevue/api';
import UserService from '../service/UsersService';

export default {
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
      statusesUser: [
        {label: 'INSTOCK', value: 'instock'},
        {label: 'LOWSTOCK', value: 'lowstock'},
        {label: 'OUTOFSTOCK', value: 'outofstock'}
      ]
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
      if (this.user.name.trim()) {
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
@import '../assets/demo/badges.scss';
</style>
