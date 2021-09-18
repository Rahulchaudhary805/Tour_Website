import React from 'react';

function Content() {
   return (
      <div>
         <section class="">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
               <div class="carousel-inner">
                  <div class="carousel-item active">
                     <img class="d-block w-100" src="Images/banner-1.jpg" alt="First slide" style={{ height: "auto" }} />
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100 " src="Images/banner-1.jpg" alt="Second slide" style={{ height: "auto" }} />
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100" src="Images/banner-1.jpg" alt="Third slide" style={{ height: "auto" }} />
                  </div>
               </div>
            </div>
         </section>

         <section class="bg-light" id="about">
            <div class="container">
               <div class="row">
                  <div class="col-sm-12 col-md-12">
                     <h3 class="text-center mt-4 text-secondary">My Trip</h3>
                  </div>
               </div>
               <div class="row">
                  <p class="mt-4 mb-5">Travelling is an important part of human life, as it gives you a break from your busy schedule and makes you feel rejuvenated for a new start. It takes away all your stress and anxiety and improves your health and mind. We can explore the beautiful nature around us and meet new people. This makes us socially stable and confident. So last time I planned to visit Goa to take a break and refresh myself mentally and physically.</p>
               </div>
            </div>
         </section>

         <section class="" id="destinations">
            <div class="container">
               <div class="row">
                  <div class="col-sm-12 col-md-12">
                     <h3 class="text-center mt-4 text-secondary">Favourite Destinations</h3>
                  </div>
               </div>
               <div class="row">
                  <div class="col-sm-4 mb-5">
                     <div class="card mt-4">
                        <img class="card-img-top" src="Images/ig-3.jpg" alt="" />
                        <div class="card-body">
                           <h4 class="card-title text-secondary">India</h4>
                           <p class="card-text text-secondary">There are several options for sleeping in India but I suggest you only one, the Oberoi Hotel in Udaipur. I only stayed for one night but I assure you, it might possibly be one of the best nights of your life. The service is unique, but the architectural beauty of the building is something transcendent. A beautiful building is extended in a green valley. In one side you can enjoy a nice pool and have a delightful view of the sea.
                           </p>
                        </div>
                        <div class="card-footer">
                           <a href="#" class="btn btn-primary">Find Out More!</a>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-4 mb-5">
                     <div class="card mt-4">
                        <img class="card-img-top" src="Images/t-2.jpg" alt="" />
                        <div class="card-body">
                           <h4 class="card-title text-secondary">Tokyo</h4>
                           <p class="card-text text-secondary">Japan (Tokyo) My dream is going to Japan to see the beautiful city Tokyo. Tokyo is the capital of Japan and it has a population of 13 million people. Tokyo is a marvelous mix of modern living and old-fashioned manners, slick high-tech gadgets and cutesy cartoon mascots. It's terribly crowded, yet can be strangely quiet. It's home to the understated, and the wacky, and you often find them right next to each other on the sidewalk.</p>
                        </div>
                        <div class="card-footer">
                           <a href="#" class="btn btn-primary">Find Out More!</a>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-4 mb-5">
                     <div class="card mt-4">
                        <img class="card-img-top" src="Images/t-1.jpg" alt="" />
                        <div class="card-body">
                           <h4 class="card-title text-secondary">Japan</h4>
                           <p class="card-text text-secondary">I have been asked many times over the past few years of blogging why I have not yet been to Japan, with the answer being that I was just waiting for a time that was right. This is a country I wanted to see as a whole over at least 2 weeks, 
                           instead of just flying in for a quick city trip to Tokyo or a ski trip in one of Japan’s famous ski resorts.I have been asked many times over the past few years of blogging why I have not yet been to Japan</p>
                        </div>
                        <div class="card-footer">
                           <a href="#" class="btn btn-primary">Find Out More!</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>


         <section class="" id="places">
            <div class="container">
               <div class="col-sm-12 col-md-12 mb-4">
                  <h3 class="text-center text-secondary mt-4">Places and Description</h3>
               </div>
               <div class="accordion" id="accordionExample">
                  <div class="card">
                     <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                           <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              Tourist Places
                           </button>
                        </h2>
                     </div>

                     <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                        Corbett has the world famous national park. Towards the east are the famous hill resorts of Darjeeling, Mirik and Kalimpong in West Bengal, Gangtok in Sikkim and Shillong in Meghalaya. Some other places of tourist interest are Kohima in Nagaland, Imphal in Manipur, Aizawl in Mizoram and Agartala in Tripura.
                        </div>
                     </div>
                  </div>
                  <div class="card">
                     <div class="card-header" id="headingTwo">
                        <h2 class="mb-0">
                           <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              Best Destination
                           </button>
                        </h2>
                     </div>
                     <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">
                        India is the land of myriad experiences and exotic locales. It is a world of resplendent colours and rich cultural locales, be it magnificent monuments, heritage temples or tombs. The country’s ancient cultural heritage is inextricable linked to its technology driven present existence. The co-existence of a number of religions and cultures, together with an awe-inspiring topography makes it the perfect place for a complete.
                        </div>
                     </div>
                  </div>
                  <div class="card">
                     <div class="card-header" id="headingThree">
                        <h2 class="mb-0">
                           <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              Best Heritages
                           </button>
                        </h2>
                     </div>
                     <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div class="card-body">
                        Heritage means what we inherit from our ancestors and from our past. India is a land of varied cultures and traditions. People from numerous castes, religions, and creeds reside in our country. Each ethnic group in our country has its own tale of origin and its set of unique traditions and culture. They have all contributed to the making of Indian history and culture. Nature has made India into a distinct geographical entity.
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>


         <section class="bg-light mt-5" id="tourist">
            <div class="container">
               <div class="row text-center">
                  <div class="col-sm-12 col-md-12 mb-4">
                     <h3 class="text-center mt-4 text-secondary">Tourist Opinions</h3>
                  </div>
                  <div class="col-md-4">
                     <div class="testimonial mb-5">
                        <div class="avatar mx-auto">
                           <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" class="rounded-circle z-depth-1 img-fluid" />
                        </div>
                        <h4 class="font-weight-bold dark-grey-text mt-4">Anna Deynah</h4>
                        <h6 class="font-weight-bold blue-text my-3">Tourist</h6>
                        <p class="font-weight-normal dark-grey-text">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                           eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
                     </div>
                  </div>

                  <div class="col-md-4">
                     <div class="testimonial mb-5">
                        <div class="avatar mx-auto">
                           <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" class="rounded-circle z-depth-1 img-fluid" />
                        </div>
                        <h4 class="font-weight-bold dark-grey-text mt-4">John Doe</h4>
                        <h6 class="font-weight-bold blue-text my-3">Tourist</h6>
                        <p class="font-weight-normal dark-grey-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam
                           corporis suscipit laboriosam, nisi ut aliquid commodi.</p>
                     </div>

                  </div>
                  <div class="col-md-4">
                     <div class="testimonial mb-5">
                        <div class="avatar mx-auto">
                           <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="rounded-circle z-depth-1 img-fluid" />
                        </div>
                        <h4 class="font-weight-bold dark-grey-text mt-4">Maria Kate</h4>
                        <h6 class="font-weight-bold blue-text my-3">Toursit</h6>
                        <p class="font-weight-normal dark-grey-text">
                           At vero eos et accusamus et iusto odio dignissimos ducimus qui
                           blanditiis praesentium voluptatum deleniti atque corrupti.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}

export default Content;