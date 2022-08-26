<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <Accordion  class="mb-4">
          <AccordionTab :header="t('advancedSearch')">
            <div class="p-fluid">
              <div class="formgrid grid">
                <div class="field col">
                  <label for="roleCode">{{ this.$t("role.properties.roleCode") }}</label>
                  <inputText id="roleCode" type="text"/>
                </div>
                <div class="field col">
                  <label for="roleName">{{ this.$t("role.properties.roleName") }}</label>
                  <inputText id="roleName" type="text"/>
                </div>
              </div>
              <div class="formgrid grid">
                <div class="field col">
                  <label for="roleType">{{ this.$t("role.properties.roleType") }}</label>
                  <Dropdown
                      id="roleType"
                      name="roleType"
                      v-model="roleOption"
                      optionLabel="roleType"
                      :options="roleOptions"
                      :placeholder="t('select')"></Dropdown>
                </div>
                <div class="field col">
                  <label for="status">{{ this.$t("role.properties.active") }}</label>
                  <Dropdown
                      id="status"
                      name="status"
                      v-model="statusOption"
                      optionLabel="status"
                      :options="statusOptions"
                      :placeholder="t('select')"></Dropdown>
                </div>
              </div>
            </div>
            <div class="grid justify-content-center mt-5">
              <Button type="button" class="ml-3" :label="t('search')" icon="pi pi-search"/>
            </div>
          </AccordionTab>
        </Accordion>

        <toolbar class="mb-4">
          <template v-slot:start>
            <div class="my-2">
              <Button type="button" :label="t('create')" class="p-button-success mr-2" icon="pi pi-plus" @click="openNew"/>
              <Button type="button" :label="t('delete')" class="p-button-danger" icon="pi pi-trash"/>
            </div>
          </template>
        </toolbar>
      </div>

      <DataTable ref="dt" value="products" selection="selectedProducts" dataKey="id" paginator="true" rows="10" filters="filters"
                 paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                 currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" responsiveLayout="scroll">
        <template #header>
          <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
            <h5 class="m-0">{{ $t('components.RoleManagement') }}</h5>
            <span class="block mt-2 md:mt-0 p-input-icon-left">
                                <i class="pi pi-search" />
                                <InputText :placeholder="t('role.searchText')" />
                            </span>
          </div>
        </template>

        <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
        <Column field="roleCode" :header="t('role.properties.roleCode')" :sortable="true" headerStyle="min-width:10rem;">
          <template #body="slotProps">
            <span class="p-column-title"></span>
            {{slotProps.data.code}}
          </template>
        </Column>
        <Column field="roleName" :header="t('role.properties.roleName')" :sortable="true" headerStyle="min-width:10rem;">
          <template #body="slotProps">
            <span class="p-column-title"></span>
            {{slotProps.data.name}}
          </template>
        </Column>
        <Column field="roleType" :header="t('role.properties.roleType')" :sortable="true" headerStyle="min-width:10rem;">
          <template #body="slotProps">
            <span class="p-column-title">L</span>
            {{slotProps.data.name}}
          </template>
        </Column>
        <Column field="inventoryStatus" :header="t('role.properties.active')" :sortable="true" headerStyle="min-width:10rem;">
          <template #body="slotProps">
            <span class="p-column-title">Status</span>
            <span :class="'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')">{{slotProps.data.inventoryStatus}}</span>
          </template>
        </Column>
      </DataTable>

    </div>
  </div>

</template>
<script>
import {useI18n} from 'vue-i18n';

export default {
  setup() {
    const {t} = useI18n();
    return {t}
  },
  data() {
    return {
      statusOption:null,
      roleOption: null,

      statusOptions: [
        {status: 'Đang hoạt động', code: '1'},
        {status: 'Không hoạt động', code: '2'},
      ],
      roleOptions: [
        {roleType: 'Mặc định', code: '1'},
        {roleType: 'Tổ chức', code: '2'}
      ]
    }
  },
  methods: {
    openNew() {
      this.$router.push({
        name: 'CreateRole'
      })

    }
  }
}
</script>

<style scoped lang="scss">
</style>