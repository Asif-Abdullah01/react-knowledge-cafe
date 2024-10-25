import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";


const Blog = ({blog, handeAddToBookmark, handleMarkAsRead}) => {
    const {id, title, cover, reading_time, author,author_img,posted_date, hashtags} = blog;
    return (
        <div className="mb-20 space-y-4">
            <img className="w-full mb-8" src={cover} alt={`Cover picture of the title ${title}`} />
            <div className="flex justify-between mb-4">
                <div className="flex items-center">
                    <img className="w-16" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handeAddToBookmark(blog)} className="ml-2 text-2xl text-red-600"><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className="text-3xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) => <span className="mr-2" key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(id,reading_time)} className="text-purple-600 font-bold underline">Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handeAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;