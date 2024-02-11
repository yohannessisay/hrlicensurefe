import { useStore } from "vuex";

export const fetchDataMixin = {
  setup() {
    const store = useStore();
    const fetchData = async (url, param, type) => {
      if (type && type == "noReturnData") {
        await store.dispatch(url.toString(), param);
      } else {
        const result = await store.dispatch(url.toString(), param).then(res => {
          return res.data.data;
        });
        return result;
      }
    };

    return { fetchData };
  }
};
