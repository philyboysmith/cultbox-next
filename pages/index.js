import Layout from "../components/layouts/Layout";
import PostList from "../components/ui/PostList";
import { withRouter } from "next/router";
import wpapi from "../services/wpapi";
import Pagination from "../components/ui/Pagination";

class PostListPage extends React.Component {
  static async getInitialProps({ query }) {
    // <Pagination /> component add a "page" argument to url
    const currentPage = query.page ? query.page : 1;
    const posts = await wpapi
      .posts()
      .embed()
      .perPage(10)
      .page(currentPage);
    return { posts, paging: posts._paging };
  }
  render() {
    return (
      <Layout>
        {<PostList posts={this.props.posts} />}
        <Pagination totalPages={this.props.paging.totalPages} />
      </Layout>
    );
  }
}

export default withRouter(PostListPage);
