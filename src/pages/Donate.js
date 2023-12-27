import DonationCalculator from "../Components/DonationCalculator";
import LittleBlue from "../images/penguin tiers/little-blue.png";
import Magellanic from "../images/penguin tiers/magellanic.png";
import King from "../images/penguin tiers/king.png";
import Emperor from "../images/penguin tiers/emperor.png";


function Donate() {
  return (


    <div class="container" >

      <div className="text-center m-5">
        <h1>Support Us</h1>
      </div>


      <p>The Greater Boston STEM Program relies on your support to provide enriching learning experiences for students in our community. As a registered 501(c)3 nonprofit organization, all donations to us are tax deductible.</p>


      <a type="button" class="btn btn-primary mb-4"
        href="https://www.paypal.com/fundraiser/charity/4605663"
        target="_blank" rel="noreferrer"
      >Make A Contribution</a>

      <div style = {{margin:"3rem", marginRight:"4rem", borderRadius:"10px", borderWidth:"1px", boxShadow: "0px 1px 5px #1d2256", backgroundColor:'aliceblue', borderStyle:"solid", padding:"3rem"}}>
        <DonationCalculator />
      </div>

      <h2 className = "text-center" style = {{marginTop:"5rem"}}>Sponsoring gbSTEM</h2>
      <p style = {{padding: "2rem"}}>We thank significant monetary (typically corporate) sponsors with benefits that include brand visibility on gbSTEM merchandise and social media. More benefits become available with higher sponsorship tiers.</p>

      <div class="container" style = {{fontSize:"1.5rem", paddingLeft:"5rem", paddingRight:"7rem", textAlign:"center", margin:"auto"}}>
  <div class="row" style = {{borderColor:"black", borderWidth:"0px", borderStyle:"solid"}}>
    <div style = {{borderWidth:"1px", width: "10rem"}}></div>
    <div class="col" style = {{borderColor:"black", borderWidth:"1px", borderStyle:"solid", backgroundColor:"#eeeeee", boxShadow:"0px 0px 5px black"}}>
      <div style = {{ display: "flex", height: "100%", alignItems:"end", justifyContent:"center"}}>
      <div style = {{display: "block"}}>
      <img alt = "Little Blue Tier" src = {LittleBlue} style = {{width:"7rem", height:"7rem"}}/>
      <div>Little Blue Tier</div>
      <div style = {{fontStyle:"italic", fontSize:"1.25rem"}}>$500+</div>
      </div>
      </div>
    </div>
    <div class="col" style = {{borderColor:"black", borderWidth:"1px", borderStyle:"solid", alignItems:"baseline", backgroundColor:"#5CBF60", boxShadow:"0px 0px 5px black"}}>
    <div style = {{ display: "flex", height: "100%", alignItems:"end", justifyContent:"center"}}>
    <div style = {{display: "block"}}>
      <img alt = "Magellanic Tier" src = {Magellanic} style = {{width:"8rem", height:"8rem"}}/>
      <div>Magellanic Tier</div>
      <div style = {{ fontStyle:"italic", fontSize:"1.25rem"}}>$1000+</div>
      </div>
      </div>
    </div>
    <div class="col" style = {{borderColor:"black", borderWidth:"1px", borderStyle:"solid", alignItems:"baseline", backgroundColor:"#ffd809", boxShadow:"0px 0px 5px black"}}>
    <div style = {{ display: "flex", height: "100%", alignItems:"end", justifyContent:"center"}}>
    <div style = {{display: "block"}}>
      <img alt = "King Tier" src = {King} style = {{width:"9rem", height:"9rem"}}/>
      <div>King Tier</div>
      <div style = {{fontStyle:"italic", fontSize:"1.25rem"}}>$2000+</div>
      </div>
    </div>
    </div>
    <div class="col sm" style = {{borderColor:"black", borderWidth:"1px", borderStyle:"solid", alignItems:"baseline", backgroundColor:"#67aeda", boxShadow:"0px 0px 5px black"}}>
    <div style = {{ display: "flex", height: "100%", alignItems:"end", justifyContent:"center"}}>
    <div style = {{display: "block"}}>
      <img alt = "Emperor Tier" src = {Emperor} style = {{width:"10rem", height:"10rem"}}/>
      <div>Emperor Tier</div>
      <div style = {{fontStyle:"italic", fontSize:"1.25rem"}}>$5000+</div>
      </div>
      </div>
    </div>
    <div class="w-100"></div>
    <div style = {{borderColor:"black", borderWidth:"1px", borderStyle:"solid", width: "10rem"}}><div style = {{height: "100%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.25rem"}}>Your Logo on gbSTEM's Website</div></div>
    <div class="col"style = {{borderColor:"black", borderWidth:"1px", borderStyle:"solid"}}><div style = {{height: "100%", display:"flex", alignItems:"center", justifyContent:"center", color:"#1d2256", fontSize:"5rem", fontWeight:"600"}}>X</div></div>
    <div class="col" style = {{borderColor:"black", borderWidth:"1px", borderStyle:"solid"}}><div style = {{height: "100%", display:"flex", alignItems:"center", justifyContent:"center", color:"#1d2256", fontSize:"5rem", fontWeight:"600"}}>X</div></div>
    <div class="col" style = {{borderColor:"black", borderWidth:"1px", borderStyle:"solid", height:"10rem"}}><div style = {{height: "100%", display:"flex", alignItems:"center", justifyContent:"center", color:"#1d2256", fontSize:"5rem", fontWeight:"600"}}>X</div></div>
    <div class="col" style = {{borderColor:"black", borderWidth:"1px", borderStyle:"solid"}}><div style = {{height: "100%", display:"flex", alignItems:"center", justifyContent:"center", color:"#1d2256", fontSize:"5rem", fontWeight:"600"}}>X</div></div>
    <div class="w-100"></div>
    <div style = {{borderColor:"black", borderWidth:"1px", borderStyle:"solid", width: "10rem"}}><div style = {{height: "100%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.25rem"}}>Your Logo on gbSTEM Merchandise</div></div>
    <div class="col"style = {{borderColor:"black", borderWidth:"1px", borderStyle:"solid", height:"10rem"}}><div style = {{height: "100%", display:"flex", alignItems:"center", justifyContent:"center", color:"#1d2256", fontSize:"5rem", fontWeight:"600"}}></div></div>
    <div class="col" style = {{borderColor:"black", borderWidth:"1px", borderStyle:"solid"}}><div style = {{height: "100%", display:"flex", alignItems:"center", justifyContent:"center", color:"#1d2256", fontSize:"5rem", fontWeight:"600"}}>X</div></div>
    <div class="col" style = {{borderColor:"black", borderWidth:"1px", borderStyle:"solid"}}><div style = {{height: "100%", display:"flex", alignItems:"center", justifyContent:"center", color:"#1d2256", fontSize:"5rem", fontWeight:"600"}}>X</div></div>
    <div class="col" style = {{borderColor:"black", borderWidth:"1px", borderStyle:"solid"}}><div style = {{height: "100%", display:"flex", alignItems:"center", justifyContent:"center",color:"#1d2256", fontSize:"5rem", fontWeight:"600"}}>X</div></div>
    <div class="w-100"></div>
    <div style = {{borderColor:"black", borderWidth:"1px", borderStyle:"solid", width: "10rem"}}><div style = {{height: "100%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.25rem"}}>Annual Feature on gbSTEM Social Media</div></div>
    <div class="col"style = {{borderColor:"black", borderWidth:"1px", borderStyle:"solid"}}><div style = {{height: "100%", display:"flex", alignItems:"center", justifyContent:"center", color:"#1d2256", fontSize:"5rem", fontWeight:"600"}}></div></div>
    <div class="col" style = {{borderColor:"black", borderWidth:"1px", borderStyle:"solid"}}><div style = {{height: "100%", display:"flex", alignItems:"center", justifyContent:"center", color:"#1d2256", fontSize:"5rem", fontWeight:"600"}}></div></div>
    <div class="col" style = {{borderColor:"black", borderWidth:"1px", borderStyle:"solid"}}><div style = {{height: "100%", display:"flex", alignItems:"center", justifyContent:"center", color:"#1d2256", fontSize:"5rem", fontWeight:"600"}}>X</div></div>
    <div class="col" style = {{borderColor:"black", borderWidth:"1px", borderStyle:"solid", height:"10rem"}}><div style = {{height: "100%", display:"flex", alignItems:"center", justifyContent:"center", color:"#1d2256", fontSize:"5rem", fontWeight:"600"}}>X</div></div>
    <div class="w-100"></div>
    <div style = {{borderColor:"black", borderWidth:"1px", borderStyle:"solid", width: "10rem"}}><div style = {{height: "100%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.25rem"}}>Byline in gbSTEM Logo</div></div>
    <div class="col"style = {{borderColor:"black", borderWidth:"1px", borderStyle:"solid", height:"10rem"}}><div style = {{height: "100%", display:"flex", alignItems:"center", justifyContent:"center", color:"#1d2256", fontSize:"5rem", fontWeight:"600"}}></div></div>
    <div class="col" style = {{borderColor:"black", borderWidth:"1px", borderStyle:"solid"}}><div style = {{height: "100%", display:"flex", alignItems:"center", justifyContent:"center", color:"#1d2256", fontSize:"5rem", fontWeight:"600"}}></div></div>
    <div class="col" style = {{borderColor:"black", borderWidth:"1px", borderStyle:"solid"}}><div style = {{height: "100%", display:"flex", alignItems:"center", justifyContent:"center", color:"#1d2256", fontSize:"5rem", fontWeight:"600"}}></div></div>
    <div class="col" style = {{borderColor:"black", borderWidth:"1px", borderStyle:"solid"}}><div style = {{height: "100%", display:"flex", alignItems:"center", justifyContent:"center",color:"#1d2256", fontSize:"5rem", fontWeight:"600"}}>X</div></div>
  </div>
</div>

      <h2 className = "text-center p-3" style = {{marginTop:"3rem"}}>Your Contributions Will Help Us...</h2>
      <ol style = {{listStyleType:"square"}}>
        <li style = {{marginBottom:"1rem"}}><strong>Maintain our Website:</strong> Your generosity helps us keep our website up and running, serving as a valuable resource for students, parents, and educators.</li>
        <li style = {{marginBottom:"1rem"}}><strong>Secure In-Person Venues:</strong> We believe in the power of in-person interaction for effective STEM education. Your donations enable us to secure suitable venues where students can engage in hands-on learning activities.</li>
        <li style = {{marginBottom:"1rem"}}><strong>Buy Materials and Snacks for Classes:</strong> Creating an engaging and nurturing learning environment is vital to fostering students' curiosity. Your support allows us to provide the necessary materials and snacks for our in-person classes.</li>
        <li style = {{marginBottom:"1rem"}}><strong>Provide Prizes at Community Events:</strong> By donating, you help us provide exciting prizes that inspire and motivate students at our events.</li>
        <li style = {{marginBottom:"1rem"}}><strong>Access Necessary Software:</strong> Staying at the forefront of STEM education requires the use of up-to-date software. Your contributions assist us in acquiring the software needed to enhance our programs and initiatives.</li>
        <li style = {{marginBottom:"1rem"}}><strong>Thank Our Hardworking Instructors!</strong> We thank our instructors for their dedicated work each year with free gbSTEM merchandise.</li>      </ol>

      <p style = {{marginTop:"2rem", marginBottom:"5rem"}}>Together, we can empower the next generation of innovators and problem solvers. Join us in supporting STEM education by making a tax-deductible donation today. Your generosity will help us provide quality education, cultivate critical skills, and inspire students to pursue fulfilling STEM careers. Thank you for your unwavering support of the Greater Boston STEM Program.</p>


    </div>


  )
}

export default Donate;