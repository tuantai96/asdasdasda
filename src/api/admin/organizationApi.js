// organization api
import baseApi from "../baseApi";
import {objectDataToQueryString} from "../../commons/Utils";
import {GATEWAY_URL} from "../configService";

const ORGANIZATIONS_API_URL = `${GATEWAY_URL}/admin/organizations`;

const getAllOrganizations = () => {
  try {
    return baseApi.get(`${ORGANIZATIONS_API_URL}/getAllOrganization`, {});
  } catch (e) {
    return e;
  }
}

const searchOrganizations = (data) => {
  try {
    return baseApi.get(`${ORGANIZATIONS_API_URL}/searchOrganizations?${objectDataToQueryString(data)}`, {});
  } catch (e) {
    return e;
  }
};

const getOrganization = (data) => {
  try {
    return baseApi.get(`${ORGANIZATIONS_API_URL}/getOrganizationInfo/${data.organizationId}`, {});
  } catch (e) {
    return e;
  }
};

const getByParentOrganizations = (data) => {
  try {
    return baseApi.get(`${ORGANIZATIONS_API_URL}/getByParentOrganization?parentOrganizationId=${data.parentOrganizationId}`, {});
  } catch (e) {
    return e;
  }
};

const createOrganization = (data) => {
  try {
    return baseApi.post(`${ORGANIZATIONS_API_URL}/createOrganization`, data);
  } catch (e) {
    return e;
  }
};

const updateOrganization = (data) => {
  try {
    return baseApi.put(`${ORGANIZATIONS_API_URL}/updateOrganization/${data.organizationId}`, data);
  } catch (e) {
    return e;
  }
};

const deleteOrganization = (data) => {
  try {
    return baseApi.del(`${ORGANIZATIONS_API_URL}/deleteOrganization/${data.organizationId}`);
  } catch (e) {
    return e;
  }
};

const deleteOrganizations = (data) => {
  try {
    return baseApi.del(`${ORGANIZATIONS_API_URL}/deleteOrganizations?organizationIds=${data.organizationIds}`);
  } catch (e) {
    return e;
  }
};


export {
  getAllOrganizations,
  searchOrganizations,
  getOrganization,
  getByParentOrganizations,
  createOrganization,
  updateOrganization,
  deleteOrganization,
  deleteOrganizations
};