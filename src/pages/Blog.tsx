
export default function Blog() {
  return (
    <div className='blog-container'>
      <h1>BLOGS</h1>
      <div>
        <div className="blog-card">
          <img className="main-img" src="public/img/main.jpeg" alt="" />
          <p>January 12, 2023</p>
          <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum perferendis ut beatae officia soluta ad?</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis ducimus voluptate repellat illum excepturi dignissimos.
          </p>
        </div>
        <div className="blog-side-card">

          <div style={{paddingRight:"10px"}}>
            <p>January 12, 2023</p>
            <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum perferendis ut beatae officia soluta ad?</h4>
          </div>
          <div className='side-img-container'><img className="side-img" src="public/img/5.jpeg" alt="" /></div>
        </div>
        <div className="blog-side-card">
          <div style={{paddingRight:"10px"}}>
            <p>January 12, 2023</p>
            <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum perferendis ut beatae officia soluta ad?</h4>
          </div>
          <div className='side-img-container'><img className="side-img" src="public/img/2.jpeg" alt="" /></div>
        </div>
        <div className="blog-side-card">
          <div style={{paddingRight:"10px"}}>
            <p>January 12, 2023</p>
            <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum perferendis ut beatae officia soluta ad?</h4>
          </div>
          <div className='side-img-container'><img className="side-img" src="public/img/1.jpeg" alt="" /></div>
        </div>
      </div>
    </div>
  )
}
