import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
const images = [
  "https://images.pexels.com/photos/1638324/pexels-photo-1638324.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/703016/pexels-photo-703016.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1756959/pexels-photo-1756959.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2105493/pexels-photo-2105493.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2652236/pexels-photo-2652236.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1144864/pexels-photo-1144864.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2475875/pexels-photo-2475875.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/869243/pexels-photo-869243.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/866027/pexels-photo-866027.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2468339/pexels-photo-2468339.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/905326/pexels-photo-905326.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4046704/pexels-photo-4046704.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4164770/pexels-photo-4164770.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1554824/pexels-photo-1554824.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/896058/pexels-photo-896058.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1092872/pexels-photo-1092872.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4662360/pexels-photo-4662360.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/17840/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
  
];

const Gallery = () => {
  return (
    <div className="gallery-container" style={{margin:"25px",marginTop:"100px"}} >
      <ResponsiveMasonry
          columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}  
      >
          <Masonry gutter="10px">
              {images.map((image, i) => (
                <div key={i} className="gallery-item">
                  <img
                     className="gallery-image"
                      src={image}
                      style={{width: "100%", borderRadius: "20px", display: "block"}}
                      alt=""
                  />
                  </div>
              ))}
          </Masonry>
      </ResponsiveMasonry>
    </div>
  )
}

export default Gallery
