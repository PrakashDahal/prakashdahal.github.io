import { menuItems } from '../../helper/menuItems'
import './blog.scss'
import { blogItems } from '../../helper/blogItems';


function Blog() {
  return (
    <div className='blog' id={menuItems?.blog?.id}>
      <h1>Blogs</h1>

      <div className='blog-container'>
        {blogItems.map((blogItem, index) => (
          <div className="blog-card" key={index}>
            <div className="blog-title">
              <h2>
                {blogItem.title}
              </h2>
            </div>
            <div className="blog-body">
              <a href={blogItem.url} target="_blank">
                <div className="image-overlay">
                </div>
                <img src={blogItem.imageUrl} alt={blogItem.title} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
