import Navbar from "./components/Navbar";
import { Hero, Popular,Quality,Services,Offers,Review,Subscribe,Footer } from "./sections";


const App = () => (
 
   <main className = "relative">
    
    {/* Navbar */}
    <Navbar/>

    <section className = 'xl:padding-l wide:padding-r padding-b'>
      <Hero/>
    </section>

    <section className="padding">
      <Popular/>
    </section>

    <section className="padding">
      <Quality/>
    </section>
    
    <section className="padding-x py-10">
      <Services/>
    </section>
    
    <section className="padding">
      <Offers/>
    </section>
    
    <section className="padding bg-pale-blue padding">
      <Review/>
    </section>
    
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    
    <section className="padding-x padding-t pb-8 bg-black">
      <Footer/>
    </section>



   </main>

  );


export default App;