const applicationStatus = (store, applicationCode) => {
    let applicationStatuses = store.getters["admin/getAppStatuses"];
    console.log("vue2", applicationStatuses)
    const filterStatus = applicationStatuses.filter(data => data.code == applicationCode);
    const statusId = filterStatus[0].id
    return statusId
}
export default applicationStatus;