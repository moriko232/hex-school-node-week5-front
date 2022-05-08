import baseUrl from "./settings.js";
var app = new Vue({
  el: "#app",
  data: {
    isLoading: false,
    posts: [],
    searchText: "",
    sort: "desc", // asc, desc
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getTime(time){
      return dayjs(time).format('YYYY-MM-DD hh:mm')
    },
    getPosts() {
      const api = `${baseUrl}/posts`; // ?timeSort=asc&q=超讚
      console.log("getPosts");
      this.isLoading = true;

      axios
        .get(api, { params: { timeSort: this.sort, q: this.searchText } })
        .then((res) => {
          this.isLoading = false;
          console.log("getPosts res", res);
          this.posts = res.data.data;
        })
        .catch((err) => {
          this.isLoading = false;
          console.log("err", err);
        });
    },
  },
});
