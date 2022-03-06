import {NavLink, useLoaderData} from "remix";
import type {MetaFunction} from "remix";
import {FC} from "react";
import type {LoaderFunction} from "remix";

export const meta: MetaFunction = () => {
    return {
        title: "Post Page",
        description: "This is the post page that is created by Remix"
    };
};

export const loader: LoaderFunction = async (request) => {
    const url = "http://198.18.36.173:4000/api/posts";
    return fetch(url);
};

const Posts: FC = () => {
    const data = useLoaderData();
    return (
        <div style={{fontFamily: "system-ui, sans-serif", lineHeight: "1.4"}}>
            <h1>Post Page</h1>
            <NavLink to="/">Index</NavLink>
            {
                JSON.stringify(data)
            }
        </div>
    )
}

export default Posts
