
import img1 from '../assets/recipe1-S5gfcgix.png'
import img2 from '../assets/recipe2-RJ_Tb9Qg.png'
import img3 from '../assets/recipe3-GbSPFAxO.png'

const Recipes = () => {
  return (
    <div className="container-fluid Recipes py-5 my-2">
      <div className="container ">
        <div className="row">
          <div className="col-lg-10">
            <h1 className="main_heading">Trending <span>Recipes</span></h1>

          </div>
          <div className="col-lg-2 text-end">
            <button className='btn1 fs-6'>See All <i className="fa-solid fa-arrow-right ps-3"></i></button>

          </div>
        </div>

        <div className="row gx-0 mt-lg-5 align-items-center">
          <div className="col-lg-4 ">
            <img src={img1} alt="" className='img-fluid ' />

            <div className="Recipes_col1 ">
              <h4>$20</h4>
              <h5>Vegan sweet and chickpea curry</h5>
              <div className="recipe_mid py-2">
                <div className="row align-items-center">
                  <div className="col-5">
                    <div className="stars">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <div className="col-7">
                    <button className='border-0'> Add To Cart<i className="fa-solid fa-cart-shopping"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 ">
            <img src={img2} alt="" className='img-fluid ' />

            <div className="Recipes_col1">
              <h4>$30</h4>
              <h5>pepper steak</h5>
              <div className="recipe_mid py-2">
                <div className="row align-items-center">
                  <div className="col-5">
                    <div className="stars">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <div className="col-7">

                    <button className='border-0'> Add To Cart<i className="fa-solid fa-cart-shopping"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 ">
            <img src={img3} alt="" className='img-fluid ' />

            <div className="Recipes_col1">
              <h4>$60</h4>
              <h5>penne pasta in tomatosauce</h5>
              <div className="recipe_mid py-2">
                <div className="row align-items-center">
                  <div className="col-5">
                    <div className="stars">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <div className="col-7">
                    <button className='border-0'> Add To Cart<i className="fa-solid fa-cart-shopping"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recipes