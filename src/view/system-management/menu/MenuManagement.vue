<template>
  <div class="grid">
    <div class="col-3">
      <div class="">
        <Tree :value="menuValue" selectionMode="single" v-model:selectionKeys="selectedMenuValue"></Tree>
      </div>
    </div>
    <div class="col-9">
      <div class="card">
        <Accordion  class="mb-4">
          <AccordionTab :header="t('search')">
            <div class="p-fluid">
              <div class="formgrid grid">
                <div class="field col">
                  <label for="searchName">{{ this.$t("menu.properties.name") }}</label>
                  <inputText id="searchName" type="text"/>
                </div>
                <div class="field col">
                  <label for="searchPath">{{ this.$t("menu.properties.url") }}</label>
                  <inputText id="searchPath" type="text"/>
                </div>
              </div>
              <div class="formgrid grid">
                <div class="field col">
                  <label for="searchComponent">{{ this.$t("menu.properties.component") }}</label>
                  <Dropdown
                      id="searchComponent"
                      name="searchComponent"
                      v-model="componentOption"
                      optionLabel="component"
                      :options="componentOptions"
                      :placeholder="t('select')"></Dropdown>
                </div>
                <div class="field col">
                  <label for="searchStatus">{{ this.$t("menu.properties.status") }}</label>
                  <Dropdown
                      id="searchStatus"
                      name="searchStatus"
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
            <h5 class="m-0">{{ $t('components.MenuManagement') }}</h5>
            <span class="block mt-2 md:mt-0 p-input-icon-left">
                                <i class="pi pi-search" />
                                <InputText :placeholder="t('menu.searchText')" />
                            </span>
          </div>
        </template>

        <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
        <Column field="name" :header="t('menu.properties.name')" :sortable="true" headerStyle="min-width:10rem;">
          <template #body="slotProps">
            <span class="p-column-title"></span>
            {{slotProps.data.code}}
          </template>
        </Column>
        <Column field="url" :header="t('menu.properties.url')" :sortable="true" headerStyle="min-width:10rem;">
          <template #body="slotProps">
            <span class="p-column-title"></span>
            {{slotProps.data.name}}
          </template>
        </Column>
        <Column field="component" :header="t('menu.properties.component')" :sortable="true" headerStyle="min-width:10rem;">
          <template #body="slotProps">
            <span class="p-column-title"></span>
            {{slotProps.data.name}}
          </template>
        </Column>
        <Column field="status" :header="t('menu.properties.status')" :sortable="true" headerStyle="min-width:10rem;">
          <template #body="slotProps">
            <span class="p-column-title"></span>
            <span :class="'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')">{{slotProps.data.inventoryStatus}}</span>
          </template>
        </Column>
      </DataTable>

    </div>
  </div>

</template>
<script>
import {useI18n} from 'vue-i18n';
import MenuService from '../../../service/MenuService'

export default {
  setup() {
    const {t} = useI18n();
    return {t}
  },

  data() {
    return {
      menuValue: null,
      selectedMenuValue: null,

      statusOption: null,
      componentOption: null,

      statusOptions: [
        {status: 'Đang hoạt động', code: '1'},
        {status: 'Không hoạt động', code: '2'},
      ],
      componentOptions: [
        {component: 'Không có lựa chọn nào', code: '1'},
      ]

    }
  },
  menuService: null,
  created() {
    this.menu = new MenuService();
  },
  mounted() {
    this.menu.getTreeMenu().then(data => this.menuValue = data)
  },
  methods: {
    openNew() {
      this.$router.push({
        name: 'CreateMenu'
      })
    }
  }
}
</script>

<style scoped lang="scss">
</style>