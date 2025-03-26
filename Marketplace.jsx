import "./Marketplace.css"


function Marketplace()
{
    return(

<div>


    <main>
      <section class="hero2">
        <h1>Agricultural Marketplace</h1>
        <p>Compare prices and find the best deals on agricultural products</p>
      </section>

      <section class="filters">
        <input type="search" placeholder="Search products..." class="search-input"/>
        <select class="filter-select">
          <option value="">All Categories</option>
          <option value="vegetables">Vegetables</option>
          <option value="fruits">Fruits</option>
          <option value="grains">Grains</option>
          <option value="dairy">Dairy</option>
        </select>
      </section>

      <section class="products">
        <div class="product-card">
          <img src="https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?w=400" alt="Fresh Tomatoes"/>
          <div class="product-info">
            <h3>Fresh Tomatoes</h3>
            <p class="price">$2.99/kg</p>
            <p class="seller">Seller: Green Farms</p>
            <button class="btn">Contact Seller</button>
          </div>
        </div>

        <div class="product-card">
          <img src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400" alt="Organic Potatoes"/>
          <div class="product-info">
            <h3>Organic Potatoes</h3>
            <p class="price">$1.99/kg</p>
            <p class="seller">Seller: Organic Valley</p>
            <button class="btn">Contact Seller</button>
          </div>
        </div>

        <div class="product-card">
          <img src="https://images.unsplash.com/photo-1602170284347-633bb0f76b5d?w=400" alt="Fresh Carrots"/>
          <div class="product-info">
            <h3>Fresh Carrots</h3>
            <p class="price">$1.50/kg</p>
            <p class="seller">Seller: Farm Fresh</p>
            <button class="btn">Contact Seller</button>
          </div>
        </div>

        <div class="product-card">
          <img src="https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?w=400" alt="Organic Rice"/>
          <div class="product-info">
            <h3>Organic Rice</h3>
            <p class="price">$4.99/kg</p>
            <p class="seller">Seller: Rice Fields Co.</p>
            <button class="btn">Contact Seller</button>
          </div>
        </div>
      </section>

      <section class="learn-more">
        <div class="learn-more-container">
          <h2>Product Quality & Hygiene Standards</h2>
          <div class="standards-grid">
            <div class="standard-card">
              <h3>Storage Guidelines</h3>
              <p>All products must be stored in temperature-controlled environments to maintain freshness. Sellers are required to maintain proper storage facilities with regular monitoring.</p>
            </div>
            <div class="standard-card">
              <h3>Handling Practices</h3>
              <p>Products must be handled with clean equipment and proper protective gear. Regular sanitation of handling areas and equipment is mandatory.</p>
            </div>
            <div class="standard-card">
              <h3>Quality Inspection</h3>
              <p>Each product undergoes quality inspection before listing. This includes checking for freshness, cleanliness, and compliance with food safety standards.</p>
            </div>
            <div class="standard-card">
              <h3>Packaging Standards</h3>
              <p>All products must be packaged in clean, food-grade materials. Packaging must protect the product from contamination and damage during transport.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="seller-section" class="seller-section">
        <div class="seller-container">
          <h2>Sell Your Products</h2>
          <p class="seller-intro">Join our marketplace and reach thousands of potential buyers</p>
          
          <form class="seller-form">
           
            
            <div class="form-group">
              <label for="product-name">Product Name</label>
              <input type="text" id="product-name" required/>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="category">Category</label>
                <select id="category" required>
                  <option value="">Select Category</option>
                  <option value="vegetables">Vegetables</option>
                  <option value="fruits">Fruits</option>
                  <option value="grains">Grains</option>
                  <option value="dairy">Dairy</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="price">Price per kg</label>
                <input type="number" id="price" min="0" step="0.01" required/>
              </div>
            </div>
            
            <div class="form-group">
              <label for="description">Product Description</label>
              <textarea id="description" rows="4" required></textarea>
            </div>
            
            <div class="form-group">
              <label for="product-image">Product Image</label>
              <input type="file" id="product-image" accept="image/*" required/>
            </div>
            
            <button type="submit" class="btn submit-btn">List Product</button>
          </form>
        </div>
      </section>
    </main>

    <footer class="footer">
      <p>&copy; 2025 AgroConnect. All rights reserved.</p>
    </footer>





</div>


    )
}

export default Marketplace