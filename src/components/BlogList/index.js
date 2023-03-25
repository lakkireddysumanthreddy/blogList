import './index.css'

const BlogList = ({eachItem}) => (
  <li>
    <div className="flex-items">
      <h1 className="blog-heading">{eachItem.title}</h1>
      <p className="blog-publishedDate">{eachItem.publishedDate}</p>
    </div>
    <p className="blog-description">{eachItem.description}</p>
    <div className="line"> </div>
  </li>
)

export default BlogList
