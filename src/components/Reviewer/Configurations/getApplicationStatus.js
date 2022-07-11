const applicationStatus = async (store, applicationCode) => {
  let statusId;
  await store
    .dispatch("newlicense/getApplicationStatuses")
    .then((res) => {
      let applicationStatuses = res.data.data;

      let filterStatus = applicationStatuses.filter(
        (data) => data.code == applicationCode
      );

      statusId = filterStatus[0].id;
      return statusId;
    })
    .catch((err) => {
      console.log(err);
    });
  return statusId;
};
export default applicationStatus;
