import { Link } from "remix";

const Posts = () => {
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
            <h1>Post Page</h1>
            <Link to="/">Index</Link>
        </div>
    )
}

export default Posts
