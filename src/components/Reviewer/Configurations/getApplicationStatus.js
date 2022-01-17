const applicationStatus = (store, applicationCode) => {
    let applicationStatuses = store.getters["admin/getAppStatuses"];
    const filterStatus = applicationStatuses.filter(data => data.code == applicationCode);
    console.log("application status", applicationStatuses)
    const statusId = filterStatus[0].id
    return statusId
}
export default applicationStatus;