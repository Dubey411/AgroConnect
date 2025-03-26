import { useState } from "react"
import "./One.css"
import { Await, Link } from "react-router-dom"
import data from "./ProductComparison.json"
function One()
{
 async function load_product() {
try {

    let {list,setlist} = useState("")
    let response = await fetch(data)
    if (response.ok) {
        setlist = await response.json();

    }
    else{
        console.log("Unsuccessfull")
    }
} catch (error) {
    console.log(error)
}
    
 }

    


    



    return(
   

<div>
<section class="hero">
        <div class="hero-content">
            <div class="hero-text">
                <h1>Connecting Local Farmers to Global Markets</h1>
                <p>Join the digital agricultural revolution. Connect with buyers, sellers, and agricultural experts in your local community.</p>
                <div class="hero-buttons">
                    <button class="primary-btn">Get Started</button>
                    <button class="secondary-btn">Learn More</button>
                </div>
            </div>
            <div class="hero-image">
                <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80" alt="Farmer in field"/>
            </div>
        </div>
    </section>

   
    <section class="features">
        <h2>Why Choose AgroConnect?</h2>
        <p class="section-subtitle">Empowering farmers and businesses with digital solutions</p>
        <div class="features-grid">
            <div class="feature-card">
                <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/users.svg" alt="Connect"/>
                <h3>Connect Directly</h3>
                <p>Connect with local farmers, buyers, and agricultural experts in your area.</p>
            </div>
            <div class="feature-card">
                <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/shopping-basket.svg" alt="Marketplace"/>
                <h3>Digital Marketplace</h3>
                <p>Buy and sell agricultural products in a secure online marketplace.</p>
            </div>
            <div class="feature-card">
                <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/trending-up.svg" alt="Growth"/>
                <h3>Growth Opportunities</h3>
                <p>Expand your agricultural business with digital tools and insights.</p>
            </div>
        </div>
    </section>

    
    <section class="price-comparison">
        <h2>Compare Prices</h2>
        <p class="section-subtitle">Find the best deals across different platforms</p>
        <div class="comparison-container">
            <div class="product-selector">
                <label for="product">Select Product</label>
                <select id="product" >
                    <option value="tomatoes">Tomatoes</option>
                    <option value="potatoes">Potatoes</option>
                    <option value="onions">Onions</option>
                    <option value="carrots">Carrots</option>
                </select>
            </div>
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>Platform</th>
                        <th>Price</th>
                        <th>Unit</th>
                        <th>Comparison</th>
                    </tr>
                </thead>
                <tbody id="priceTableBody">
                   

                </tbody>
            </table>
            <p class="price-note">* Prices are updated regularly and may vary by location</p>
        </div>
    </section>

    
    <section class="search">
        <h2>Find Agricultural Partners</h2>
        <p>Search for farmers, suppliers, or buyers in your area</p>
        <div class="search-container">
            <input type="text" placeholder="Search by product or location..."/>
            <button class="search-btn">
                <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/search.svg" alt="Search"/>
                Search
            </button>
        </div>
    </section>

</div>


     


    
   
    )
   
}


export default One